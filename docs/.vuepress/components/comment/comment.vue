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
                clientID: '51b4dce978c91ab3d004',
                clientSecret: '74859b32f6886b1c6da39269a187432b91b4ec4d ',
                repo: 'jap-talk',
                owner: 'fujieid',
                admin: ['fujieid'],
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
