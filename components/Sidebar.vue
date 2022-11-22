<!-- Please remove this file from your project -->
<template>
  <div class="col-12 col-sm-12 col-md-3 col-xl-3 col-lg-3 fisrt_coulum_backcolor vertical-stretch">
    <div class="logo_section_common pt-4 pb-4">
      <h6 class="company_logo_text">
        <img src="/beta/new_logo.png" style="max-width: 100%;"/>
      </h6>
      <div class="input_group_section ">
        <div class="read_madels_accountes">
          <label class="d-flex user_group_text_deactive_username mb-2">
            <span class="text-left float-left user_group_text position-absolute w-auto">Mr</span>
            <span class="text-center float-left w-100">{{ firstname }} {{ lastname }}</span>
          </label>
        </div>
        <ul class="list-group list-group-flush w-100 ul_class_section mt-3">
          <li :class="'list-group-item ' + active_acc_overview"><a href="overview" >OVERVIEW</a></li>
          <li :class="'list-group-item ' + active_vault_holding_details"><a href="vault-holding-details" >VAULT HOLDING DETAILS</a></li>
          <li :class="'list-group-item ' + active_ex_gold_silver"><a href="exchange">EXCHANGE GOLD & SILVER</a></li>
          <li :class="'list-group-item ' + active_transfer"><a href="transfer-bullion">TRANSFER BULLION</a></li>
          <li :class="'list-group-item ' + active_load_card"><a href="loadcard">LOAD CARD</a></li>
          <li :class="'list-group-item ' + active_reports"><a href="reports">REPORTS</a></li>
          <li :class="'list-group-item list_group_item_border_remove ' + active_profile"><a href="profile">MY PROFILE</a></li>
        </ul>
        <div class="sell_button">
          <a href="buycoins"><button type="button" class="btn  login_button">BUY BULLION{{ active_buy_coins }}</button></a>
        </div>
        <div class="tranfer_button">
          <a href="payout"><button type="button" class="btn login_button_tranfer">SELL BULLION{{ active_payout }}</button></a>
        </div>
        <p class="conformation-dashboard">Requires Confirmation</p>
        <p class="conformation-dashboard_bysms">by SMS</p>
      </div>
    </div>
    <footer class="footer_section_start" style="padding-bottom: 10px;">
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5 align-self-end">
        </div>
        <div class="col-12 col-sm-12 col-xl-7 col-lg-7 col-md-7 align-self-end">
            <a href="logout" class="footer_logout_dashboard"> <p class="number_footer_1 mb-3">Logout</p></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    let path = $nuxt.$route.path;
    if (path == '/overview') {
      this.active_acc_overview = 'active'
    }else if (path == '/vault-holding-details'){
      this.active_vault_holding_details = 'active'
    }else if (path == '/exchange') {
      this.active_ex_gold_silver = 'active'
    }else if (path == '/transfer-bullion') {
      this.active_transfer = 'active'
    }else if (path == '/loadcard') {
      this.active_load_card = 'active'
    }else if(path == "/reports"){
      this.active_reports = 'active'
    }else if(path == "/profile"){
      this.active_profile='active'
    }
  },
  data() {
    return {
      firstname: this.$store.state.firstname,
      lastname: this.$store.state.lastname,
      active_acc_overview: '',
      active_vault_holding_details: '',
      active_ex_gold_silver: '',
      active_transfer: '',
      active_load_card: '',
      active_reports: '',
      active_profile: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dashboard_v2.css";
</style>
