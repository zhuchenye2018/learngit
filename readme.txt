Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.


学习命令：

创建版本库：

mkdir learngit;
cd learngit;
pwd;//显示目录地址（目录避免中文）

git init;//目录变成仓库初始化；

文件添加版本库：

必须放到learngit目录
不可以用window的记事本编辑；

git add readme.txt.//文件添加到缓存库。

git commit -m"xxx"//提交到库。

git status//文件当前转态。要随时掌握工作区的状态

修改态change,没有添加过Untracked.

git diff//查看修改的内容。

查看历史记录


git log//查看历史记录。

git log--pretty=oneline//精简版

后退

git reset --hard HEAD^.//后退要找到的版本。

先后退再返回

用命令窗口的gitID值。

git reflog//显示命令历史记录。关掉命令窗口后的情况下使用。

HEAD指向的版本就是当前版本
git reset --hard commit_id

工作区撤销修改

git checkout --file//丢弃工作区的修改。//文件回到最近一次git commit或git add时的状态

stage缓存区撤销修改

git reset HEAD file//

删除文本

git rm file//删除文件。


gitHub远程仓库的使用。

git remote add origin//关联远程库

git remote remove origin//取消关联

git push -u origin master//本地库推送到远程库。

克隆远程库


git clone ssh地址。

分支的建立和合并

git checkout -b dev//创建一个叫dev的分支。




