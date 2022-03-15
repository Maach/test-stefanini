<template lang="pug">
    footer
        .info
            .wrapper
                router-link(:to="{ name: 'adocao' }")
                    SvgIcon(data="@/assets/svgs/LogoQuatroPatas.svg" original)
                .contato
                    p
                        strong Quatro Patas Adoção de Animais
                    p Rua das Oliveiras, 158 | Nova Floresta - São Paulo, SP 13999-008
                    p 
                        a(href="tel:+5521999218282") (021) 9921-8282
                        |  ou 
                        a(href="tel:+5519999235050") (019) 9923-5050

        .copy
            .wrapper
                p Copyright 2022. Todos os direitos.
                p.violencia 
                    strong Violência contra animais é crime.
                    a(href="tel:08006006428") 
                        strong Denuncie 0800 600 6428
</template>

<script>
export default {
    name: 'component-footer',
    
}
</script>

<style lang="scss" scoped src="./Footer.scss"></style>