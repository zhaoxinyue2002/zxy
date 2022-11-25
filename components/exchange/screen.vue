<template>
 <!--  <?php
$account_type_array = array(
  "g" => "Gold", "s" => "Silver", "gb" => "Goldbar", "sb" => "Silverbar"
);
$account_type_label_array = array(
  "g" => "Gold Eagles", "s" => "Silver Eagles", "gb" => "Gold Bars 1 Kg", "sb" => "Silver Bars 1 Kg"
);
$currency_type_array = array(
  "Gold" => "XAU", "Silver" => "XAG", "Goldbar" => "GBAR", "Silverbar" => "SBAR"
);
$currency_label_array = array(
  "g" => "1 Oz Gold American Eagle", "s" => "1 Oz Silver American Eagle", "gb" => "GS Ethical Gold Bar 1 Kg", "sb" => "GS Ethical Silver Bar 1 Kg"
);
$debit_dropdown_array = array(
  "Gold" => "1 Oz Gold Eagles", "Silver" => "1 Oz Silver Eagles", "Goldbar" => "1 Kg Gold Bars", "Silverbar" => "1 Kg Silver Bars"
);
$is_gcb_usa_account = ($profile_result['ProfileGroupID'] == 9) ? 1 : 0;
?> -->
<form action="#" method="post" name="frm-exchange" id="frm-exchange" v-if="this.$store.state.loadingContent == false && this.data != null">
  <div id="msg_block" class="input-field col s12">
    <!-- <?php
    if ($this->session->userdata('temp_exchange_success_msg')) {
      $msg = $this->session->userdata('temp_exchange_success_msg');
      $this->session->unset_userdata('temp_exchange_success_msg', '');
      echo $msg;
    }
    ?> -->
  </div>
  <!-- Exchange - Form View -->
  <div class="exchange-form-view">
    <!-- tab start-->
    <div class="row mt-4">
      <div class="col-12 col-sm-12 col-xl-12 col-md-12 col-lg-12">
        <div class="tab-content mt-2" id="pills-tabContent">
          <!--fisrt tab-->
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

            <!-- table section-->
            <div class="row">
              <div class="col-12 col-sm-12 col-xl-12 col-md-12 col-lg-12">
                <div class="table_section">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td class="w-25">Stock Out</td>
                          <td class="w-50">
                            <select class="custom-select account_list_drop_down debit_acc_opt" name="debit_acc" id="debit_acc">
                              <!-- <?php //echo '<pre>';print_r($account_result);die;
                              $account_dropdown_html = '<select class="custom-select account_list_drop_down" name="credit_acc" id="credit_acc">';
                              if (!empty($account_result['ResponseResult'])) {
                                foreach ($account_result['ResponseResult'] as $acc_name => $account_res) {
                                  if (is_array($account_res)) {
                                    //$acc_name = strtolower(str_replace(' Account','',$account_res['account_type']));
                                    $label = $account_res['AccountNumber'] . '|' . $acc_name;
                                    $sel = ($acc_name == 'Gold') ? 'selected' : '';
                                    if ($acc_name == 'Gold') {
                                      //$acc_name = 'Gold Eagles';
                                      $acc_type = 'g';
                                    } else if ($acc_name == 'Silver') {
                                      //$acc_name = 'Silver Eagles';
                                      $acc_type = 's';
                                    } else if ($acc_name == 'Goldbar') {
                                      //$acc_name = 'Gold Bars 1 Kg';
                                      $acc_type = 'gb';
                                    } else if ($acc_name == 'Silverbar') {
                                      //$acc_name = 'Silver Bars 1 Kg';
                                      $acc_type = 'sb';
                                    } else {
                                      $acc_name = '';
                                    }

                                    if ($acc_name != '') {
                                      echo  '<option value="' . $acc_type . '" ' . $sel . '>' . $debit_dropdown_array[$acc_name] . '&nbsp;&nbsp;-&nbsp&nbsp' . $account_res['AccountNumber'] . '</option>';
                                      $account_dropdown_html .= '<option value="' . $acc_type . '" ' . $sel . '>To&nbsp;' . $acc_name . '&nbsp;&nbsp;-&nbsp;&nbsp;' . $account_res['AccountNumber'] . '</option>';
                                    }
                                  }
                                }
                              }
                              $account_dropdown_html .= '</select>';
                              ?> -->
                            </select>
                          </td>
                          <td class="w-25 text-right" id="exchange_debit_acc_balance"><!-- <?php echo number_format($account_result['ResponseResult']['Gold']['AvailableBalance'], 2, '.', ','); ?> -->&nbsp;Oz</td>
                          <input type="hidden" name="gold_acc_no" id="gold_acc_no" value="<?php echo $account_result['ResponseResult']['Gold']['AccountNumber']; ?>" />
                        </tr>
                        <tr>
                          <td class="w-25">Stock In</td>
                          <td class="w-50">
                            <select class="custom-select account_list_drop_down buy_type credit_acc_opt" name="credit_acc" id="credit_acc">
                              <!-- <?php //echo '<pre>';print_r($account_result);die;
                              if (!empty($account_result['ResponseResult'])) {
                                foreach ($account_result['ResponseResult'] as $acc_name => $account_res) {
                                  if (is_array($account_res)) {
                                    //$acc_name = strtolower(str_replace(' Account','',$account_res['account_type']));
                                    $label = $account_res['AccountNumber'] . '|' . $acc_name;
                                    $sel = ($acc_name == 'Gold') ? 'selected' : '';
                                    if ($acc_name == 'Gold') {
                                      //$acc_name = 'Gold Eagles';
                                      $acc_type = 'g';
                                    } else if ($acc_name == 'Silver') {
                                      //$acc_name = 'Silver Eagles';
                                      $acc_type = 's';
                                    } else if ($acc_name == 'Goldbar') {
                                      //$acc_name = 'Gold Bars 1 Kg';
                                      $acc_type = 'gb';
                                    } else if ($acc_name == 'Silverbar') {
                                      //$acc_name = 'Silver Bars 1 Kg';
                                      $acc_type = 'sb';
                                    } else {
                                      $acc_name = '';
                                    }
                                    if ($acc_name != '' && $acc_name != 'Gold')
                                      echo '<option value="' . $acc_type . '" ' . $sel . '>&nbsp;' . $debit_dropdown_array[$acc_name] . '&nbsp;&nbsp;-&nbsp&nbsp' . $account_res['AccountNumber'] . '</option>';
                                  }
                                }
                              }
                              ?> -->
                            </select>
                          </td>
                          <td class="w-25 text-right" id="exchange_credit_acc_balance"><!-- <?php echo number_format($account_result['ResponseResult']['Silver']['AvailableBalance'], 2, '.', ','); ?> -->&nbsp;Oz</td>
                          <input type="hidden" name="silver_acc_no" id="silver_acc_no" value="<?php echo $account_result['ResponseResult']['Silver']['AccountNumber']; ?>" />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!--toggle button-->
            </div>
            <!--table end-->
            <!--total section-->
            <div class="dashboard_image_section">
              <div class="row">
                <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
                  <p class="Toatl_Gold_in_vault">Amount To Transfer</p>
                  <!--rang slider-->
                  <div class="slidecontainer_tranfer">
                    <input type="range" min="0" max="0" value="0" class="slider_2" name="amount" id="exchange-amt-gold-silver" step="1" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 ">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-xl-4 col-md-4 col-lg-4  ">
                      <p class="persona_screen_tranfer pb-18" id="exchange_from">Gold</p>
                      <p class="total_account_tranfer"><span></span><span class="gold_slider_selection" id="f_block">1</span> <span class="debit_unit">Oz</span></p>
                      <input type="hidden" name="gold_val" id="gold_val" value="" />
                    </div>
                    <div class="col-12 col-sm-12 col-xl-4 col-md-4 col-lg-4  ">
                      <img src="/beta/icon-arrow-exchange.svg" class="w-100 mt-5">
                    </div>
                    <div class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4 text-right">
                      <p class="persona_screen_tranfer pb-18" id="exchange_to">Silver</p>
                      <p class="total_account_tranfer"><span class="exchange_g_s_val" id="s_block"></span> <span class="credit_unit">Oz</span></p>
                      <input type="hidden" name="silver_coins" id="silver_val" value="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offest-xl-6 offset-lg-6 offset-md-6">
                <p class="persona_screen">Current Exchange rate</p>
                <p class="persona_screen"><!-- <?php echo date('d M Y'); ?> --></p>
              </div>
            </div>

            <!-- Ownership Selection -->
            <div class="row w-100" id="sell_payout_ownership_block">
              <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
                <div class="useremane_dashboard">
                  <div class="w-100" id="bar_info_title_display_block" style="display: none;">
                    <span class="input-group-text  user_group_text_tranfer ">Select Ownership Transfer</span>
                  </div>
                  <div class="w-100" id="bar_info_content_display_block" style="display: none;max-height: 300px; overflow-y: scroll;"></div>
                </div>
              </div>
            </div>
            <!-- /Ownership Selection -->

            <!-- button-->
            <div class="row contine_button_exchange">
              <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6">
                <input type="hidden" name="ref_msg" id="ref_msg" value="" />
                <button type="button" class="btn  login_button" id="btn-exchange-form-next">Confirm</button>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6 mt-2">
                <p class="persona_screen mb-0">Requires confirmation</p>
                <p class="persona_screen mb-0">by SMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Exchange - Form View -->

  <!-- Exchange -  OTP View -->
  <div class="exchange-confirm-otp-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section">
        <p class="persona_screen">Enter the 4 digit code</p>
        <p class="persona_screen">that was sent to <span class="mobile_info"><!-- <?php echo $this->session->userdata('phone'); ?> --></span></p>
        <!-- table section-->
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
            <div class="table_section_otp">
              <table class="table">
                <tbody>
                  <tr>
                    <td class="gbr_payout">Verification Code</td>
                    <td><input type="text" class="form-control text_box_sell_payout ctrl_box_perm ctrl_box_pin_perm strict_len" name="one_time_pin" id="one_time_pin" required="" autocomplete="off" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--toggle button-->
        </div>
      </div>
      <!-- button-->
      <div class="row contine_button_payout">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6 pl-4">
          <p class="persona_screen Resent_codes_otp"><a href="javascript:;" id="resend_otp">Resend Code</a></p>
          <a href="javascript:;"><button type="submit" class="btn login_button">Confirm</button></a>
        </div>
      </div>
    </div>
  </div>

  <!-- /Exchange - OTP View -->
  <!-- Exchange -  Transaction Complete View -->
  <div class="exchange-transaction-complete-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout_done">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section_done ">
        <div class="page_content_done_page">
          <p class="invoice_done mb-0"><b><!-- <?php echo $this->lang->line('transaction_success_msg'); ?> --></b></p>
          <p class="msg_confirmation_screen mt-2 mb-0"><!-- <?php echo $this->lang->line('transaction_receipt_msg'); ?> --></p>
        </div>
        <!-- table section-->
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
            <div class="table_section">
              <table class="table">
                <tbody>
                  <tr>
                    <td class=" market_palece_sell_payout account_done">Amount</td>
                    <td class=" market_palece_sell_payout account_done" id="debit_oz_lbl"></td>
                    <td class=" market_palece_sell_payout account_deatils_number_done" id="sell_payout_debit_account_no_final_screen"></td>
                    <td class=" market_palece_sell_payout account_done" id="credit_oz_lbl"></td>
                    <td class="market_palece_sell_payout text-right" id="sell_payout_debit_amt_final_screen"></td>
                  </tr>
                  <tr>
                    <td colspan="1"></td>
                    <td class="account_done" id="debit_oz_value_lbl"></td>
                    <td colspan="1"><img src="/beta/right-arrow.svg" class="arrow_icon_tranfer_table"></td>
                    <td class="account_done" id="credit_oz_value_lbl"></td>
                    <td class="text-right" id="sell_payout_debit_amt_market_price_final_screen"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--toggle button-->
        </div>
      </div>
      <!-- button-->
    </div>
  </div>
  <!-- /Exchange - Transaction Complete View -->
