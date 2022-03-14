<template lang="pug">
    article#adocao
        Listagem(:pets="pets")
        .about
            img(src="@/assets/images/HomeDog.png", srcset="@/assets/images/HomeDog.png, @/assets/images/HomeDog2x.png 2x")
            .wrapper
                h2 Conheça a Quatro Patas
                p In minim sint cupidatat sint incididunt occaecat cillum adipisicing. Sit ullamco nisi exercitation non enim labore in dolore minim. Ipsum Lorem consequat ipsum excepteur esse est aliqua veniam velit duis id quis officia aliqua. Culpa quis cillum qui nostrud culpa. Minim eiusmod aliqua enim dolore. Nulla eu incididunt voluptate excepteur. Sit ad consectetur esse ex officia velit aliquip sint anim mollit consequat nulla nisi sint. Eu exercitation occaecat consectetur voluptate fugiat quis. Et occaecat do non do commodo ullamco aliqua et. Est ipsum sint do dolor pariatur aliquip.
                p Et occaecat culpa non ipsum aliqua sit elit mollit irure. Ipsum magna ipsum dolore ipsum. Ex reprehenderit non eu voluptate et commodo culpa esse et. Reprehenderit labore culpa voluptate anim ea culpa enim mollit.
        ModalAdopt
        ModalLike
</template>

<script>
import Listagem from '@/components/Listagem/Listagem.vue'
import ModalAdopt from '@/components/Modal/ModalAdopt.vue'
import ModalLike from '@/components/Modal/ModalLike.vue'
import PET_LIST from '@/data/pets'

export default {
    name: 'view-adocao',
    components: {
        Listagem,
        ModalAdopt,
        ModalLike
    },
    data() {
        return {
            pets: PET_LIST
        }
    },
}
</script>

<style lang="scss" scoped src="./Adocao.scss"></style>