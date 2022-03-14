<template lang="pug">
    Modal(:title="title", :text="text", :images="images", background="#91D88B", :active="$store.state.activeModal == 'adoptModal'")#adopt
</template>

<script>
import Modal from '@/components/Modal/Modal.vue'

export default {
    name: 'component-modal-adopt',
    components: {
        Modal,
    },
    data() {
        return {
            title: "Você ganhou um novo amiguinho!",
            text: "Obrigado por sua adoção, ficamos felizes por você e por ele!",
            images: [
                require('@/assets/images/AdoptModalDog.png'),
                require('@/assets/images/AdoptModalDog2x.png')
            ]
        }
    },
}
</script>