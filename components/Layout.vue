<template>
    <div class="sellandpayout_v2">
        <div class="container-fluid fullscreen">
            <div class="row  full_logo_sreen_dashboard">

                <Sidebar/>

                <!-- Content -->
                <div class="col-12 col-sm-12 col-md-9 col-xl-9 col-lg-9 pl-0 pr-0 second_section" id="fist_class_display">
                    <div class="accounts vertical-stretch">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h1><strong>{{ title }}</strong></h1>
                                <!-- <p class="persona_screen transaction_screen_title" style="display: none;">{{ transaction_screen_title }}</p> -->
                            </div>
                            <!-- Side menu drawer - Floating Button -->
                            <div class="button_toogle_tranfer_exchange d-flex align-items-start sticky mt-0" id="sidebar_menudrawer_wrapper">
                                <button class="navbar-toggler data_toogle_button" type="button">
                                <span class="navbar-toggler-icon my-toggler">
                                    <i class="bar_icones"><font-awesome-icon :icon="['fas', 'fa-bars']"/></i>
                                </span>
                                </button>
                            </div>
                            <!-- /Side menu drawer - Floating Button -->
                        </div>

                        <component :is="content"/>

                        <div id="content">
                        </div>

                        <div class="footer">
                            <a href="#" class="footer_logout_dashboard">
                                <p class="number_footer_logout mb-0">Help Center</p>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Settings Menu Drawer -->
                <div class="col-12 col-sm-12 col-md-3 col-xl-3 col-lg-3 sected_card_section " style="display: none;">
                    <!-- <?php $this->load->view('layout/menu-drawer'); ?> -->
                </div>
                <!-- /Settings Menu Drawer -->

            </div>
        </div>

                <!-- Preloader -->
        <div class="pre-load" id="preloder-block" v-show="this.$store.state.loadingContent">
          <div class="loader-block">
              <img src="/beta/back-trans.svg?ver=0.2" style="max-width: 100px;" />
          </div>
        </div>
    </div>
</template>

<script>
// import Screen1 from "./account_overview/Screen"
// import Screen2 from "./vault_holding_details/Screen"
// import Screen3 from "./exchange/screen"
// import Screen4 from "./transfer_bullion/screen"
// import Screen5 from "./load_card/screen"
// import Screen6 from "./reports/screen"
// import Screen7 from './profile/screen'
// import Screen8 from "./buy_coins/Screen"
export default {
  fetch({redirect}){
    redirect("/")
  },
  name: 'Layout',
  props: [ 'content', 'title' ],
  components:{
      // Screen1, Screen2 ,Screen3,Screen4,Screen5,Screen6,Screen7,Screen8
  },
  data() {
  },
}
</script>
