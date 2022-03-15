<template lang="pug">
    header
        .wrapper
            router-link(:to="{ name: 'adocao' }").logo
                SvgIcon(data="@/assets/svgs/LogoQuatroPatas.svg" original)
            nav(:class="{ active: $store.state.activeMenu }")
                button(@click="$store.commit('toggleMenu')").button
                    SvgIcon(data="@/assets/svgs/MenuHamburguer.svg" original)
                ul
                    li(@click="$store.commit('toggleMenu', false)")
                        router-link(:to="{ name: 'regras' }") Nossas Regras
</template>

<script>
export default {
    name: 'component-header',
}
</script>

<style lang="scss" scoped src="./Header.scss"></style>