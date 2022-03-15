<template lang="pug">
    article#home
        img(src="@/assets/images/HomeDog.png", srcset="@/assets/images/HomeDog.png, @/assets/images/HomeDog2x.png 2x")
        .wrapper
            h2 Procurando um novo amigo?
            p A #[strong Quatro Patas] pode ajudar nessa missão!
            p Doguinhos e Gatinhos estão esperando para fazer você feliz!
            p Adote agora mesmo.
            .actions
                router-link(:to="{ name: 'adocao' }").button.adopt Adote agora 
                router-link(:to="{ name: 'regras' }").button Nossas Regras
</template>

<script>
export default {
    name: 'view-home',

}
</script>

<style lang="scss" scoped src="./Home.scss"></style>