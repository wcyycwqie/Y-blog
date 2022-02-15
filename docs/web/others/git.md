---
typora-copy-images-to: ..\..\.vuepress\public\Md-IMG
typora-root-url: ..\..\.vuepress\public
---
# Git

## Github Token 

 **2021年8月13日 Github取消使用用户名密码的验证方式， 需要改用token验证**

github出于安全的考虑，将在2021年8月停止使用账号和密码的方式访问github仓库，改为token认证的方式。

```git
$ git push
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
```

#### 创建token

![image-20210817183432163](/Md-IMG/image-20210817183432163.png)

------

![image-20211026183559910](/Md-IMG/image-20211026183559910.png)

------



![image-20211026183624976](/Md-IMG/image-20211026183624976.png)

#### 设置token

`git remote set-url origin https:// + token + '@github.com/' + 仓库路径 `

![image-20220106102922802](/Md-IMG/image-20220106102922802.png)

设置完了就可以正常推送代码