</form>

</template>

<script>
import { format } from 'echarts';
export default {
  data(){
    return{
      data : null
    }
  },
  mounted(){
    this.$store.commit('setLoadingContent',true);
    this.fetchData();
  },
  components:{},
  methods:{
    async fetchData(){
      console.log('fetchData');
      var exchange_price = await this.$api.$get('exchange_price/type_based');
      console.log(exchange_price);

      var body = new FormData();
      body.append('username','yang@golensuisse.com')
      var account_result = await this.$api.$post('getBalance',body);
      console.log(account_result);


    //   $multi_curl_array['gold_bar_info'] = array(
		// 	'method' => 'get', "url" => APP_API_ENDPOINT . 'user_bar_accounts/?Username=' . $this->session->userdata('username') . '&Type=AU', "param" => null
		// );
		// $multi_curl_array['silver_bar_info'] = array(
		// 	'method' => 'get', "url" => APP_API_ENDPOINT . 'user_bar_accounts/?Username=' . $this->session->userdata('username') . '&Type=AG', "param" => null
		// );

    // Get Bar Account Information
		// $bar_account_info = array();
		// $bar_account_info['Goldbar'] = json_decode($api_results['gold_bar_info'], true);
		// $bar_account_info['Silverbar'] = json_decode($api_results['silver_bar_info'], true);

      var bar_account_info = {
        Goldbar : await this.$api.$get('user_bar_accounts/?Username=')
      }

    if (exchange_price.ResponseCode == '2000' || bar_account_info.Goldbar.ResponseCode == '2000' || bar_account_info.Silverbar.ResponseCode == '2000' || account_result.ResponseCode == '2000'){
        return;
    }
    else if (exchange_price.ResponseCode != '0' || bar_account_info.Goldbar.ResponseCode != '0' || bar_account_info.Silverbar.ResponseCode != '0' || account_result.ResponseCode != '0' ){
      redirect('exchange/content');
			return;
    }

    this.exchange_conversion_arr = {
      //1-Gold Coin to Silver Coin - New Price Calc Done
        Gold_Silver : {
          type : 1,
          debit : 1,
          credit : round(exchange_price.ResponseResult.XAU.USD.sell_price / exchange_price.ResponseResult.XAG.USD.buy_price ,1)
        },
        //2-Silver Coin to Gold Coin  - New Price Calc Done
        Silver_Gold : {
          type : 2,
          debit : round(exchange_price.ResponseResult.XAU.USD.buy_price / exchange_price.ResponseResult.XAG.USD.sell_price ,1),
          credit : 1
        },
        //3-Gold Coin to Gold Bar - New Price Calc Done
        Gold_Goldbar : {
          type : 3,
          debit : round(exchange_price.ResponseResult.GBAR.USD.buy_price / exchange_price.ResponseResult.XAU.USD.sell_price ,1),
          credit : 1
        },
        //4-Gold Coin to Silver Bar - New Price Calc Done
        Gold_Silverbar :{
          type : 4,
          debit : round(exchange_price.ResponseResult.SBAR.USD.buy_price / exchange_price.ResponseResult.XAU.USD.sell_price ,1),
          credit : 1
        },
        //5-Silver Coin to Gold Bar - New Price Calc Done
        Silver_Goldbar :{
          type : 5,
          debit: round(exchange_price.ResponseResult.GBAR.USD.buy_price / exchange_price.ResponseResult.XAG.USD.sell_price ,1),
          credit : 1
        },
        //6-Silver Coin to Silver Bar - New Price Calc Done
        Silver_Silverbar :{
          type : 6,
          debit : round(exchange_price.ResponseResult.SBAR.USD.buy_price / exchange_price.ResponseResult.XAG.USD.sell_price ,1),
          credit : 1
        },
        //7-Gold Bar to Gold Coin - New Price Calc Done
        Goldbar_Gold :{
          type : 7,
          debit : 1,
          credit : round(exchange_price.ResponseResult.GBAR.USD.sell_price / exchange_price.XAU.USD.buy_price ,1)
        },
        //8-Gold Bar to Silver Coin - New Price Calc Done
        Goldbar_Silver :{
          type : 8,
          debit : 1,
          credit : round(exchange_price.ResponseResult.GBAR.USD.sell_price / exchange_price.ResponseResult.XAG.USD.buy_price ,1)
        },
        //9-Gold Bar to Silver Bar - Not Required
        Goldbar_Silverbar :{
          type : 9,
          debit : 1,
          credit : round(exchange_price.ResponseResult.GBAR.USD.sell_price / exchange_price.ResponseResult.SBAR.USD.buy_price ,1)
        },
        //10-Silver Bar to Gold Coin - Not Required
        Silverbar_Gold :{
          type : 10,
          debit : 1,
          credit : round(exchange_price.ResponseResult.SBAR.USD.sell_price / exchange_price.ResponseResult.XAU.USD.buy_price ,1)
        },
        //11-Silver Bar to Silver Coin - New Price Calc Done
        Silverbar_Silver :{
          type : 11,
          debit : 1,
          credit : round(exchange_price.ResponseResult.SBAR.USD.sell_price / exchange_price.ResponseResult.XAG.USD.buy_price ,1)
        },
        //12-Silver Bar to Gold Bar - Not Required
        Silverbar_Goldbar :{
          type : 12,
          debit : round(exchange_price.ResponseResult.GBAR.USD.buy_price / exchange_price.ResponseResult.SBAR.USD.sell_price ,1),
          credit :1
        }
    };

      if (account_result.ResponseResult.Gold) {
        account_result.ResponseResult.Gold.AvailableBalance = numberFormatter(account_result.ResponseResult.Gold.AvailableBalance ,2);
      }
      if (account_result.ResponseResult.Silver){
        account_result.ResponseResult.Silver.AvailableBalance = numberFormatter(account_result.ResponseResult.Silver.AvailableBalance ,2);
      }
      if (account_result.ResponseResult.Goldbar) {
        account_result.ResponseResult.Goldbar.AvailableBalance = numberFormatter(floor(account_result.ResponseResult.Goldbar.AvailableBalance / process.env.CONVERSION_KG_OZ_VALUE * 100) / 100 ,2);
      }
      if (account_result.ResponseResult.Silverbar) {
        account_result.ResponseResult.Silverbar.AvailableBalance = numberFormatter(floor(account_result.ResponseResult.Silverbar.AvailableBalance / process.env.CONVERSION_KG_OZ_VALUE * 100) / 100 ,2);
      }

      console.log('token');
      console.log('exchange_price');
      console.log('account_result');
      console.log('exchange_conversion_arr');
      console.log('bar_account_info');

      this.data = {
        profile_result : this.$store.commit('setProfile'),
        account_result : account_result,
        conversion_rates : exchange_conversion_arr,
        bar_account_info : bar_account_info
      }

      this.$store.commit('setLoadingContent',false);
    }
  }
}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
