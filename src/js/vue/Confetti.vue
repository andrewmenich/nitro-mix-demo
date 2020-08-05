<template>
    <main>
    </main>
</template>

<script>
    import Vue from 'vue'
    import VueConfetti from 'vue-confetti'
    Vue.use(VueConfetti);
    export default {
        mounted: function() {
            this.$confetti.start({
                particles: [
                    {
                        type: 'heart',
                        colors: [
                            'pink',
                            'pink',
                            'aliceblue'
                        ]
                    },
                ]
            });
            setTimeout(() => {
                this.$confetti.stop();
            }, 5000);
        },
        methods: {}
    }
</script>