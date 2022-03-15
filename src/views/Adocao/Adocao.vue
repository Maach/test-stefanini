<template lang="pug">
    article#adocao
        .about
            img(src="@/assets/images/AdoptDog.png", srcset="@/assets/images/AdoptDog.png, @/assets/images/AdoptDog2x.png 2x")
            .wrapper
                h2 Adote Agora
                p Temos vários peludinhos esperando para fazer um lar mais feliz!
        Listagem(:pets="pets")
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