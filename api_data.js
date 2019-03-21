define({ "api": [  {    "type": "get",    "url": "/users/getAllCourses",    "title": "getAllCourses",    "description": "<p>getAllCourses 获取所有可以学习的课程列表</p>",    "group": "Courses_APIs",    "parameter": {      "examples": [        {          "title": "login:",          "content": "https://wechat-api.wangdongdong.xyz/users/getAllCourses",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求失败:",          "content": "[false]",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求成功:",          "content": "['...','...',...,'...']",          "type": "json"        }      ]    },    "filename": "controller/index.js",    "groupTitle": "Courses_APIs",    "name": "GetUsersGetallcourses"  },  {    "type": "get",    "url": "/users/getIndex",    "title": "getIndex",    "description": "<p>getIndex 根据单词获取在该课程下的索引（用于进度管理）</p>",    "group": "Courses_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "listName",            "description": "<p>课程名</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "word",            "description": "<p>进度单词</p>"          }        ]      },      "examples": [        {          "title": "login:",          "content": "https://wechat-api.wangdongdong.xyz/users/getIndex?listName=${listName}&&word=${word}",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求失败:",          "content": "[false]",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求成功:",          "content": "[<number> index]",          "type": "json"        }      ]    },    "filename": "controller/index.js",    "groupTitle": "Courses_APIs",    "name": "GetUsersGetindex"  },  {    "type": "get",    "url": "/users/getWordLists",    "title": "getWordLists",    "description": "<p>getWordLists 获取课程名下所有的单词列表</p>",    "group": "Courses_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户微信OpenID</p>"          }        ]      },      "examples": [        {          "title": "login:",          "content": "https://wechat-api.wangdongdong.xyz/users/login?name=${name}&&password=${openid}",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求失败:",          "content": "{'code':0,\n 'userinfo':{...}}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求成功:",          "content": "{'code':1,\n 'userinfo':{...}}",          "type": "json"        }      ]    },    "filename": "controller/index.js",    "groupTitle": "Courses_APIs",    "name": "GetUsersGetwordlists"  },  {    "type": "get",    "url": "/users/getall",    "title": "getall",    "description": "<p>getall 获取所有已学习过的用户信息</p>",    "group": "Users_APIs",    "parameter": {      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users/getall",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{已订阅打卡服务的用户信息}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "[false]",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "GetUsersGetall"  },  {    "type": "get",    "url": "/users/login",    "title": "login",    "description": "<p>login 登陆获取用户的学习数据</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户昵称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户微信OpenID</p>"          }        ]      },      "examples": [        {          "title": "login:",          "content": "https://wechat-api.wangdongdong.xyz/users/login?name=${name}&&password=${openid}",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求失败:",          "content": "{'code':0,\n 'userinfo':{...}}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求成功:",          "content": "{'code':1,\n 'userinfo':{...}}",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "GetUsersLogin"  },  {    "type": "get",    "url": "/users/push",    "title": "push",    "description": "<p>push 向所有打卡用户推送打卡提醒</p>",    "group": "Users_APIs",    "parameter": {      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users/push",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{已发送用户的信息}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "[false]",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "GetUsersPush"  },  {    "type": "GET",    "url": "/users/translate",    "title": "translate",    "description": "<p>translate 获取请求单词的释意</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "word",            "description": "<p>用户要查询的生词</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users/translate?word=${word}",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n    \"tSpeakUrl\": \"http://openapi.youdao.com/ttsapi?q=%E4%BA%8B%E6%95%85&langType=zh-CHS&sign=185D1923FA801DA1C629CF4BE906FF63&salt=1553164782112&voice=4&format=mp3&appKey=2b0f39d4a30fdb69\",\n    \"web\": [\n        {\n            \"value\": [\n                \"意外\",\n                \"事故\",\n                \"意外事件\"\n            ],\n            \"key\": \"Accident\"\n        },\n        {\n            \"value\": [\n                \"汽车事故\"\n            ],\n            \"key\": \"automobile accident\"\n        },\n        {\n            \"value\": [\n                \"脑血管意外\",\n                \"脑卒中\",\n                \"脑中风\"\n            ],\n            \"key\": \"cerebrovascular accident\"\n        }\n    ],\n    \"query\": \"accident\",\n    \"translation\": [\n        \"事故\"\n    ],\n    \"errorCode\": \"0\",\n    \"dict\": {\n        \"url\": \"yddict://m.youdao.com/dict?le=eng&q=accident\"\n    },\n    \"webdict\": {\n        \"url\": \"http://m.youdao.com/dict?le=eng&q=accident\"\n    },\n    \"basic\": {\n        \"exam_type\": [\n            \"TOEFL\",\n            \"高中\",\n            \"初中\",\n            \"CET6\",\n            \"CET4\",\n            \"商务英语\"\n        ],\n        \"us-phonetic\": \"'æksədənt\",\n        \"phonetic\": \"'æksɪdənt\",\n        \"uk-phonetic\": \"'æksɪdənt\",\n        \"uk-speech\": \"http://openapi.youdao.com/ttsapi?q=accident&langType=en&sign=BA91D5F2D4985B40A22308F05DFD6F61&salt=1553164782112&voice=5&format=mp3&appKey=2b0f39d4a30fdb69\",\n        \"explains\": [\n            \"n. 事故；意外；[法] 意外事件；机遇\"\n        ],\n        \"us-speech\": \"http://openapi.youdao.com/ttsapi?q=accident&langType=en&sign=BA91D5F2D4985B40A22308F05DFD6F61&salt=1553164782112&voice=6&format=mp3&appKey=2b0f39d4a30fdb69\"\n    },\n    \"l\": \"en2zh-CHS\",\n    \"speakUrl\": \"http://openapi.youdao.com/ttsapi?q=accident&langType=en&sign=BA91D5F2D4985B40A22308F05DFD6F61&salt=1553164782112&voice=4&format=mp3&appKey=2b0f39d4a30fdb69\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{}",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "GetUsersTranslate"  },  {    "type": "get",    "url": "/users/userId",    "title": "getUserId",    "description": "<p>getUserId 根据WeChat提供的EntropyCode获取用户OpenID</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "code",            "description": "<p>WeChat提供的EntropyCode</p>"          }        ]      },      "examples": [        {          "title": "login:",          "content": "https://wechat-api.wangdongdong.xyz/users/userId?${code}",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\"errcode\":40029,\"errmsg\":\"invalid code, hints: [ req_id: JIkb36aLRa-Vb8H8 ]\"}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\"session_key\":\"oHXYPAIQ4uAnC02epFxcBQ==\",\"openid\":\"ocGOW5GnUf3dKHpKvnPkHI1Qx3PA\"}",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "GetUsersUserid"  },  {    "type": "post",    "url": "/users/deleteCourse",    "title": "deleteCourse",    "description": "<p>deleteCourse 根据用户选择的词汇课程来删除课程</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "courses",            "description": "<p>用户要删除的课程</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n      }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 0\n      }   *",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersDeletecourse"  },  {    "type": "post",    "url": "/users/getFormID",    "title": "getFormID",    "description": "<p>getFormID 根据用户提交的表单以获取并储存FormID来推送信息</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "formid",            "description": "<p>用户产生的formid</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "[true]",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "[false]",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersGetformid"  },  {    "type": "post",    "url": "/users/removeUnfam",    "title": "removeUnfam",    "description": "<p>removeUnfam 向用户某一课程生词本删除生词</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "word",            "description": "<p>用户要删除的生词</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "course",            "description": "<p>用户正在学习的课程名</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n      }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 0\n      }   *",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersRemoveunfam"  },  {    "type": "post",    "url": "/users/selectCourses",    "title": "selectCourses",    "description": "<p>selectCourses 根据用户选择的词汇课程来添加课程</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "courses",            "description": "<p>用户选择添加的课程数组</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "selectCourses:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n      }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 0\n      }   *",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersSelectcourses"  },  {    "type": "post",    "url": "/users/updateLearningPro",    "title": "updateLearningPro",    "description": "<p>updateLearningPro 更新用户的学习进度</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "prograss",            "description": "<p>用户学习到的单词</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "course",            "description": "<p>用户正在学习的课程名</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n      }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 0\n      }   *",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersUpdatelearningpro"  },  {    "type": "post",    "url": "/users/updateUnfam",    "title": "updateUnfam",    "description": "<p>updateUnfam 向用户某一课程生词本添加生词</p>",    "group": "Users_APIs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "word",            "description": "<p>用户要添加的单词</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "course",            "description": "<p>用户正在学习的课程名</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "openid",            "description": "<p>用户的OpenID</p>"          }        ]      },      "examples": [        {          "title": "String:",          "content": "https://wechat-api.wangdongdong.xyz/users",          "type": "string"        }      ]    },    "version": "0.0.2",    "error": {      "examples": [        {          "title": "请求成功:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 1\n      }",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "请求失败:",          "content": "{\n          \"n\": 1,\n          \"nModified\": 1,\n          \"ok\": 0\n      }   *",          "type": "json"        }      ]    },    "filename": "controller/user.js",    "groupTitle": "Users_APIs",    "name": "PostUsersUpdateunfam"  }] });
