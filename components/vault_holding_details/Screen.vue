<template>
  <div>
    <div class="tab_section">
        <ul class="nav nav-pills mb-3 float-left w-auto option_tab" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a
                  :class="'nav-link toggle_title ' + (tabIndex == 0 ? 'active' : '')"
                  id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" title="GOLD" @click="change(0)">Vault Gold</a>
            </li>
            <li class="nav-item vault_sliver">
                <a
                  :class="'nav-link toggle_title ' + (tabIndex == 1 ? 'active' : '')"
                  id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" title="SILVER" @click="change(1)">Vault Silver</a>
            </li>
            <li class="nav-item vault_sliver">
                <a
                  :class="'nav-link toggle_title ' + (tabIndex == 2 ? 'active' : '')"
                  id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" title="MASTERCARD" @click="change(2)">MasterCard</a>
            </li>
        </ul>
        <div class="input-group mb-3 vault_slider_wrapper w-auto" v-show="tabIndex!==2">
            <div class="input-group-append ml-3">
                <span class="input-group-text  ATM_withdrawal_switch_button" id="basic-addon2">
                    <ul class="list-group list-group-flush">
                        <li class="">
                            <label class="switch ">
                                <input type="checkbox" class="default" id="switch_oz_kg_option" value="oz" @click="switchValuePercent">
                                <span class="slider switch_oz_kg"></span>
                            </label>
                        </li>
                    </ul>
                </span>
            </div>
            <div class="input-group-prepend" >
                <span class="input-group-text slider_text" v-if="valueOrPercent">Oz</span>
                <span class="input-group-text slider_text" v-else>Kg</span>
            </div>
        </div>
    </div>

    <div class="tab-content" id="pills-tabContent">
        <div
          :class="'tab-pane fade ' + (tabIndex == 0 ? 'show active' : '')"
          id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <!--                                     <p class="persona_screen">Personal</p> -->
            <p class="persona_screen">Gold Account</p>
            <!-- table section-->
            <div class="row">
                <div class="col-12 col-sm-12 col-xl-12 col-md-12 col-lg-12">
                    <div class="table_section_paddinges">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="account_number_tables w-25">Bullion</th>
                                        <th class="account_number_tables w-25">Vault</th>
                                        <th class="account_number_tables w-25">Market Price</th>
                                        <th class="account_number_tables w-25" v-if="valueOrPercent"><span class="slider_text" >Oz</span></th>
                                        <th class="account_number_tables w-25" v-else><span class="slider_text">Kg</span></th>
                                        <th class="account_number_tables w-25">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                            <tr>
                                                <td>Gold Bars Oz LBMA</td>
                                                <td>
                                                  {{balance_results.Gold.AccountNumber}}
                                                  <!-- <?php echo $balance_result['goldbar']['account_no']; ?> -->
                                                  </td>
                                                <td id="lbl_gold_bar_market_price"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$gold_bar_per_market_price, 2, '.', ','); ?> -->€2</td>
                                                <td id="lbl_gold_bar_qty"><!-- <?php echo number_format((float)$balance_result['goldbar']['balance'], 2, '.', ','); ?> -->3</td>
                                                <td id="lbl_gold_bar_total"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$gold_bar_market_price, 2, '.', ','); ?> -->€4</td>
                                            </tr>
                                            <tr>
                                                <td>Gold Eagles American</td>
                                                <td>
                                                  {{balance_results.Goldbar.AccountNumber}}
                                                  <!-- <?php echo $balance_result['gold']['account_no']; ?> --></td>
                                                <td id="lbl_gold_market_price"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$balance_result['gold']['market_price'], 2, '.', ','); ?> -->€6</td>
                                                <td id="lbl_gold_qty"><!-- <?php echo number_format((float)$balance_result['gold']['balance'], 2, '.', ','); ?> -->7</td>
                                                <td id="lbl_gold_total"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$balance_result['gold']['conversion_rate'], 2, '.', ','); ?> -->€8</td>
                                            </tr>
                                            <tr>
                                                <td>Total in vault</td>
                                                <td colspan="2">&nbsp;</td>
                                                <td id="lbl_total_qty_gold_gold_bar"><!-- <?php echo number_format((float)($gold_bar_qty + $gold_qty), 2, '.', ','); ?> -->9</td>
                                                <td id="lbl_total_gold_gold_bar"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)($gold_bar_market_price + $gold_market_price), 2, '.', ','); ?> -->€10</td>
                                            </tr>

                                        <tr>
                                            <td colspan="5" align="center">No Accounts found!!!</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
          :class="'tab-pane fade ' + (tabIndex == 1 ? 'show active' : '')"
          id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

            <p class="persona_screen">Silver Account</p>

            <div class="row">
                <div class="col-12 col-sm-12 col-xl-12 col-md-12 col-lg-12">
                    <div class="table_section_paddinges">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="account_number_tables w-25">Bullion</th>
                                        <th class="account_number_tables w-25">Vault</th>
                                        <th class="account_number_tables w-25">Market Price</th>
                                        <th class="account_number_tables w-25" v-if="valueOrPercent"><span class="slider_text">Oz</span></th>
                                        <th class="account_number_tables w-25" v-else><span class="slider_text">Kg</span></th>
                                        <th class="account_number_tables w-25">Value</th>
                                    </tr>
                                </thead>
                                <tbody>

                                            <tr>
                                                <td>Silver Bars Oz LBMA</td>
                                                <td><!-- <?php echo $balance_result['silverbar']['account_no']; ?> -->11</td>
                                                <td id="lbl_silver_bar_market_price"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$silver_bar_per_market_price, 2, '.', ','); ?> -->12</td>
                                                <td id="lbl_silver_bar_qty"><!-- <?php echo number_format((float)$balance_result['silverbar']['balance'], 2, '.', ','); ?> -->13</td>
                                                <td id="lbl_silver_bar_total"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$silver_bar_market_price, 2, '.', ','); ?> -->14</td>
                                            </tr>

                                            <tr>
                                                <td>Silver Eagles American</td>
                                                <td><!-- <?php echo $balance_result['silver']['account_no']; ?> -->15</td>
                                                <td id="lbl_silver_market_price"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$balance_result['silver']['market_price'], 2, '.', ','); ?> -->16</td>
                                                <td id="lbl_silver_qty"><!-- <?php echo number_format((float)$balance_result['silver']['balance'], 2, '.', ','); ?> -->17</td>
                                                <td id="lbl_silver_total"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)$balance_result['silver']['conversion_rate'], 2, '.', ','); ?> -->18</td>
                                            </tr>
                                            <tr>
                                                <td>Total in vault</td>
                                                <td colspan="2">&nbsp;</td>
                                                <td id="lbl_total_qty_silver_silver_bar"><!-- <?php echo number_format((float)($silver_bar_qty + $silver_qty), 2, '.', ','); ?> -->19</td>
                                                <td id="lbl_total_silver_silver_bar"><!-- <?php echo $this->currency_symbol_arr[$this->session->userdata('app_currency')] . ' ' . number_format((float)($silver_bar_market_price + $silver_market_price), 2, '.', ','); ?> -->20</td>
                                            </tr>


                                        <tr>
                                            <td colspan="5" align="center">No Accounts found!!!</td>
                                        </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
          :class="'tab-pane fade ' + (tabIndex == 2 ? 'show active' : '')"
          id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

            <p class="persona_screen">MasterCard Account</p>

            <div class="row">
                <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                    <div class="table_section">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>

                                        <tr>
                                            <td>Account</td>
                                            <td class="text-right"><!-- <?php echo $balance_result['card']['account_no']; ?> -->21</td>
                                        </tr>
                                        <tr>
                                            <td>Cardholder Name</td>
                                            <td class="text-right"><!-- <?php echo $this->session->userdata('first_name') . ' ' . $this->session->userdata('last_name'); ?> -->22</td>
                                        </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>


                <div class="dashboard_image_section">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
                            <p class="Toatl_Gold_in_vault">Total Balance</p>
                        </div>
                        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 text-right">
                            <p class="persona_screen pb-18">Premium</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
                            <p class="total_account">
                              <!-- <?php echo ($master_card_bal != null) ? $this->currency_symbol_arr[$balance_result['card']['currency']] . ' ' . $master_card_bal : ''; ?> -->
                              €23</p>

                            <table class="table card_operations">
                                <tr>
                                    <td>
                                        <span class="pin_block">
                                            <span class="front">PIN</span>
                                            <span class="back" style="display: none;" id="pin_code"></span>
                                        </span>
                                    </td>
                                    <td class="text-right card_text">Retrieve PIN Code</td>
                                </tr>

                                <tr>
                                    <td>
                                        <span class="input-group-text border-0 m-0" id="basic-addon2">
                                            <label class="switch mb-0">
                                                <input type="checkbox" class="default" id="card_online_status" value="<?php echo ($balance_result['card']['online_status'] == 1) ? 1 : 0; ?>" >
                                                <span class="slider opt_card_online_purchase_status"></span>
                                            </label>
                                        </span>
                                    </td>
                                    <td class="text-right card_text">Lock/Unlock Online Purchase</td>
                                </tr>

                                <tr>
                                    <td>
                                        <button type="btn" class="btn btn_card_suspend">Suspended</button>
                                    </td>
                                    <td class="card_text text-right">Activate/Suspend Card</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 vault_card_wrapper">
                            <img class="card_img" src="beta/card.png">
                            <div class="card_no">5219 **** **** ****</div>
                            <div class="card_title"><!-- <?php echo $this->session->userdata('first_name') . ' ' . $this->session->userdata('last_name'); ?> -->25</div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      valueOrPercent: true,
        tabIndex : 0,
        data:{
            ResponseResult:{
          Goldbar:{
            AccountNumber:""
          },
          Gold:{
            AccountNumber:""
          }
      }
     },
     balance_results:{},
     profitloss_arrays:[]
    }
  },
  mounted(){
    this.$store.commit('setLoadingContent', true);
    this.fetchData();
  },
  methods:{
    async fetchData(){
      console.log('fetchData');
      var currency_result = await this.$api.$get('exchange_price/type_based');
      // console.log(currency_result);

      var body = new FormData();
      body.append('username', 'yang@goldensuisse.com');
      var balance_result = await this.$api.$post('getBalance', body);
      console.log(balance_result);
      this.balance_results = balance_result.ResponseResult
      console.log(this.balance_results,'66666')

      var profitloss_array = await this.$api.$post('profit_loss/get_profit_loss', body);
      this.profitloss_arrays = profitloss_array.ResponseResult

      // if (balance_result.ResponseCode != '0') {
      //   return;
      // }
      // if (profitloss_array.ResponseCode != '0') {
      //   return;
      // }

      // var total_purchase = 0;
      // var total_profit = 0;
      // var profitloss = {};

      // for (let i = 0; i < profitloss_array.ResponseResult.length; i++) {
      //   var profitloss_item = profitloss_array.ResponseResult[i];
      //   profitloss[profitloss_item.Bullion] = profitloss_item;
      //   total_purchase += profitloss_item.accumulatedPurchases;
      //   total_profit += profitloss_item.profitLoss;
      // }

      // var profit_percent = 0;
      // if (total_purchase > 0) {
      //   profit_percent = total_profit * 100 / total_purchase;
      // }

      // var default_currency = this.$store.state.app_currency;
      // var total_balance = 0;
+
      this.$store.commit('setLoadingContent', false);
    },
    change(index){
      this.tabIndex = index;
    },
    switchValuePercent() {
      this.valueOrPercent = !this.valueOrPercent;
      console.log(this.valueOrPercent);
    }

  }

}
</script>
