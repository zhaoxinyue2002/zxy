<template>
  <Layout :content="content" title="LOADCARD"/>
</template>

<script>
import OverviewLoadcard from '../components/load_card/Screen';
export default {
  name: 'Loadcard',
  components: [OverviewLoadcard],
  data() {
    return {
      content: OverviewLoadcard
    }
  },
  mounted() {

  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
