// Comment.vue
<template>
    <div class="gitalk-container">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
    import 'gitalk/dist/gitalk.css'
    import Gitalk from 'gitalk'

    export default {
        name: 'comment',
        mounted() {
            const commentConfig = {
                clientID: 'e58f172df200e88e266b',
                clientSecret: 'ee22ce68934616f7de043a950cbdb7d613a03202 ',
                repo: 'justauth-talk',
                owner: 'zhangyd-c',
                admin: ['zhangyd-c'],
                id: location.hash,
                // facebook-like distraction free mode
                distractionFreeMode: false
            };
            const gitalk = new Gitalk(commentConfig);
            gitalk.render('gitalk-container');
        }
    };
</script>

<style>
    .gitalk-container {
        border-top: 1px #eaecef solid;
    }
</style>
