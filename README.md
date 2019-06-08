# spug-vue-admin

基于开源运维平台Spug的后台，使用Vue+Element组件库开发的脚手架，可以独立启动运行，根据自己需要快速开发需要的后台功能。


##### Demo演示地址：<https://spug.qbangmang.com/login>
##### Demo账号密码：<admin/spug>
#### 模拟接口地址：https://easy-mock.com/

##### 开源运维平台：https://github.com/openspug/spug

--- 

### Preview 预览
----------------------------
![image](http://image.qbangmang.com/login.gif)
![image](http://image.qbangmang.com/user.gif)
![image](http://image.qbangmang.com/host.gif)
![image](http://image.qbangmang.com/publish.gif)
![image](http://image.qbangmang.com/tasks.gif)


#### Environment 环境

```
# nodejs需要自行安装

Node >= 6
```

#### Develop 开发环境启动

``` bash
# 克隆代码，并启动
shell> git clone https://github.com/openspug/spug-vue-admin.git

shell> cd spug-vue-admin && npm install

shell> npm run dev

# 本地启动后，访问：http://localhost:8080 输入任意账号密码就可以登录。

```

#### Element组件库
----------------------------
 * [前端UI组件库](https://element.eleme.cn/2.8/#/zh-CN/component/installation)

#### 数据格式
```
1、后端接口配置文件路径：
spug-vue-admin/src/config/env.js


2、默认接口使用https://easy-mock.com/ 模拟的数据

3、需要返回的格式：
{
    "data": "xxx",
    "message": "xxx"
    
}

4、接口实例：
# 登录接口数据格式：
{
  "data": {
    "token": "59e0a5e09e854f75b591dff4aa048f3c",
    "is_supper": "true",
    "nickname": "admin",
    "permissions": []
  },
  "message": ""
}

# 用户列表数据格式：
{
  'data': {
    'data': [{
        'id': 1,
        'role_id': 2,
        'username': 'admin',
        'nickname': 'admin',
        'password_hash': 'pcbfabd90b0f1a72dec248e785ceeac4e169f',
        'email': 'zyp@qq.com',
        'mobile': '13888888899',
        'is_supper': 'false',
        'is_active': 'true',
        'access_token': '',
        'token_expired': 1558874142,
        'last_login': '1小时前'
      },
      {
        'id': 2,
        'role_id': 2,
        'username': 'zuyp',
        'nickname': 'zuyp',
        'password_hash': 'pbkdf2:1a72dec248e785ce271e8849f',
        'email': 'admin@qq.com',
        'mobile': '13888888899',
        'is_supper': 'false',
        'is_active': 'true',
        'access_token': '',
        'token_expired': 1558874142,
        'last_login': '1小时前'
      }
    ],
    'total': 2
  },
  'message': ''
}

```


## Build 打包

``` bash
shell> cd spug-vue-admin 
shell> npm run build

```
