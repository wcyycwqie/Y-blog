/*
 * @Author: your name
 * @Date: 2020-12-02 10:20:27
 * @LastEditTime: 2020-12-04 18:05:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Yblog\docs\.vuepress\config.js
 */
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
    }
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@alias': 'path/to/some/dir'
    //         }
    //     }
    // }
}