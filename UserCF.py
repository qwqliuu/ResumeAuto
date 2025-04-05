# coding = utf-8

# 基于用户的协同过滤推荐算法实现
import random
import math
from operator import itemgetter
from tqdm import tqdm  # 添加进度条支持
import argparse
import csv  # 添加到文件开头的导入部分


class UserBasedCF():
    # 初始化相关参数
    def __init__(self, debug=False):
        # 找到与目标用户兴趣相似的20个用户，为其推荐10部电影
        self.n_sim_user = 20
        self.n_rec_movie = 10
        self.debug = debug  # 添加调试模式标志

        # 将数据集划分为训练集和测试集
        self.trainSet = {}
        self.testSet = {}

        # 用户相似度矩阵
        self.user_sim_matrix = {}
        self.movie_count = 0

        print('Similar user number = %d' % self.n_sim_user)
        print('Recommneded movie number = %d' % self.n_rec_movie)
        if self.debug:
            print('Running in debug mode')


    # 读文件得到"用户-电影"数据
    def get_dataset(self, filename, pivot=0.75):
        trainSet_len = 0
        testSet_len = 0
        # 在调试模式下限制读取的数据量
        max_lines = 10000 if self.debug else float('inf')
        line_count = 0
        
        for line in self.load_file(filename):
            if line_count >= max_lines:
                break
                
            user, movie, rating, timestamp = line.split(',')
            # 将评分转换为浮点数
            rating = float(rating)
            if random.random() < pivot:
                self.trainSet.setdefault(user, {})
                self.trainSet[user][movie] = rating  # 存储实际的评分值
                trainSet_len += 1
            else:
                self.testSet.setdefault(user, {})
                self.testSet[user][movie] = rating  # 存储实际的评分值
                testSet_len += 1
            line_count += 1
            
        print('Split trainingSet and testSet success!')
        print('TrainSet = %s' % trainSet_len)
        print('TestSet = %s' % testSet_len)


    # 读文件，返回文件的每一行
    def load_file(self, filename):
        with open(filename, 'r') as f:
            for i, line in enumerate(f):
                if i == 0:  # 去掉文件第一行的title
                    continue
                yield line.strip('\r\n')
        print('Load %s success!' % filename)


    # 计算用户之间的相似度
    def calc_user_sim(self):
        # 构建"电影-用户"倒排索引
        # key = movieID, value = list of userIDs who have seen this movie
        print('Building movie-user table ...')
        movie_user = {}
        for user, movies in self.trainSet.items():
            for movie in movies:
                if movie not in movie_user:
                    movie_user[movie] = set()
                movie_user[movie].add(user)
        print('Build movie-user table success!')

        self.movie_count = len(movie_user)
        print('Total movie number = %d' % self.movie_count)

        print('Build user co-rated movies matrix ...')
        # 添加进度条
        total_movies = len(movie_user)
        for movie, users in tqdm(movie_user.items(), total=total_movies, desc="Processing movies"):
            for u in users:
                for v in users:
                    if u == v:
                        continue
                    self.user_sim_matrix.setdefault(u, {})
                    self.user_sim_matrix[u].setdefault(v, 0)
                    self.user_sim_matrix[u][v] += 1
        print('Build user co-rated movies matrix success!')

        # 计算相似性
        print('Calculating user similarity matrix ...')
        for u, related_users in self.user_sim_matrix.items():
            for v, count in related_users.items():
                self.user_sim_matrix[u][v] = count / math.sqrt(len(self.trainSet[u]) * len(self.trainSet[v]))
        print('Calculate user similarity matrix success!')


    # 针对目标用户U，找到其最相似的K个用户，产生N个推荐
    def recommend(self, user):
        K = self.n_sim_user
        N = self.n_rec_movie
        rank = {}
        watched_movies = self.trainSet[user]

        # v=similar user, wuv=similar factor
        for v, wuv in sorted(self.user_sim_matrix[user].items(), key=itemgetter(1), reverse=True)[0:K]:
            for movie in self.trainSet[v]:
                if movie in watched_movies:
                    continue
                rank.setdefault(movie, 0)
                rank[movie] += wuv
        return sorted(rank.items(), key=itemgetter(1), reverse=True)[0:N]


    # 产生推荐并通过准确率、召回率和覆盖率进行评估
    def evaluate(self):
        print("Evaluation start ...")
        N = self.n_rec_movie
        # 准确率和召回率
        hit = 0
        rec_count = 0
        test_count = 0
        # 覆盖率
        all_rec_movies = set()

        for i, user, in enumerate(self.trainSet):
            test_movies = self.testSet.get(user, {})
            rec_movies = self.recommend(user)
            for movie, w in rec_movies:
                if movie in test_movies:
                    hit += 1
                all_rec_movies.add(movie)
            rec_count += N
            test_count += len(test_movies)

        precision = hit / (1.0 * rec_count)
        recall = hit / (1.0 * test_count)
        coverage = len(all_rec_movies) / (1.0 * self.movie_count)
        print('precisioin=%.4f\trecall=%.4f\tcoverage=%.4f' % (precision, recall, coverage))


    # 添加一个新的方法来展示推荐结果
    def show_recommendation(self, user_id, movies_data_path='./ml-20m/movies.csv'):
        # 读取电影信息
        movies_dict = {}
        with open(movies_data_path, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            next(reader)  # 跳过标题行
            for row in reader:
                movieId, title, genres = row
                movies_dict[movieId] = {'title': title, 'genres': genres}
        
        # 获取推荐结果
        recommendations = self.recommend(user_id)
        
        print(f"\n为用户 {user_id} 推荐的电影：")
        print("-" * 60)
        for i, (movieId, score) in enumerate(recommendations, 1):
            movie = movies_dict.get(movieId, {'title': '未知', 'genres': '未知'})
            print(f"{i}. {movie['title']} (推荐指数: {score:.4f})")
            print(f"   类型: {movie['genres']}")
        print("-" * 60)


    # 在 UserBasedCF 类中添加新方法
    def show_available_users(self, limit=10):
        users = list(self.trainSet.keys())
        print(f"\n当前数据集中的用户示例 (总计 {len(users)} 个用户):")
        print(f"前 {limit} 个用户ID: {', '.join(users[:limit])}")


if __name__ == '__main__':
    # 添加命令行参数解析
    parser = argparse.ArgumentParser(description='User-based Collaborative Filtering')
    parser.add_argument('--debug', action='store_true', help='Run in debug mode with limited data')
    parser.add_argument('--data', default='./ml-20m/ratings.csv', help='Path to ratings.csv file')
    parser.add_argument('--movies', default='./ml-20m/movies.csv', help='Path to movies.csv file')
    args = parser.parse_args()
    
    userCF = UserBasedCF(debug=args.debug)
    userCF.get_dataset(args.data)
    userCF.calc_user_sim()
    
    # 显示可用的用户ID
    userCF.show_available_users()
    
    while True:
        user_id = input("\n请输入用户ID (输入 'q' 退出): ")
        if user_id.lower() == 'q':
            break
            
        if user_id not in userCF.trainSet:
            print(f"用户 {user_id} 不存在，请重新输入")
            continue
            
        userCF.show_recommendation(user_id, args.movies)    