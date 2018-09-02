## 创建工程脚本
    ng new xxx --skip-install --style=scss --skip-tests --prefix ws

## 解决node-sass安装失败（如果淘宝镜像被屏蔽，请看这儿 https://blog.csdn.net/bug_zero/article/details/65968959 ）
    把下载源指定为cnpm仓库，
        npm config set registry http://registry.npm.taobao.org
        yarn config set registry http://registry.npm.taobao.org
    指定node-sass的下载源
        npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
        yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
