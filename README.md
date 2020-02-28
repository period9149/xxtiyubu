# 信息体育部官网

该项目已经部署在阿里云服务器上，PC端浏览器输入 https://hazu.xxtiyubu.club 可访问，手机端目前尚未适配

### 1. 环境配置

1. 开发环境：macOS 10.13.6, Node.js v12.14.1, vue-cli 4.1.2

1. 数据库: MongoDB

1. 编辑器: WebStorm

1. 辅助软件: Visual Studio Code, Robo 3T, Terminal, Chrome, FireFox

### 2. 后台管理界面

1. 基于Element UI的后台管理基础界面搭建

1. 人员模块

1. 为提高代码的复用性，写了一个**通用 CRUD 接口**，具体实现方式为：为每个需要进行CRUD的对象创建模型，在请求接口api传入相关模型信息，通过inflection包转换成模型对象名（这些写一个中间件操作）, 再请求这个对象名所对应的模型，绑定在req.Model。这样，模型对象就可以是动态的，例如api为 'rest/people', 通过inflection包的classify可以转换成Person, 后台的CRUD接口就可以通过req.Model（Person）统一地对不同的数据集合进行类似的操作

1. 球队模块，球队这里有一条字段是队长，与人员模块相互关联

1. 活动模块，采用富文本编辑器 vue2-editor

1. 团建模块，类似于活动模块

1. 管理员登录模块

    - 简单的登录界面
    - 管理员密码使用bcrypt包的hashSync方法进行加密，compareSync方法进行解密
    - 服务端登录校验（根据用户名找用户 --> 校验密码 --> 返回token）
    - 客户端路由限制（beforeEach, meta, axios拦截）
  
### 3. 主界面

1. 用scss预定义一些基本样式，包括颜色，文字大小，margin，padding

1. 页面主要分为首页、成员、球队、活动和团建五大模块，页面布局大多为flex布局以及Grid布局

1. 页面图标来自于iconfont：https://www.iconfont.cn/ 以及 Element UI

1. 页面上的时间均用dayjs包按照YYYY-MM-DD的形式进行规范

1. 页面字体来自于有字库 https://www.webfont.com/

### 四、上线

1. 生产环境编译

1. 购买域名和服务器

1. 域名解析

1. Nginx 安装和配置

1. MongoDB数据库的安装和配置

1. git 安装、配置 ssh-key

1. Node.js 安装

1. git拉取代码，安装pm2启动项目

1. 配置 nginx 的反向代理 https://www.digitalocean.com/community/tools/nginx

1. 迁移本地数据到服务器 (mongodump) 在Robo 3T用JavaScript代码对MongoDB数据库进行操作

1. 使用免费SSL证书启用HTTPS安全连接 https://letsencrypt.org/

### 五、后续优化

1. vue路由的懒加载（按需加载）：把不同路由对应的组件分割成不同的代码块，当路由被访问的时候才加载对应组件，提高效率

1. 为提高网站安全性，web前端界面禁止了右键（查看源代码的一种途径）

1. 后台管理员界面添加球队优化

1. 持续优化中...