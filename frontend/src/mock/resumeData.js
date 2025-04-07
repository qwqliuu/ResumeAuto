// 由于我的简历主要是由于，帮助填写的，所以没有必要使用复杂的模板，只需要一个简单的模板即可
// 并且也不需要很精美的界面，1、简历模板(包括字段类型)，2、用户填写后的简历(用 json 存储)

export const resumeTemplate = {
    "basic_info": {
        "desc": "基本信息",
        "tutorial": "注意事项\n1. 请输入真实姓名；\n2. 请输入正确的手机号码；\n3. 请输入正确的邮箱地址。",
        "data":{
            "name": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "encrypt": true,
                "xiaoxi": "basic_info.name",
                "chinese": "姓名",
                "embedding": [
                    {
                        "label": "姓名",
                        "value_script": "",
                        "update_time": "2023-10-30T12:08:32.297000"
                    },
                    {
                        "label": "填表人签名",
                        "value_script": "",
                        "update_time": "2023-10-29T22:54:02.988000"
                    },
                    {
                        "label": "本人签名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-20T17:31:24.766000"
                    },
                    {
                        "label": "申请人",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-08T11:23:06.569000"
                    }
                ],
                "order": 0,
                "tips": "请输入真实名字"
            },
            "english_name": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "英文名",
                "embedding": [
                    {
                        "label": "英文名",
                        "update_time": "2023-10-30T12:08:45.386000"
                    }
                ],
                "order": 0
            },
            "gender": {
                "level": 0,
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "男": [
                        "男"
                    ],
                    "女": [
                        "女"
                    ]
                },
                "xiaoxi": "basic_info.gender",
                "chinese": "性别",
                "embedding": [
                    {
                        "label": "性别",
                        "value_script": "",
                        "update_time": "2023-11-09T10:47:32.902000"
                    }
                ],
                "order": 1
            },
            "date_of_birth": {
                "level": 0,
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "encrypt": true,
                "xiaoxi": "basic_info.date_of_birth",
                "chinese": "出生日期",
                "embedding": [
                    {
                        "label": "出生日期",
                        "update_time": "2023-10-30T12:08:37.299000"
                    }
                ],
                "order": 2
            },
            "age": {
                "level": 0,
                "strategy": "input",
                "hidden": true,
                "chinese": "年龄",
                "embedding": [
                    {
                        "label": "年龄",
                        "update_time": "2023-10-30T12:08:37.351000"
                    }
                ]
            },
            "ethnicity": {
                "level": 0,
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "汉族": [
                        "汉族",
                        "汉"
                    ],
                    "回族": [
                        "回族",
                        "回"
                    ],
                    "壮族": [
                        "壮族"
                    ],
                    "傣族": [
                        "傣族"
                    ],
                    "维吾尔族": [
                        "维吾尔族"
                    ],
                    "朝鲜族": [
                        "朝鲜族"
                    ],
                    "彝族": [
                        "彝族"
                    ],
                    "藏族": [
                        "藏族"
                    ],
                    "阿昌族": [
                        "阿昌族"
                    ],
                    "白族": [
                        "白族"
                    ],
                    "保安族": [
                        "保安族"
                    ],
                    "布朗族": [
                        "布朗族"
                    ],
                    "布依族": [
                        "布依族"
                    ],
                    "达斡尔族": [
                        "达斡尔族"
                    ],
                    "德昂族": [
                        "德昂族"
                    ],
                    "东乡族": [
                        "东乡族"
                    ],
                    "侗族": [
                        "侗族"
                    ],
                    "独龙族": [
                        "独龙族"
                    ],
                    "俄罗斯族": [
                        "俄罗斯族"
                    ],
                    "鄂伦春族": [
                        "鄂伦春族"
                    ],
                    "鄂温克族": [
                        "鄂温克族"
                    ],
                    "高山族": [
                        "高山族"
                    ],
                    "仡佬族": [
                        "仡佬族"
                    ],
                    "哈尼族": [
                        "哈尼族"
                    ],
                    "哈萨克族": [
                        "哈萨克族"
                    ],
                    "赫哲族": [
                        "赫哲族"
                    ],
                    "基诺族": [
                        "基诺族"
                    ],
                    "京族": [
                        "京族"
                    ],
                    "景颇族": [
                        "景颇族"
                    ],
                    "柯尔克孜族": [
                        "柯尔克孜族"
                    ],
                    "拉祜族": [
                        "拉祜族"
                    ],
                    "黎族": [
                        "黎族"
                    ],
                    "傈僳族": [
                        "傈僳族"
                    ],
                    "珞巴族": [
                        "珞巴族"
                    ],
                    "满族": [
                        "满族"
                    ],
                    "毛南族": [
                        "毛南族"
                    ],
                    "门巴族": [
                        "门巴族"
                    ],
                    "蒙古族": [
                        "蒙古族"
                    ],
                    "苗族": [
                        "苗族"
                    ],
                    "仫佬族": [
                        "仫佬族"
                    ],
                    "纳西族": [
                        "纳西族"
                    ],
                    "怒族": [
                        "怒族"
                    ],
                    "普米族": [
                        "普米族"
                    ],
                    "羌族": [
                        "羌族"
                    ],
                    "撒拉族": [
                        "撒拉族"
                    ],
                    "畲族": [
                        "畲族"
                    ],
                    "水族": [
                        "水族"
                    ],
                    "塔吉克族": [
                        "塔吉克族"
                    ],
                    "塔塔尔族": [
                        "塔塔尔族"
                    ],
                    "土家族": [
                        "土家族"
                    ],
                    "土族": [
                        "土族"
                    ],
                    "佤族": [
                        "佤族"
                    ],
                    "乌孜别克族": [
                        "乌孜别克族"
                    ],
                    "锡伯族": [
                        "锡伯族"
                    ],
                    "瑶族": [
                        "瑶族"
                    ],
                    "裕固族": [
                        "裕固族"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "xiaoxi": "basic_info.ethnic",
                "default": "汉族",
                "chinese": "民族",
                "embedding": [
                    {
                        "label": "民族",
                        "update_time": "2023-10-30T12:08:37.446000"
                    }
                ],
                "order": 3
            },
            "phone_number": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "reg": "^\\d{11}$",
                "encrypt": true,
                "xiaoxi": "contact_info.phone_number",
                "chinese": "电话",
                "embedding": [
                    {
                        "label": "电话",
                        "update_time": "2023-10-30T12:08:37.496000"
                    },
                    {
                        "label": "86",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-05-18T22:28:28.957000"
                    }
                ],
                "order": 4
            },
            "email": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "reg": "^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$",
                "encrypt": true,
                "xiaoxi": "contact_info.email",
                "chinese": "邮箱",
                "embedding": [
                    {
                        "label": "邮箱",
                        "update_time": "2023-10-30T12:08:37.548000"
                    }
                ],
                "order": 5
            },
            "wechat_id": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "encrypt": true,
                "xiaoxi": "contact_info.wechat",
                "chinese": "微信号",
                "embedding": [
                    {
                        "label": "微信号",
                        "update_time": "2023-10-30T12:08:37.593000"
                    }
                ],
                "order": 6
            },
            "qq": {
                "level": 0,
                "strategy": "input",
                "encrypt": "true",
                "chinese": "QQ",
                "order": 6,
                "embedding": [
                    {
                        "label": "QQ",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-21T14:21:17.913000"
                    },
                    {
                        "label": "qq",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-21T14:21:21.037000"
                    }
                ]
            },
            "type_of_ID_number": {
                "level": 0,
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "身份证": [
                        "身份证",
                        "国内身份证或护照（含港澳台）",
                        "国内身份证"
                    ],
                    "护照": [
                        "护照"
                    ],
                    "港澳居民来往内地通行证": [
                        "港澳居民来往内地通行证"
                    ],
                    "台湾居民来往大陆通行证": [
                        "台湾居民来往大陆通行证"
                    ],
                    "军人证": [
                        "军人证"
                    ],
                    "港澳台居民居住证": [
                        "港澳台居民居住证"
                    ],
                    "其他": [
                        "其他",
                        "其他证件"
                    ]
                },
                "default": "身份证",
                "chinese": "证件号码类型",
                "embedding": [
                    {
                        "label": "证件号码类型",
                        "update_time": "2023-10-30T12:08:37.649000"
                    }
                ],
                "order": 7
            },
            "ID_number": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "encrypt": true,
                "xiaoxi": "basic_info.national_identity_number",
                "chinese": "证件号码",
                "embedding": [
                    {
                        "label": "证件号码",
                        "update_time": "2023-10-30T12:08:37.706000"
                    }
                ],
                "order": 8
            },
            "political_affiliation": {
                "level": 0,
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "中共党员": [
                        "中共党员",
                        "中共党员（含预备党员）",
                        "中共党员(含预备党员)",
                        "中国共产党党员"
                    ],
                    "团员": [
                        "团员"
                    ],
                    "民主党派": [
                        "民主党派"
                    ],
                    "无党派人士": [
                        "无党派人士",
                        "群众"
                    ],
                    "群众": [
                        "群众"
                    ],
                    "预备党员": [
                        "预备党员"
                    ]
                },
                "xiaoxi": "basic_info.political_status",
                "chinese": "政治面貌",
                "embedding": [
                    {
                        "label": "政治面貌",
                        "update_time": "2023-10-30T12:08:41.005000"
                    }
                ],
                "order": 9
            },
            "marital_status": {
                "level": 0,
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "未婚": [
                        "未婚"
                    ],
                    "已婚": [
                        "已婚",
                        "初婚"
                    ],
                    "离异": [
                        "离异"
                    ],
                    "丧偶": [
                        "丧偶"
                    ],
                    "其他": [
                        "其他",
                        "保密"
                    ]
                },
                "xiaoxi": "basic_info.marital_status",
                "default": "未婚",
                "chinese": "婚姻状况",
                "embedding": [
                    {
                        "label": "婚姻状况",
                        "update_time": "2023-10-30T12:08:45.114000"
                    }
                ],
                "order": 11
            },
            "household_registration_location": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "户籍",
                "embedding": [
                    {
                        "label": "户口所在地",
                        "value_script": "",
                        "update_time": "2023-10-29T22:57:12.541000"
                    },
                    {
                        "label": "户籍",
                        "update_time": "2023-10-30T12:08:50.338000"
                    }
                ],
                "order": 12
            },
            "household_registration_location_type": {
                "level": 1,
                "strategy": "drop_down_box",
                "mapping": {
                    "居民户": [
                        "居民户"
                    ],
                    "工作单位集体户": [
                        "工作单位集体户"
                    ],
                    "学校集体户": [
                        "学校集体户"
                    ],
                    "留学服务机构集体户": [
                        "留学服务机构集体户"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "default": "居民户",
                "chinese": "户籍类型",
                "embedding": [
                    {
                        "label": "户籍类型",
                        "update_time": "2023-10-30T12:08:55.302000"
                    }
                ],
                "order": 13
            },
            "hometown": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "basic_info.birthplace_norm",
                "chinese": "籍贯",
                "embedding": [
                    {
                        "label": "籍贯",
                        "update_time": "2023-10-30T12:08:55.353000"
                    }
                ],
                "order": 14
            },
            "exam_registration_address": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "生源地",
                "embedding": [
                    {
                        "label": "参加高考城市",
                        "value_script": "",
                        "update_time": "2023-10-29T22:57:42.752000"
                    },
                    {
                        "label": "入大学前户口所在地",
                        "value_script": "",
                        "update_time": "2023-10-29T22:58:07.738000"
                    },
                    {
                        "label": "生源地",
                        "update_time": "2023-10-30T12:08:55.409000"
                    },
                    {
                        "label": "高考所在地",
                        "value_script": "",
                        "share_data_list": [
                            "education_background"
                        ],
                        "update_time": "2023-12-20T09:55:11.611000"
                    }
                ],
                "order": 15
            },
            "current_residence": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "basic_info.current_location_norm",
                "chinese": "现居住城市",
                "embedding": [
                    {
                        "label": "现居住城市",
                        "update_time": "2023-10-30T12:09:00.518000"
                    },
                    {
                        "label": "所在地点",
                        "value_script": "",
                        "update_time": "2023-10-30T13:03:04.166000"
                    },
                    {
                        "label": "家庭地址",
                        "value_script": "",
                        "update_time": "2023-10-30T13:03:12.952000"
                    },
                    {
                        "label": "现居住地",
                        "value_script": "",
                        "update_time": "2023-10-30T13:03:19.860000"
                    },
                    {
                        "label": "详细地址",
                        "value_script": "",
                        "update_time": "2023-10-30T13:03:27.931000"
                    }
                ],
                "order": 16
            },
            "postal_code": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "basic_info.zipcode",
                "default": "000000",
                "chinese": "邮政编码",
                "embedding": [
                    {
                        "label": "邮政编码",
                        "update_time": "2023-10-30T12:09:00.602000"
                    }
                ],
                "order": 17
            },
            "personnel_file_location": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "人事档案所在单位",
                "embedding": [
                    {
                        "label": "人事档案所在单位",
                        "update_time": "2023-10-30T12:09:01.364000"
                    }
                ],
                "order": 18
            },
            "height": {
                "level": 1,
                "desc": "带单位的输入框",
                "strategy": "unit_input",
                "unit": [
                    1,
                    0.01
                ],
                "unit_info": [
                    "单位cm",
                    "单位m"
                ],
                "reg": "^\\d{3}$",
                "chinese": "身高",
                "embedding": [
                    {
                        "label": "身高",
                        "update_time": "2023-10-30T12:09:00.676000"
                    }
                ],
                "order": 19,
                "tips": "单位是cm"
            },
            "weight": {
                "level": 1,
                "desc": "带单位的输入框",
                "strategy": "unit_input",
                "unit": [
                    1,
                    2
                ],
                "unit_info": [
                    "单位kg",
                    "单位斤"
                ],
                "reg": "^\\d{2,3}$",
                "chinese": "体重",
                "embedding": [
                    {
                        "label": "体重",
                        "update_time": "2023-10-30T12:09:00.766000"
                    }
                ],
                "order": 20,
                "tips": "单位是kg"
            },
            "blood_type": {
                "level": 0,
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "A型": [
                        "A型"
                    ],
                    "B型": [
                        "B型"
                    ],
                    "O型": [
                        "o型"
                    ],
                    "AB型": [
                        "AB型"
                    ],
                    "不明": [
                        "不明"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "chinese": "血型",
                "embedding": [
                    {
                        "label": "血型",
                        "update_time": "2023-10-30T12:08:45.287000"
                    }
                ],
                "order": 21
            },
            "health_condition": {
                "level": 0,
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "健康": [
                        "健康",
                        "良好"
                    ],
                    "良好": [
                        "良好",
                        "健康"
                    ],
                    "有病史": [
                        "有病史"
                    ]
                },
                "default": "健康",
                "chinese": "健康状况",
                "embedding": [
                    {
                        "label": "健康状况",
                        "update_time": "2023-10-30T12:08:45.193000"
                    }
                ],
                "order": 22
            },
            "special_skills": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "long_input": true,
                "xiaoxi": "others.skills",
                "chinese": "特长",
                "embedding": [
                    {
                        "label": "特长",
                        "update_time": "2023-10-30T12:09:01.447000"
                    },
                    {
                        "label": "文体特长",
                        "value_script": "",
                        "update_time": "2023-10-30T13:06:05.748000"
                    },
                    {
                        "label": "特长爱好",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-29T08:01:14.103000"
                    }
                ],
                "order": 23
            },
            "hobbies": {
                "level": 1,
                "desc": "简单数组类型，涉及到数据合并的问题",
                "strategy": "input",
                "long_input": true,
                "chinese": "兴趣爱好",
                "embedding": [
                    {
                        "label": "兴趣爱好",
                        "update_time": "2023-10-30T12:09:01.599000"
                    }
                ],
                "order": 24
            },
            "ncee_date": {
                "level": 1,
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "chinese": "高考时间",
                "embedding": [
                    {
                        "label": "高考时间",
                        "update_time": "2023-12-20T13:58:53.258000",
                        "share_data_list": [
                            "education_background"
                        ]
                    },
                    {
                        "label": "高考年份",
                        "value_script": "",
                        "share_data_list": [
                            "education_background"
                        ],
                        "update_time": "2023-12-20T13:58:50.251000"
                    }
                ],
                "order": 25
            },
            "ncee_score": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "高考分数",
                "embedding": [
                    {
                        "label": "高考分数",
                        "update_time": "2023-12-20T13:59:11.667000",
                        "share_data_list": [
                            "education_background"
                        ]
                    },
                    {
                        "label": "高考成绩",
                        "value_script": "",
                        "share_data_list": [
                            "education_background"
                        ],
                        "update_time": "2023-12-20T13:59:08.739000"
                    }
                ],
                "order": 26
            },
            "ncee_subjects": {
                "level": 1,
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "文科": [
                        "文科"
                    ],
                    "理科": [
                        "理科"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "chinese": "高考科目",
                "embedding": [
                    {
                        "label": "高考科目",
                        "update_time": "2023-10-30T12:09:01.012000"
                    }
                ],
                "order": 27
            },
            "years_of_work_experience": {
                "level": 0,
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "basic_info.num_work_experience",
                "default": 0,
                "chinese": "工作年限",
                "embedding": [
                    {
                        "label": "工作经验",
                        "value_script": "",
                        "update_time": "2023-10-29T22:58:59.962000"
                    },
                    {
                        "label": "工作年限",
                        "update_time": "2023-10-30T12:08:41.427000"
                    }
                ]
            },
            "professional_title": {
                "level": 1,
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "初级": [
                        "初级"
                    ],
                    "中级": [
                        "中级"
                    ],
                    "副高级": [
                        "副高级"
                    ],
                    "高级": [
                        "高级"
                    ],
                    "无": [
                        "无"
                    ]
                },
                "xiaoxi": "basic_info.professional_level",
                "chinese": "专业技术职称",
                "embedding": [
                    {
                        "label": "专业技术职称",
                        "update_time": "2024-09-05T21:15:56.793000",
                        "share_data_list": [],
                        "value_script": "\n            if (itemData == '无') {\n                itemData = '';\nskip = true;\n            }"
                    }
                ]
            },
            "emergency_contact": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "紧急联系人",
                "embedding": [
                    {
                        "label": "紧急联系人",
                        "update_time": "2023-10-30T12:09:01.918000"
                    }
                ]
            },
            "emergency_contact_number": {
                "level": 1,
                "desc": "普通输入框",
                "strategy": "input",
                "reg": "^\\d{11}$",
                "encrypt": true,
                "chinese": "紧急联系人电话",
                "embedding": [
                    {
                        "label": "紧急联系人电话",
                        "update_time": "2023-10-30T12:09:01.994000"
                    }
                ]
            },
            "emergency_contact_relationship": {
                "level": 1,
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "父亲": [
                        "父亲",
                        "父母"
                    ],
                    "母亲": [
                        "母亲",
                        "父母"
                    ],
                    "哥哥": [
                        "哥哥",
                        "兄弟姐妹"
                    ],
                    "姐姐": [
                        "姐姐",
                        "兄弟姐妹"
                    ],
                    "弟弟": [
                        "弟弟",
                        "兄弟姐妹"
                    ],
                    "妹妹": [
                        "妹妹",
                        "兄弟姐妹"
                    ],
                    "丈夫": [
                        "丈夫",
                        "配偶"
                    ],
                    "妻子": [
                        "妻子",
                        "配偶"
                    ],
                    "儿子": [
                        "儿子",
                        "子女"
                    ],
                    "女儿": [
                        "女儿",
                        "子女"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "chinese": "与紧急联系人关系",
                "embedding": [
                    {
                        "label": "与紧急联系人关系",
                        "update_time": "2023-10-30T12:09:02.065000"
                    },
                    {
                        "label": "紧急联系人与本人关系",
                        "value_script": "",
                        "update_time": "2023-10-30T13:07:45.339000"
                    }
                ]
            },
        }
    },
    "job_intention": {
        "desc": "求职意向",
        "tutorial": "注意事项\n1. 求职意向可添加多条，根据网申的企业不同，地域不同可以使用不同的求职意向；\n2. 薪资请填写月薪，单位是元。",
        "data": {
            "intended_position": {
                "chinese": "意向岗位",
                "strategy": "input",
                "embedding": [
                    {
                        "label": "期望工作职业",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:29.461000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            },
            "expected_start_date": {
                "strategy": "time",
                "chinese": "预计入职时间",
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "embedding": [
                    {
                        "label": "预计入职时间",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:37.909000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            },
            "current_salary": {
                "strategy": "unit_input",
                "chinese": "当前薪资",
                "reg": "^\\d+$",
                "embedding": [
                    {
                        "label": "当前薪资",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:48.744000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ],
                "tips": "请输入月薪，单位是元"
            },
            "expected_city": {
                "strategy": "input",
                "chinese": "期望工作城市",
                "embedding": [
                    {
                        "label": "期望工作地点",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:54.405000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "期望工作城市",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:56.535000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "挂职/任职的意向区域/城市",
                        "value_script": "",
                        "update_time": "2023-11-03T11:51:58.789000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "其他感兴趣的地点",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-14T17:30:54.405000"
                    }
                ]
            },
            "desired_employment_type": {
                "default": "全职",
                "strategy": "drop_down_box",
                "chinese": "期望工作性质",
                "hidden": "true",
                "mapping": {
                    "全职": [
                        "全职"
                    ],
                    "实习": [
                        "实习"
                    ]
                },
                "embedding": [
                    {
                        "label": "期望工作性质",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:06.045000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            },
            "expected_salary": {
                "strategy": "unit_input",
                "chinese": "期望薪资",
                "reg": "^\\d+$",
                "embedding": [
                    {
                        "label": "期望薪资",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:11.540000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "薪资要求",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-11-11T21:57:20.237000"
                    }
                ],
                "tips": "请输入月薪，单位是元"
            },
            "comply_with_adjustment": {
                "chinese": "服从调剂",
                "hidden": "true",
                "default": "服从",
                "strategy": "drop_down_box",
                "mapping": {
                    "服从": [
                        "服从",
                        "是"
                    ],
                    "不服从": [
                        "不服从",
                        "否"
                    ]
                },
                "embedding": [
                    {
                        "label": "服从分配",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:18.398000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "是否愿意服从公司分配",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:20.928000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "服从调剂",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:23.609000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "接受调剂",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:25.778000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            },
            "interview_location": {
                "strategy": "input",
                "chinese": "面试城市",
                "embedding": [
                    {
                        "label": "面试城市",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:35.276000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "校招面试站点",
                        "value_script": "",
                        "update_time": "2023-11-03T11:52:37.622000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            }
        }
    },
    "education_background": {
        "desc": "教育背景",
        "tutorial": "注意事项\n1. 请从最高学历开始填写；\n2. 请输入正确的学校名称；\n3. 请输入正确的学历；\n4. 请输入正确的专业名称。",
        "data": {
            "start_time": {
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "xiaoxi": "{start_time_year}-{start_time_month}-01",
                "chinese": "开始时间",
                "embedding": [
                    {
                        "label": "就读时间",
                        "value_script": "",
                        "update_time": "2023-11-03T11:46:40.412000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "开始时间",
                        "value_script": "",
                        "update_time": "2023-10-30T12:16:45.114000"
                    },
                    {
                        "label": "入学时间",
                        "value_script": "",
                        "update_time": "2023-11-03T11:33:20.612000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "本科入学时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:18:55.755000"
                    },
                    {
                        "label": "硕士入学时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:40:33.287000"
                    },
                    {
                        "label": "博士入学时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:54:09.659000"
                    },
                    {
                        "label": "Education period",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-28T22:58:13.138000"
                    },
                    {
                        "label": "最高学历入学时间",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\nlet targetBgIndex = -1;\npersonalResumeData.education_background.forEach((bg, bgIndex) => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n        targetBgIndex = bgIndex;\n    }\n});\nitemData = personalResumeData.education_background[targetBgIndex].start_time;",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:13:59.184000"
                    },
                    {
                        "label": "高中入学时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T22:31:06.201000"
                    }
                ]
            },
            "end_time": {
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "xiaoxi": "{end_time_year}-{end_time_month}-01",
                "chinese": "结束时间",
                "embedding": [
                    {
                        "label": "毕业时间",
                        "value_script": "",
                        "update_time": "2023-11-03T11:46:55.846000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "结束时间",
                        "value_script": "",
                        "update_time": "2023-10-30T12:16:53.485000"
                    },
                    {
                        "label": "取得学位日期",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:57:10.208000"
                    },
                    {
                        "label": "本科毕业时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:19:17.393000"
                    },
                    {
                        "label": "硕士（拟）毕业时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:40:47.886000"
                    },
                    {
                        "label": "博士（拟）毕业时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:56:49.754000"
                    },
                    {
                        "label": "最高学历毕业时间",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\nlet targetBgIndex = -1;\npersonalResumeData.education_background.forEach((bg, bgIndex) => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n        targetBgIndex = bgIndex;\n    }\n});\nitemData = personalResumeData.education_background[targetBgIndex].end_time;",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-01T15:19:07.610000"
                    },
                    {
                        "label": "（拟）毕业时间",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-20T21:10:53.102000"
                    },
                    {
                        "label": "高中毕业时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T22:31:30.268000"
                    }
                ]
            },
            "school": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "school_name",
                "chinese": "学校",
                "embedding": [
                    {
                        "label": "毕业学校",
                        "value_script": "",
                        "update_time": "2023-11-03T11:47:10.001000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学校名称",
                        "value_script": "",
                        "update_time": "2024-10-30T22:25:25.858000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学校全称",
                        "value_script": "",
                        "update_time": "2023-10-29T23:14:53.024000"
                    },
                    {
                        "label": "最高学历毕业学校",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            })\n            itemData = personalResumeData.education_background[targetBgIndex].school;",
                        "update_time": "2024-10-22T21:18:37.269000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学校",
                        "update_time": "2023-10-30T12:17:02.070000"
                    },
                    {
                        "label": "在职教育毕业院校",
                        "value_script": "skip = true;\nitemData = \"\";",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:16:46.996000"
                    },
                    {
                        "label": "本科毕业学校",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:19:49.521000"
                    },
                    {
                        "label": "硕士（拟）毕业学校",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:41:04.857000"
                    },
                    {
                        "label": "博士（拟）毕业学校",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:57:28.071000"
                    },
                    {
                        "label": "其他学校",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-20T09:30:47.526000"
                    },
                    {
                        "label": "全日制最高学历毕业院校",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            })\n            itemData = personalResumeData.education_background[targetBgIndex].school;",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-09T21:11:28.576000"
                    },
                    {
                        "label": "选择或搜索学校",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-21T14:37:43.115000"
                    },
                    {
                        "label": "在读院校",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\nlet targetBgIndex = -1;\npersonalResumeData.education_background.forEach((bg, bgIndex) => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n        targetBgIndex = bgIndex;\n    }\n});\nitemData = personalResumeData.education_background[targetBgIndex].school;",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-09T21:14:03.959000"
                    },
                    {
                        "label": "目前就读学校",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\nlet targetBgIndex = -1;\npersonalResumeData.education_background.forEach((bg, bgIndex) => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n        targetBgIndex = bgIndex;\n    }\n});\nitemData = personalResumeData.education_background[targetBgIndex].school;",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-09T21:14:13.319000"
                    },
                    {
                        "label": "（拟）毕业学校",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-20T21:12:20.767000"
                    },
                    {
                        "label": "最高学历其他学校",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            })\n            itemData = personalResumeData.education_background[targetBgIndex].school;",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:20:02.970000"
                    },
                    {
                        "label": "高中毕业院校",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T22:31:57.199000"
                    }
                ],
                "order": 2,
                "tips": "请输入学校全称"
            },
            "major": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "major",
                "chinese": "专业",
                "embedding": [
                    {
                        "label": "专业",
                        "update_time": "2023-12-11T19:30:57.871000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "其他专业",
                        "value_script": "",
                        "update_time": "2023-10-30T12:42:01.346000"
                    },
                    {
                        "label": "主修专业",
                        "value_script": "",
                        "update_time": "2023-12-11T19:31:05.919000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "最高学历所学专业",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel  != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            });\n            itemData = personalResumeData.education_background[targetBgIndex].major;",
                        "update_time": "2024-10-22T21:20:35.615000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "在职教育专业",
                        "value_script": "skip = true;\nitemData = \"\";",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:17:04.747000"
                    },
                    {
                        "label": "在读专业类别",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-17T11:15:17.863000"
                    },
                    {
                        "label": "本科专业",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:39:29.101000"
                    },
                    {
                        "label": "硕士专业",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:44:27.033000"
                    },
                    {
                        "label": "博士专业",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-18T14:57:54.849000"
                    },
                    {
                        "label": "全日制最高学历学习专业",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel  != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            });\n            itemData = personalResumeData.education_background[targetBgIndex].major;",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-09T21:14:42.910000"
                    },
                    {
                        "label": "专业全称",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-05-06T21:55:43.514000"
                    },
                    {
                        "label": "所学专业",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-08-24T11:25:21.673000"
                    },
                    {
                        "label": "最高学历其他专业",
                        "value_script": "            let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n            let targetBgIndex = -1;\n\n            personalResumeData.education_background.forEach((bg, bgIndex) => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel  != -1 && currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                    targetBgIndex = bgIndex;\n                }\n            });\n            itemData = personalResumeData.education_background[targetBgIndex].major;",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:21:21.152000"
                    }
                ],
                "order": 3,
                "tips": "请输入专业全称"
            },
            "student_number": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "学号",
                "embedding": [
                    {
                        "label": "学号",
                        "update_time": "2023-10-30T12:17:12.553000"
                    }
                ]
            },
            "length_of_schooling": {
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "1年": [
                        "1年"
                    ],
                    "2年": [
                        "2年"
                    ],
                    "25年": [
                        "2.5年"
                    ],
                    "3年": [
                        "3年"
                    ],
                    "4年": [
                        "4年"
                    ],
                    "5年": [
                        "5年"
                    ],
                    "其他": [
                        "其他",
                        "无"
                    ]
                },
                "default": "2年",
                "chinese": "学制",
                "embedding": [
                    {
                        "label": "学制",
                        "update_time": "2023-10-30T12:17:12.630000"
                    }
                ]
            },
            "city": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "location",
                "chinese": "城市",
                "embedding": [
                    {
                        "label": "城市",
                        "update_time": "2023-10-30T12:17:12.711000"
                    },
                    {
                        "label": "学校所在地",
                        "value_script": "",
                        "update_time": "2023-12-15T19:51:40.388000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学校所在城市",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-15T19:51:32.889000"
                    },
                    {
                        "label": "选择或搜索学校所属国家",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-21T14:39:21.291000"
                    },
                    {
                        "label": "国家/地区",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-24T10:10:21.403000"
                    }
                ]
            },
            "degree": {
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "学士": [
                        "学士",
                        "学士学位",
                        "本科"
                    ],
                    "双学士": [
                        "双学士",
                        "双学士学位"
                    ],
                    "硕士": [
                        "硕士",
                        "硕士学位",
                        "硕士研究生",
                        "全日制硕士研究生"
                    ],
                    "博士": [
                        "博士",
                        "博士学位",
                        "博士研究生",
                        "全日制博士研究生"
                    ],
                    "MBA": [
                        "MBA"
                    ],
                    "高中": [
                        "高中"
                    ],
                    "其他": [
                        "其他",
                        "无"
                    ]
                },
                "xiaoxi": "degree",
                "chinese": "学位",
                "embedding": [
                    {
                        "label": "学位",
                        "update_time": "2023-12-01T20:20:52.403000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "最高学位",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-01T20:20:32.359000"
                    },
                    {
                        "label": "在职教育最高学位",
                        "value_script": "skip = true;\nitemData = \"\";",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:17:13.644000"
                    }
                ]
            },
            "education_level": {
                "strategy": "drop_down_box",
                "mapping": {
                    "博士研究生": [
                        "博士研究生",
                        "博士",
                        "博士学位",
                        "全日制博士研究生"
                    ],
                    "MBA": [
                        "MBA"
                    ],
                    "硕士研究生": [
                        "硕士研究生",
                        "硕士",
                        "硕士学位",
                        "全日制硕士研究生",
                        "全日制教育"
                    ],
                    "本科": [
                        "本科",
                        "学士",
                        "学士学位",
                        "大学本科毕业",
                        "全日制教育"
                    ],
                    "本科双学位": [
                        "本科双学位",
                        "双学士",
                        "双学士学位"
                    ],
                    "专科": [
                        "专科"
                    ],
                    "大专": [
                        "大专"
                    ],
                    "中专": [
                        "中专"
                    ],
                    "高中": [
                        "高中"
                    ],
                    "初中": [
                        "初中"
                    ],
                    "小学": [
                        "小学"
                    ],
                    "其他": [
                        "其他",
                        "无"
                    ]
                },
                "xiaoxi": "degree",
                "chinese": "学历",
                "embedding": [
                    {
                        "label": "学历",
                        "update_time": "2023-12-01T20:23:46.332000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "最高学历",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\n\npersonalResumeData.education_background.forEach(bg => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n    }\n})\nitemData = educationLevels[minLevel];",
                        "update_time": "2024-09-05T21:20:00.370000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "当前最高学历",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\n\npersonalResumeData.education_background.forEach(bg => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n    }\n})\nitemData = educationLevels[minLevel];",
                        "update_time": "2024-09-05T21:23:11.675000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学历（系统）",
                        "value_script": "",
                        "update_time": "2023-12-01T20:23:49.953000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "教育类别",
                        "value_script": "",
                        "update_time": "2023-12-01T20:23:52.340000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "在职教育最高学历",
                        "value_script": "skip = true;\nitemData = \"\";",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:17:21.560000"
                    },
                    {
                        "label": "全日制教育最高学历",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\n\npersonalResumeData.education_background.forEach(bg => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n    }\n})\nitemData = educationLevels[minLevel];",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-05T21:22:54.166000"
                    },
                    {
                        "label": "是否最高学历",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\n            let minLevel = educationLevels.length;\n\n            personalResumeData.education_background.forEach(bg => {\n                let currentLevel = educationLevels.indexOf(bg.education_level);\n                if (currentLevel < minLevel) {\n                    minLevel = currentLevel;\n                }\n            })\n            if (educationLevels[minLevel] == itemData) {\n                itemData = '是'\n            } else {\n                itemData = '否'\n            }",
                        "share_data_list": [],
                        "update_time": "2023-12-24T18:11:04.439000"
                    },
                    {
                        "label": "选择最高学历（含在读）",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\n\npersonalResumeData.education_background.forEach(bg => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n    }\n})\nitemData = educationLevels[minLevel];",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2024-09-05T21:23:03.383000"
                    }
                ]
            },
            "form_of_study": {
                "desc": "比较简单的下拉框",
                "strategy": "drop_down_box",
                "mapping": {
                    "全日制": [
                        "全日制",
                        "全国普通高等院校全日制",
                        "普通全日制",
                        "统招",
                        "普通（统招）"
                    ],
                    "成人高等教育": [
                        "成人高等教育"
                    ],
                    "统招专升本": [
                        "统招专升本"
                    ],
                    "自学考试": [
                        "自学考试"
                    ],
                    "非统招专升本": [
                        "非统招专升本"
                    ],
                    "海外留学生": [
                        "海外留学生",
                        "全日制",
                        "统招",
                        "全日制教育",
                        "普通（统招）",
                        "普通全日制"
                    ],
                    "非全日制": [
                        "非全日制",
                        "全国普通高等院校非全日制"
                    ],
                    "网络教育": [
                        "网络教育"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "xiaoxi": "study_model",
                "default": "全日制",
                "chinese": "学习形式",
                "embedding": [
                    {
                        "label": "学习形式",
                        "update_time": "2023-11-03T12:15:32.448000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学历类型",
                        "value_script": "",
                        "update_time": "2023-11-03T12:15:39.007000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学历性质",
                        "value_script": "",
                        "update_time": "2023-11-03T12:15:41.622000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "最高学历性质",
                        "value_script": "",
                        "update_time": "2023-11-03T12:15:51.181000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "学制类型",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:31:01.687000"
                    },
                    {
                        "label": "全日制/在职",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-15T20:54:36.183000"
                    },
                    {
                        "label": "是否全日制",
                        "value_script": "if (itemData != '非全日制') {\n                itemData = '是-全日制';\n            } else {\n                itemData = '否-非全日制';\n            }",
                        "share_data_list": [],
                        "update_time": "2024-01-08T23:09:07.976000"
                    },
                    {
                        "label": "教育形式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:41:56.309000"
                    },
                    {
                        "label": "受教类型",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:41:41.543000"
                    },
                    {
                        "label": "本科受教类型",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:42:06.908000"
                    },
                    {
                        "label": "硕士受教类型",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:42:14.467000"
                    },
                    {
                        "label": "博士受教类型",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:42:22.861000"
                    }
                ]
            },
            "tier": {
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "211": [
                        "211",
                        "985或211工程学校",
                        "境内学校"
                    ],
                    "985": [
                        "985",
                        "985或211工程学校",
                        "境内学校"
                    ],
                    "其他": [
                        "其他"
                    ],
                    "境外学校": [
                        "境外学校"
                    ]
                },
                "chinese": "学校类别",
                "embedding": [
                    {
                        "label": "学校类别",
                        "update_time": "2023-10-30T12:17:13.024000"
                    }
                ]
            },
            "ncee_admission_category": {
                "desc": "下拉框的数据结构，下拉框中的元素，虽然表达的是一个意思，但是可能采用的是不同的值进行表达",
                "strategy": "drop_down_box",
                "mapping": {
                    "本科提前批": [
                        "本科提前批"
                    ],
                    "本科一批": [
                        "本科一批",
                        "第一批其他院校"
                    ],
                    "本科二批": [
                        "本科二批",
                        "第二批"
                    ],
                    "本科三批": [
                        "本科三批"
                    ],
                    "专科提前批": [
                        "专科提前批",
                        "大专"
                    ],
                    "专科普通批": [
                        "专科普通批",
                        "大专"
                    ],
                    "专科一批": [
                        "专科一批",
                        "大专"
                    ],
                    "专科二批": [
                        "专科二批",
                        "大专"
                    ],
                    "保送": [
                        "保送",
                        "保研",
                        "本科提前批"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "chinese": "录取批次",
                "embedding": [
                    {
                        "label": "录取批次",
                        "update_time": "2023-10-30T12:17:13.108000"
                    },
                    {
                        "label": "本科专业录取批次",
                        "value_script": "personalResumeData.education_background.forEach((bg, bgIndex) => {\n                if (bg.education_level == '本科' || bg.education_level == '本科双学位') {\n                    itemData = personalResumeData.education_background[bgIndex].ncee_admission_category;\n                }\n            })",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-22T08:49:37.483000"
                    }
                ]
            },
            "institute": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "department",
                "chinese": "学院（院系）",
                "embedding": [
                    {
                        "label": "学院（院系）",
                        "update_time": "2023-10-30T12:17:13.197000"
                    },
                    {
                        "label": "学院",
                        "value_script": "",
                        "update_time": "2023-10-30T13:26:01.748000"
                    },
                    {
                        "label": "学院名称",
                        "value_script": "",
                        "update_time": "2023-10-30T13:26:09.509000"
                    },
                    {
                        "label": "毕业院系",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-11T20:01:11.969000"
                    },
                    {
                        "label": "在职教育毕业院系",
                        "value_script": "skip = true;\nitemData = \"\";",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-12T10:17:31.639000"
                    }
                ]
            },
            "educational_approach": {
                "strategy": "drop_down_box",
                "mapping": {
                    "非定向": [
                        "非定向",
                        "非定向（统招、并轨）",
                        "统招统分"
                    ],
                    "定向": [
                        "定向"
                    ],
                    "委培": [
                        "委培"
                    ],
                    "自筹": [
                        "自筹"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "default": "非定向",
                "chinese": "培养方式",
                "embedding": [
                    {
                        "label": "培养方式",
                        "update_time": "2023-10-30T12:17:13.282000"
                    },
                    {
                        "label": "本科学历培养方式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:47:54.497000"
                    },
                    {
                        "label": "硕士学历培养方式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:48:14.619000"
                    },
                    {
                        "label": "博士学历培养方式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:15:17.459000"
                    }
                ]
            },
            "major_description": {
                "strategy": "input",
                "long_input": true,
                "chinese": "专业描述",
                "embedding": [
                    {
                        "label": "专业描述",
                        "update_time": "2023-10-30T12:17:13.357000"
                    }
                ]
            },
            "major_courses": {
                "strategy": "input",
                "long_input": true,
                "xiaoxi": "courses",
                "chinese": "专业课程",
                "embedding": [
                    {
                        "label": "专业课程",
                        "update_time": "2023-10-30T12:17:13.437000"
                    },
                    {
                        "label": "本科学历主修课程",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:42:55.681000"
                    },
                    {
                        "label": "硕士学历主修课程",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:43:06.272000"
                    },
                    {
                        "label": "博士学历主修课程",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:17:47.803000"
                    },
                    {
                        "label": "主修课程",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:17:55.246000"
                    }
                ]
            },
            "research": {
                "strategy": "input",
                "long_input": true,
                "chinese": "研究方向",
                "embedding": [
                    {
                        "label": "研究方向",
                        "update_time": "2023-12-11T19:39:25.938000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    }
                ]
            },
            "dissertation": {
                "strategy": "input",
                "chinese": "毕业论文",
                "embedding": [
                    {
                        "label": "毕业论文",
                        "update_time": "2023-10-30T12:17:13.601000"
                    }
                ]
            },
            "score": {
                "strategy": "input",
                "xiaoxi": "GPA",
                "chinese": "成绩",
                "embedding": [
                    {
                        "label": "成绩",
                        "update_time": "2023-10-30T12:17:13.682000"
                    },
                    {
                        "label": "GPA",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-15T17:28:17.395000"
                    },
                    {
                        "label": "学分绩点",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-23T17:17:35.511000"
                    }
                ],
                "tips": "格式：得分/满分，如87/100"
            },
            "class_rank": {
                "strategy": "drop_down_box",
                "mapping": {
                    "前5%": [
                        "前5%"
                    ],
                    "前10%": [
                        "前10%"
                    ],
                    "前20%": [
                        "前20%"
                    ],
                    "前30%": [
                        "前30%"
                    ],
                    "前50%": [
                        "前50%"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "xiaoxi": "ranking",
                "chinese": "班级排名",
                "embedding": [
                    {
                        "label": "班级排名",
                        "update_time": "2023-10-30T12:17:13.754000"
                    },
                    {
                        "label": "成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-15T17:29:13.953000"
                    }
                ]
            },
            "major_rank": {
                "strategy": "drop_down_box",
                "mapping": {
                    "前5%": [
                        "前5%"
                    ],
                    "前10%": [
                        "前10%"
                    ],
                    "前20%": [
                        "前20%"
                    ],
                    "前30%": [
                        "前30%"
                    ],
                    "前50%": [
                        "前50%"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "xiaoxi": "ranking",
                "chinese": "专业排名",
                "embedding": [
                    {
                        "label": "专业排名",
                        "update_time": "2023-10-30T12:17:13.840000"
                    },
                    {
                        "label": "成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-15T17:29:22.158000"
                    },
                    {
                        "label": "硕士学历学习成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:44:12.829000"
                    },
                    {
                        "label": "本科学历学习成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-09T23:44:26.860000"
                    },
                    {
                        "label": "博士学历学习成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:15:54.805000"
                    },
                    {
                        "label": "学习成绩排名",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:16:01.037000"
                    },
                    {
                        "label": "最高学历学习成绩排名",
                        "value_script": "let educationLevels = Object.keys(formatter.education_background.keys.education_level.mapping);\nlet minLevel = educationLevels.length;\nlet targetBgIndex = -1;\npersonalResumeData.education_background.forEach((bg, bgIndex) => {\n    let currentLevel = educationLevels.indexOf(bg.education_level);\n    if (currentLevel != -1 && currentLevel < minLevel) {\n        minLevel = currentLevel;\n        targetBgIndex = bgIndex;\n    }\n});\nitemData = personalResumeData.education_background[targetBgIndex].major_rank;",
                        "share_data_list": [],
                        "update_time": "2024-10-22T21:31:29.572000"
                    }
                ]
            },
            "educational_certificate_number": {
                "strategy": "input",
                "chinese": "学历证书编号",
                "embedding": [
                    {
                        "label": "学历证书编号",
                        "update_time": "2023-10-30T12:17:13.922000"
                    }
                ]
            },
            "degree_certificate_number": {
                "strategy": "input",
                "chinese": "学位证书编号",
                "embedding": [
                    {
                        "label": "学位证书编号",
                        "update_time": "2023-10-30T12:17:14.015000"
                    }
                ]
            },
            "department_contact": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "辅导员姓名",
                "embedding": [
                    {
                        "label": "辅导员姓名",
                        "update_time": "2023-11-03T11:49:30.320000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "院系联系人",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-11-03T16:41:45.556000"
                    },
                    {
                        "label": "证明人",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-12T10:50:40.333000"
                    }
                ]
            },
            "department_contact_number": {
                "desc": "普通输入框",
                "strategy": "input",
                "reg": "^\\d{11}$",
                "encrypt": true,
                "chinese": "辅导员联系方式",
                "embedding": [
                    {
                        "label": "辅导员联系方式",
                        "update_time": "2023-11-03T11:49:36.390000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "院系联系人电话",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-11-03T16:42:08.550000"
                    },
                    {
                        "label": "证明人联系方式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-12-12T10:51:00.990000"
                    }
                ]
            },
            "overseas_education_experience": {
                "strategy": "drop_down_box",
                "mapping": {
                    "是": [
                        "是"
                    ],
                    "否": [
                        "否"
                    ]
                },
                "default": "否",
                "chinese": "是否为海外教育经历",
                "embedding": [
                    {
                        "label": "是否为海外教育经历",
                        "update_time": "2023-10-30T12:17:14.255000"
                    }
                ]
            },
            "fail_count": {
                "strategy": "input",
                "chinese": "挂科门数",
                "default": "0",
                "hidden": true,
                "embedding": [
                    {
                        "label": "挂科门数",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T21:36:14.627000"
                    }
                ]
            }
        },
    },
    "internship_experience": {
        "desc": "实习经历",
        "tutorial": "注意事项\n1. 工作经历的描写与申请工作尽量匹配，网申的时候不一定需要填写全部的工作经历或者实习经历，可以使用我们的插件有选择性的填写相关内容；\n2. 工作经历尽量采取倒叙形式，突出最近经历；\n3. 工作内容与工作成果明确区分并且同时兼顾，描述尽量简洁；\n4. 工作成果可以用数字来描述数量，质量，效率和业绩等，突出个人成果以及做出的贡献；\n5. 证明人和离职原因尽量填写，体现了一定的真实性。",
        "data": {
            "start_time": {
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "xiaoxi": "{start_time_year}-{start_time_month}-01",
                "chinese": "开始时间",
                "embedding": [
                    {
                        "label": "工作时间",
                        "value_script": "",
                        "update_time": "2023-10-29T23:07:24.406000"
                    },
                    {
                        "label": "入职时间",
                        "value_script": "",
                        "update_time": "2023-10-29T23:07:36.911000"
                    },
                    {
                        "label": "开始时间",
                        "update_time": "2023-10-30T12:17:14.339000"
                    },
                    {
                        "label": "起止时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-28T23:00:18.304000"
                    },
                    {
                        "label": "Period",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-28T23:02:47.443000"
                    },
                    {
                        "label": "实习开始时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-05T22:38:19.710000"
                    },
                    {
                        "label": "入离职时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-07T22:09:43.822000"
                    }
                ]
            },
            "end_time": {
                "desc": "时间选择器",
                "strategy": "time",
                "formatter": [
                    "%Y-%m-%d",
                    "%Y.%m.%d",
                    "%Y/%m/%d"
                ],
                "reg": "^\\d{4}-\\d{2}-\\d{2}$",
                "xiaoxi": "{end_time_year}-{end_time_month}-01",
                "chinese": "结束时间",
                "embedding": [
                    {
                        "label": "离职时间",
                        "value_script": "",
                        "update_time": "2023-10-29T23:09:57.651000"
                    },
                    {
                        "label": "结束时间",
                        "update_time": "2023-10-30T12:17:24.276000"
                    },
                    {
                        "label": "实习结束时间",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-05T22:38:33.695000"
                    }
                ]
            },
            "company": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "company_name",
                "chinese": "公司",
                "embedding": [
                    {
                        "label": "公司",
                        "update_time": "2023-10-30T12:17:34.679000"
                    },
                    {
                        "label": "公司名称",
                        "value_script": "",
                        "update_time": "2023-10-30T12:50:18.308000"
                    },
                    {
                        "label": "工作单位",
                        "value_script": "",
                        "update_time": "2023-10-30T12:50:26.129000"
                    },
                    {
                        "label": "公司或组织名称",
                        "value_script": "",
                        "update_time": "2023-10-30T12:50:34.840000"
                    },
                    {
                        "label": "最近公司",
                        "value_script": "",
                        "update_time": "2023-11-03T11:54:36.247000",
                        "share_data_list": [
                            "basic_info"
                        ]
                    },
                    {
                        "label": "证明人单位",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-29T08:09:31.796000"
                    },
                    {
                        "label": "实习名称",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-18T21:29:59.370000"
                    },
                    {
                        "label": "实习单位",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-29T22:31:25.521000"
                    }
                ]
            },
            "department": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "department",
                "chinese": "部门",
                "embedding": [
                    {
                        "label": "部门",
                        "update_time": "2023-10-30T12:17:34.754000"
                    },
                    {
                        "label": "实习部门",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-29T22:31:44.456000"
                    }
                ]
            },
            "employment_status": {
                "strategy": "drop_down_box",
                "mapping": {
                    "全职": [
                        "全职",
                        "正式"
                    ],
                    "兼职": [
                        "兼职"
                    ],
                    "派遣": [
                        "派遣"
                    ],
                    "外包": [
                        "外包"
                    ],
                    "实习": [
                        "实习"
                    ],
                    "临时工": [
                        "临时工",
                        "临时"
                    ],
                    "其他": [
                        "其他"
                    ]
                },
                "hidden": true,
                "default": "实习",
                "chinese": "工作形式",
                "embedding": [
                    {
                        "label": "工作形式",
                        "update_time": "2023-10-30T12:17:34.838000"
                    },
                    {
                        "label": "工作类型",
                        "value_script": "",
                        "update_time": "2023-10-30T13:32:46.164000"
                    },
                    {
                        "label": "工作性质",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-13T22:34:57.247000"
                    }
                ]
            },
            "industry": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "industry",
                "chinese": "行业",
                "embedding": [
                    {
                        "label": "行业",
                        "update_time": "2023-10-30T12:17:34.921000"
                    }
                ]
            },
            "location": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "location",
                "chinese": "地点",
                "embedding": [
                    {
                        "label": "地点",
                        "update_time": "2023-10-30T12:17:34.993000"
                    },
                    {
                        "label": "工作地点",
                        "value_script": "",
                        "update_time": "2023-10-30T13:26:43.763000"
                    },
                    {
                        "label": "所在国家/地区",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T17:51:18.057000"
                    },
                    {
                        "label": "城市",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T17:51:27.864000"
                    },
                    {
                        "label": "省",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-20T17:51:36.646000"
                    }
                ]
            },
            "salary": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "salary",
                "chinese": "工资",
                "embedding": [
                    {
                        "label": "工资",
                        "update_time": "2023-10-30T12:17:35.069000"
                    },
                    {
                        "label": "职位年薪",
                        "value_script": "",
                        "update_time": "2023-10-30T13:27:30.572000"
                    }
                ]
            },
            "position": {
                "desc": "普通输入框",
                "strategy": "input",
                "xiaoxi": "job_title",
                "chinese": "职位",
                "embedding": [
                    {
                        "label": "职位",
                        "update_time": "2023-10-30T12:17:35.147000"
                    },
                    {
                        "label": "职务",
                        "value_script": "",
                        "update_time": "2023-10-30T12:53:35.858000"
                    },
                    {
                        "label": "担任职务",
                        "value_script": "",
                        "update_time": "2023-10-30T12:53:47.490000"
                    },
                    {
                        "label": "工作岗位",
                        "value_script": "",
                        "update_time": "2023-10-30T12:54:01.629000"
                    },
                    {
                        "label": "现任公司部门职务",
                        "value_script": "",
                        "share_data_list": [
                            "basic_info"
                        ],
                        "update_time": "2023-12-11T22:59:03.606000"
                    },
                    {
                        "label": "实习岗位",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-29T22:32:12.950000"
                    }
                ]
            },
            "job_description": {
                "desc": "普通输入框",
                "strategy": "input",
                "long_input": 2,
                "xiaoxi": "description",
                "chinese": "工作内容",
                "embedding": [
                    {
                        "label": "工作内容",
                        "update_time": "2023-10-30T12:17:35.225000"
                    },
                    {
                        "label": "工作内容描述",
                        "value_script": "",
                        "update_time": "2023-10-30T12:57:09.342000"
                    },
                    {
                        "label": "工作职责",
                        "value_script": "",
                        "update_time": "2023-10-30T12:57:17.131000"
                    },
                    {
                        "label": "实习内容",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-09-26T16:21:15.147000"
                    }
                ]
            },
            "work_achievements": {
                "desc": "普通输入框",
                "strategy": "input",
                "long_input": 2,
                "chinese": "工作成果",
                "embedding": [
                    {
                        "label": "工作成果",
                        "update_time": "2023-10-30T12:17:35.298000"
                    },
                    {
                        "label": "职责及成就",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-26T22:06:34.744000"
                    },
                    {
                        "label": "责任描述",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-10-30T22:04:55.570000"
                    }
                ]
            },
            "witness_name": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "证明人姓名",
                "embedding": [
                    {
                        "label": "证明人姓名",
                        "update_time": "2023-10-30T12:17:35.379000"
                    },
                    {
                        "label": "证明人",
                        "value_script": "",
                        "update_time": "2023-10-30T13:27:49.288000"
                    },
                    {
                        "label": "汇报对象",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-13T22:33:24.372000"
                    }
                ]
            },
            "witness_position": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "证明人职位",
                "embedding": [
                    {
                        "label": "证明人职位",
                        "update_time": "2023-10-30T12:17:35.460000"
                    },
                    {
                        "label": "汇报对象职位",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-14T17:49:26.144000"
                    },
                    {
                        "label": "证明人关系",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2024-08-29T08:08:45.578000"
                    }
                ]
            },
            "witness_contact": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "证明人联系方式",
                "embedding": [
                    {
                        "label": "证明人联系方式",
                        "update_time": "2023-10-30T12:17:35.534000"
                    },
                    {
                        "label": "汇报对象联系方式",
                        "value_script": "",
                        "share_data_list": [],
                        "update_time": "2023-11-14T17:49:49.198000"
                    }
                ]
            },
            "reason_for_leaving": {
                "desc": "普通输入框",
                "strategy": "input",
                "chinese": "离职原因",
                "embedding": [
                    {
                        "label": "离职原因",
                        "update_time": "2023-10-30T12:17:35.621000"
                    }
                ]
            }
        },
    }
}

