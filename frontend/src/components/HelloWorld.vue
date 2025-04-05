<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="fetchData">获取后端数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '点击按钮获取后端数据'
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:8081/page/api/hello')
        this.message = response.data
      } catch (error) {
        console.error('Error:', error)
        this.message = '获取数据失败'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  margin-top: 60px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
