<template lang="pug">
    main#app
        Header
        router-view
        Footer
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'

export default {
    name: 'template-app',
    components: {
        Footer,
        Header,
    },
}
</script>

<style lang="scss" scoped src="./App.scss"></style>