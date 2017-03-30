<template>
    <div class="red bg">
        这是{{page}}页面
    </div>
</template>

<script>
    import 'scss/global.scss';

    module.exports = {
        data () {
            return {
                page: 'about'
            }
        }
    }
</script>
