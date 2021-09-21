#!/bin/bash

# 参考自 hutool 工具
help(){
  echo "--------------------------------------------------------------------------"
  echo ""
  echo "usage: ./jap.sh [updv] [version]"
  echo ""
  echo "-updv [version num]   Update all jap related versions."
  echo ""
  echo "--------------------------------------------------------------------------"
}

case "$1" in
  'updv')
    bin/updVersion.sh $2
	;;
  'p')
    bin/push.sh
	;;
  'pd')
    bin/push-dev.sh
	;;
  'd')
    bin/deploy.sh
	;;
  *)
    help
esac
