<template>
  <Layout :content="content" title="OVERVIEW"/>
</template>

<script>
import OverviewContent from '../components/account_overview/Screen';
export default {
  name: 'Overview',
  components: [OverviewContent],
  data() {
    return {
      content: OverviewContent
    }
  },
  mounted() {

  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
