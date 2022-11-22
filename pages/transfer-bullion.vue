<template>
  <Layout :content="content" title="TRANSFER"/>
</template>

<script>
import TransferContent from '../components/transfer_bullion/Screen';
export default {
  name: 'Transfer',
  components: [TransferContent],
  data() {
    return {
      content: TransferContent
    }
  },
  mounted() {

  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
