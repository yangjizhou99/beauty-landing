@echo off
REM GitHub CLI 辅助脚本 - 用于管理 beauty-landing 项目
REM 使用方法: gh-helper.bat [命令]

set GH_PATH="C:\Users\92515\.mcp\gh.bat"

if "%1"=="status" (
    %GH_PATH% auth status
    goto :eof
)

if "%1"=="view" (
    %GH_PATH% repo view
    goto :eof
)

if "%1"=="push" (
    git add .
    git commit -m "更新项目文件"
    git push
    goto :eof
)

if "%1"=="pull" (
    git pull
    goto :eof
)

if "%1"=="sync" (
    git pull
    git push
    goto :eof
)

if "%1"=="issues" (
    %GH_PATH% issue list
    goto :eof
)

if "%1"=="create-issue" (
    %GH_PATH% issue create --title "%2" --body "%3"
    goto :eof
)

echo GitHub CLI 辅助脚本
echo.
echo 可用命令:
echo   status      - 查看GitHub登录状态
echo   view        - 查看当前仓库信息
echo   push        - 提交并推送更改
echo   pull        - 拉取最新代码
echo   sync        - 同步代码 (pull + push)
echo   issues      - 查看Issues列表
echo   create-issue "标题" "内容" - 创建新Issue
echo.
echo 示例:
echo   gh-helper.bat push
echo   gh-helper.bat create-issue "新功能" "添加新的服务展示"
