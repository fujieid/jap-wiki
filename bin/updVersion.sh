#!/bin/bash

#------------------------------------------------
# 参考自 hutool 工具
# 升级 jap 版本，包括：
# 1. 升级pom.xml中的版本号
# 2. 替换README.md中的版本号
#------------------------------------------------
pwd=$(pwd)
echo "当前路径：$pwd"

if [ -n "$1" ];then
    new_version="$1"
    old_version=`cat $pwd/bin/version.txt`
    echo "$old_version 替换为新版本 $new_version"
else
    # 参数错误，退出
    echo "ERROR: 请指定新版本！"
    exit
fi

if [ ! -n "$old_version" ]; then
    echo "ERROR: 旧版本不存在，请确认 bin/version.txt 中信息正确"
    exit
fi

# 替换README.md等文件中的版本
sed -i "s/${old_version}/${new_version}/g" $pwd/docs/about.md
sed -i "s/${old_version}/${new_version}/g" $pwd/docs/.vuepress/config.js

# 保留新版本号
echo "$new_version" > $pwd/bin/version.txt
