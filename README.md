## 基于React的PC端统一开发框架

编写人：陆溢昕

### 说明

前端PC端统一开发框架，是以前端技术栈统一，开发代码风格、样式统一，降低前端成员之间的协作成本，制定的前端解决方案中的一部分。推荐前端项目中使用yarn来构建。本着简单、易用、方便团队成员交流学习的原则，项目不输出react-create-app的webpack配置。使用react-app-rewired进行配置合并重写。所有环境的改动都查阅了大量文档，来做最小、最简改动。后期会持续收集其他同学需求意见，持续迭代升级本环境。

### 架构已实现：

+ 基础html、css、javascript 代码的集中整合，重新分包。
+ 项目使用TS、TSX 进行开发。
+ 目前支持less预编译语言的自动转换。
+ 路由页面的最简配置，支持路由嵌套，仿vue-router实现。
+ 组件的异步加载，并提供页面加载进度条，类似github的页面进度条。
+ 集成了antd PC UI组件库，并提供antd 全局的样式配置界面。
+ eslint 代码风格 使用 airbnb 规范，并且在git commit 提交时再次检测，代码格式不通过或有错误将导致无法提交代码。
+ 前端项目接口请求的代理处理。
+ 为了兼容性考虑，CSS代码项目里自动转换带浏览器供应商前缀的兼容写法，兼容性支持到IE10+。但是也无疑增加了样式代码包的体积。

### 页面路由配置
页面配置文件路径 <strong>src/config/router.tsx</strong>，支持嵌套路由。需要注意的是，嵌套路由进入子级页面会渲染该节点路径上的所有父级，请合理利用。一般作为父级路由的页面文件，里面需要动态的渲染 props.children，具体请参照当前文件说明。

### 环境可配置的地方
* 配置接口代理地址, 仅配置开发环境的环境变量文件即可。<strong>.env.development</strong>
  + PROXY_DOMAIN: string  需要代理到的后端接口服务器域名或者IP+端口均可
  + PROXY_PATH: string  代理到后端接口服务器的统一的路径前缀，可为空
  + HOST: string  默认情况下，开发Web服务器绑定到 localhost 。你可以使用此变量指定其他主机。
  + PORT: string  默认情况下，开发 Web 服务器将尝试侦听端口 3000 或提示你尝试下一个可用端口。你可以使用此变量指定其他端口。
* 配置打包部署后端接口域名及端口，<strong>.env.production</strong>
  + TEST_DOMAIN=https://blog.csdn.net  // 测试环境后端域名
  + TEST_PATH=/api  // 测试环境后端路径前缀
  + PROD_DOMAIN=https://blog.csdn.net  // 正式环境后端域名
  + PROD_PATH=/api  // 正式环境后端路径前缀
* 配置antd PC UI 的全局配色变量文件。 <strong>src/config/antdThemeStyleConfig.js</strong>
  + antd theme 样式全局设置
  + 可配置样式，请参考https://antdtheme.com/aliyun
* 项目页面配置 <strong>src/config/router.tsx</strong>
  + 支持嵌套路由，暂不支持配置重定向，请根据业务逻辑在<strong>src/APP.tsx</strong>使用router来进行页面如何根据业务跳转。
  + 每一级嵌套路由都会被渲染，嵌套路由会被逐级渲染，如不需要嵌套，请单独从根目录同级写。
  + 使用方式类似vue-router, 在所有页面组件，props.router为路由对象。
  + 预留前端权限控制，待跟后端同学沟通后，可以前端轻松处理。（todo =>预留 权限控制+路由守卫功能）

### 使用教程
拉取基础开发框架到项目，命令行进入项目目录，安装依赖，运行开发环境。项目就启动起来了。
```
// 进入项目目录
cd ~/work/temp

// 安装项目依赖包，PS：npm或yarn可以换国内淘宝的镜像源，增加依赖包安装速度。具体教程请直接百度。
npm i
or
yarn
``` 

### NPM 命令

运行开发环境
```
npm start
or
npm run start
or
yarn start
```

测试环境打包
```
npm run build:test
or
yarn run build:test
```

正式环境打包
```
npm run build:prod
or
yarn run build:prod
```
输出在build目录，build目录内所有内容请打包到服务器发版

### 需要注意的地方
* 在Windows下默认的换行符是CRLF，那么我们需要保证在文件提交到版本库的时候文件的换行符是LF，添加：git config --global core.autocrlf false即可，关闭自动替换，可以在Git文件系统的根目录的".gitconfig"中看到相关配置。linux上的文件系统，使用crlf ，会出大麻烦。weindows执行以下命令行，然后重新拉取项目代码。
```
git config --global core.autocrlf false
```
* 前端同学尽量少的去嵌套react组件或者dom组件的层级，避免嵌套地域。
* 目前css 样式，不支持组件css样式私有，有考察过css.module等方案，个人觉得太重，特推荐大家写样式必须命名class，且页面的组件请使用page前缀，例如： `<div className="page-xxx-xxx">页面组件</div>`。自定义组件请使用com前缀，例如： `<div className="com-xxx-xxx">自定义组件</div>`。
* 在代码中，无状态组件再使用函数组件，有状态的组件，用class的方式完成，禁止在函数组件内使用useState等钩子函数，这样不利于可读性。eslint 中的 airbnb 规范会做强制约束。
* 请各位同学不要去改动开发环境配置，有想法和建议，请提交给我，开发环境会持续迭代。