export const mockResumes = [
  {
    id: 1,
    title: "前端开发工程师简历",
    version: 1,
    updateTime: "2024-03-15T10:30:00.000Z",
    content: {
      basic_info: {
        data: {
          name: {
            level: 0,
            desc: "普通输入框",
            strategy: "input",
            encrypt: true,
            xiaoxi: "basic_info.name",
            chinese: "姓名",
            value: "张小明"
          },
          english_name: {
            level: 0,
            desc: "英文名输入框",
            strategy: "input",
            encrypt: false,
            chinese: "英文名",
            value: "Alex Zhang"
          },
          gender: {
            level: 0,
            desc: "性别选择",
            strategy: "select",
            chinese: "性别",
            value: "男"
          },
          birth: {
            level: 0,
            desc: "出生日期",
            strategy: "date",
            chinese: "出生日期",
            value: "1995-06-15"
          },
          ethnicity: {
            level: 0,
            desc: "民族选择",
            strategy: "select",
            chinese: "民族",
            value: "汉族"
          },
          phone: {
            level: 0,
            desc: "电话号码",
            strategy: "input",
            encrypt: true,
            chinese: "联系电话",
            value: "13812345678"
          },
          // ... 继续补充其他基本信息字段
        }
      },
      job_intention: {
        data: {
          expected_position: {
            level: 0,
            desc: "期望职位",
            strategy: "input",
            chinese: "期望职位",
            value: "高级前端开发工程师"
          },
          expected_salary: {
            level: 0,
            desc: "期望薪资",
            strategy: "input",
            chinese: "期望薪资",
            value: "25-35k"
          },
          // ... 继续补充其他求职意向字段
        }
      },
      work_experience: {
        data: {
          company_name: {
            level: 0,
            desc: "公司名称",
            strategy: "input",
            chinese: "公司名称",
            value: "某科技有限公司"
          },
          position: {
            level: 0,
            desc: "职位",
            strategy: "input",
            chinese: "职位",
            value: "前端开发工程师"
          },
          start_date: {
            level: 0,
            desc: "开始日期",
            strategy: "date",
            chinese: "开始日期",
            value: "2020-06-01"
          },
          end_date: {
            level: 0,
            desc: "结束日期",
            strategy: "date",
            chinese: "结束日期",
            value: "2023-12-31"
          },
          witness_name: {
            level: 0,
            desc: "证明人姓名",
            strategy: "input",
            chinese: "证明人姓名",
            value: "王经理"
          },
          witness_position: {
            level: 0,
            desc: "证明人职位",
            strategy: "input",
            chinese: "证明人职位",
            value: "技术总监"
          },
          witness_contact: {
            level: 0,
            desc: "证明人联系方式",
            strategy: "input",
            chinese: "证明人联系方式",
            value: "13900000000"
          },
          reason_for_leaving: {
            level: 0,
            desc: "离职原因",
            strategy: "input",
            chinese: "离职原因",
            value: "寻求更好的发展机会"
          }
        }
      }
      // ... 继续补充其他模块
    }
  },
  {
    id: 2,
    title: "产品经理简历",
    version: 1,
    updateTime: "2024-03-15T11:20:00.000Z",
    content: {
      basic_info: {
        data: {
          name: {
            level: 0,
            desc: "普通输入框",
            strategy: "input",
            encrypt: true,
            xiaoxi: "basic_info.name",
            chinese: "姓名",
            value: "李小华"
          },
          english_name: {
            level: 0,
            desc: "英文名输入框",
            strategy: "input",
            encrypt: false,
            chinese: "英文名",
            value: "Sarah Li"
          },
          // ... 继续补充其他基本信息字段，格式同上
        }
      },
      job_intention: {
        data: {
          expected_position: {
            level: 0,
            desc: "期望职位",
            strategy: "input",
            chinese: "期望职位",
            value: "高级产品经理"
          },
          // ... 继续补充其他求职意向字段，格式同上
        }
      }
      // ... 继续补充其他模块，格式同上
    }
  }
];