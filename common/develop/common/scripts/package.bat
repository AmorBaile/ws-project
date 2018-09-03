:: 构建过程
:: 1，准备
:: 2,安装依赖
:: 3,package/build构建dist
:: 4,publish 到 npm仓库
:: 5,commit package.json文件

:: ------------------ 开始编译  -------------------
@echo off

cd %project_path%

:: 将.npmrc配置文件从用户目录copy到workspace (在jenkins中执行bat拿不到用户的配置)
xcopy C:\Users\Administrator\.npmrc %project_path% /R/Y
@echo "copy .npmrc to workspace success"

:: ------------------  安装依赖包  ---------

set count=1
call npm install
    if %errorLevel%==0 (
        @echo "install package success!"
    ) else (
        @echo "install package failed!"
        :: 等待5s后重试
        timeout /t 5 /nobreak > nul
        if "%count%"=="20" (
            @echo "install failed"
            goto end
        ) else (
            set /a count=1
            goto install
        )
    )

:: ------------------  编译构建  ---------

:: call npm run upgrade

call npm version patch

call npm run package

call npm publish dist


