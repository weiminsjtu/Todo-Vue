<template>
    <div id="app">
        <Header></Header>
        <Todo></Todo>
    </div>
</template>

<script>
    import Header from './todo/header.vue';
    import Todo from './todo/todo.vue';

    export default {
        components: {
            Header,
            Todo
        }
    }
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

</style>