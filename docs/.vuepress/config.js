/*
 * @Author: your name
 * @Date: 2020-12-02 10:20:27
 * @LastEditTime: 2021-02-02 14:40:23
 * @LastEditors: Chaoyue
 * @Description: In User Settings Edit
 * @FilePath: \Yblog\docs\.vuepress\config.js
 */
const path = require('path');

console.log(__dirname);

var md = require("markdown-it")({
        html: true,
        xhtmlOut: true,
        typographer: true
    }).use(require("markdown-it-anchor"), {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: '§'
    })
    .use(require("markdown-it-toc-done-right"));

module.exports = {
    port: 7878,
    title: 'Yblog',
    description: 'Just playing around',
    dest: './dist',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'User',
                link: '/user/'
            },
            {
                text: 'Game',
                link: '/game/'
            },
            {
                text: 'External',
                link: 'https://www.bilibili.com'
            },
        ],
        sidebar: [
            '/',
            '/user/',
            '/game/'
        ]
    },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    chainWebpack(config) {
        config.resolveLoader
            .modules
            .add(path.resolve(__dirname, '../../node_modules'))
    },
    alias: {
        '@module': path.resolve(__dirname, '../../node_modules'),
        '@static': path.resolve(__dirname, './public'),
        '@styles': path.resolve(__dirname, './styles')
    }
}