<template>
  <Layout :content="content" title="EXCHANGE"/>
</template>

<script>
import ExchangeContent from '../components/exchange/screen.vue';
export default {
  name: 'Exchange',
  components: [ExchangeContent],
  data() {
    return {
      content: ExchangeContent
    }
  },
  mounted() {

  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
