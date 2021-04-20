<template></template>
<script>
export default {
  name: "Notify",
  props: {
    link: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '最新资讯'
    },
    desc: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'smile'
    },
    iconColor: {
      type: String,
      default: '#108ee9'
    },
  },
  mounted() {
    const that = this
    // setTimeout 通过异步的方式，防止两个组件重叠
    setTimeout(function () {
      that.$notification.open({
        message: that.title,
        description: that.desc,
        // icon: <a-icon type="fire" style="color: #108ee9" />,
        icon: h => {
          return h(
              'a-icon',
              {
                props: {
                  type: that.icon
                },
                style: {
                  color: that.iconColor
                }
              }
          );
        },
        duration: 30,
        placement: 'bottomRight',
        btn: h => {
          return h(
              'a-button',
              {
                props: {
                  type: 'link',
                  size: 'small',
                  target: '_blank',
                },
                on: {
                  click: () => window.open(that.link,"_blank",""),
                },
              },
              '立即查看',
          );
        },
      });
    }, 10)
  },
};
</script>
