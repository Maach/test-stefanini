<template lang="pug">
    article#adocao
        Listagem(:pets="pets")
        img(src="@/assets/images/HomeDog.png", srcset="@/assets/images/HomeDog.png, @/assets/images/HomeDog2x.png 2x")
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