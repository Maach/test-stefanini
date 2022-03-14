<template lang="pug">
    header
        .wrapper
            router-link(:to="{ name: 'home' }")
                SvgIcon(data="@/assets/svgs/LogoQuatroPatas.svg" original)
            nav
                router-link(:to="{ name: 'regras' }") Nossas Regras
</template>

<script>
export default {
    name: 'component-header',

}
</script>

<style lang="scss" scoped src="./Header.scss"></style>