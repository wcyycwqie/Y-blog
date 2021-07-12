# Node-Basic

[[toc]]

## node概述

**官方描述：** Node.js 是一个基于 [Chrome V8 引擎](https://v8.dev/) 的 JavaScript 运行时环境。

**功能需求：**

- 我们可以使用node.js来搭建Web服务器

- 可以进行操作系统的交互，对文件的读写操作

Node.js 是单进程单线程应用程序，通过异步执行回调接口，来处理大量的并发。

## node基础

### 事件驱动程序



## node 模块

模块是Node.js 平台自带的一套**基本的 API(功能模块)**



### http模块

**可通过http模块搭建服务器**


```js
    // 1. 加载http模块
    const http = require('http');
    
    // 2. 创建server对象
    const server = http.createServer();
    
    // 3. 监听端口，开启服务
    server.listen(3000, () => console.log('server start'));
    
    // 4. 监听浏览器的请求。只要有浏览器的请求，就会触发下面的事件
    server.on('request', (req, res) => {
        // req：request，请求；它是一个对象；它包含了所有和请求相关的信息
        // res：response，响应；它是一个对象；它包含了所有和响应相关的信息
        /**
         * res.end('响应的内容'); --- 它可以设置响应体，并做出响应
         * res.setHeader(); --- 设置响应头
         * res.write('响应体'); -- 设置响应体，但不会做出响应
         * res.writeHead() -- 设置响应头，设置响应状态码
         * res.statusCode = 404;  ---- 设置响应状态码
         */
        // res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('hello，我是服务器');
    });
```



### path模块

