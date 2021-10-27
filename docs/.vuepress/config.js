/*
 * @Author: your name
 * @Date: 2020-12-02 10:20:27
 * @LastEditTime: 2021-10-27 10:50:33
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
    port: 6868,
    title: 'Yblog',
    description: 'Just Playing Around',
    dest: './dist',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Web',
                link: '/web/'
            },
            {
                text: 'User',
                link: '/user/'
            },
            {
                text: 'External',
                link: 'https://www.bilibili.com'
            },
        ],
        sidebar: [{
                title: 'Web World',
                path: '/web',
                collapsable: false, // 是否折叠, 默认值是 true,
                children: [{
                        title: 'JavaScript',
                        path: '/web/javascript/',
                        children: [
                            '/web/javascript/Javascript-summary',
                            '/web/javascript/Canvas'
                        ]
                    },
                    {
                        title: 'Node.js',
                        path: '/web/node/',
                        children: [
                            '/web/node/node-basic',
                        ]
                    },
                    {
                        title: 'Git',
                        path: '/web/others/git',
                    }
                    // '/web/javascript/Javascript-summary'

                ],
            }

        ],
        displayAllHeaders: true
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