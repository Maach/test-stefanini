<template lang="pug">
    Modal(:title="title", :text="text", :images="images", background="#D88BB9", :active="$store.state.activeModal == 'favModal'")#adopt
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'

export default {
    name: 'component-modal-like',
    components: {
        Modal,
    },
    data() {
        return {
            title: "Favoritado com amor!",
            text: "Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!",
            images: [
                require('@/assets/images/FavModalDog.png'),
                require('@/assets/images/FavModalDog2x.png')
            ]
        }
    },
}
</script>