<template>
  <Layout :content="content" title="REPORTS"/>
</template>

<script>
import OverviewReports from '../components/reports/Screen';
export default {
  name: 'HOLDING',
  components: [OverviewReports],
  data() {
    return {
      content: OverviewReports
    }
  },
  mounted() {

  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
