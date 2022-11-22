<template>
<!-- <?php
$account_type_array = array(
  "g" => "Gold", "s" => "Silver", "gb" => "Goldbar", "sb" => "Silverbar"
);
$currency_type_array = array(
  "g" => "XAU", "s" => "XAG", "gb" => "GBAR", "sb" => "SBAR"
);
$currency_label_array = array(
  "g" => "1 Oz Gold Eagles", "s" => "1 Oz Silver Eagles", "gb" => "1 Kg Gold Bars", "sb" => "1 Kg Silver Bars"
);
$debit_dropdown_array = array(
  "Gold" => "1 Oz Gold Eagles", "Silver" => "1 Oz Silver Eagles", "Goldbar" => "1 Kg Gold Bars", "Silverbar" => "1 Kg Silver Bars"
);
$is_gcb_usa_account = ($profile_result['ResponseResult']['ProfileGroupID'] == 9) ? 1 : 0;
//Set Currency
if ($is_gcb_usa_account == 1)
  $default_currency = 'USD';
else
  $default_currency = (null !== $this->session->userdata('app_currency')) ? $this->session->userdata('app_currency') : 'EUR';
?> -->
<form action="#" method="post" name="frm-buy-coins" id="frm-buy-coins">
  <!-- Buy Coins - Form View -->
  <div class="buy-coins-form-view">
    <!-- radio button start-->
    <div class="debit_ammount_report">
      <div class="row  pb-5 pt-3">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
          <select class="custom-select account_list_drop_down buy_type" name="buy_type" id="buy_type">
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
                  if ($acc_name != '')
                    echo '<option value="' . $acc_type . '"" ' . $sel . '>' . $debit_dropdown_array[$acc_name] . '&nbsp;&nbsp;-&nbsp&nbsp' . $account_res['AccountNumber'] . '</option>';
                }
              }
            }
            ?> -->
          </select>
        </div>
      </div>

      <p class="persona_screen">Fill in the fields</p>
      <p class="persona_screen">to complete the transaction</p>
      <!-- table section-->
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-12 col-md-12 col-lg-12">
          <div class="table_section">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td class="debit_exchange gbr_payout_exchange">Currency</td>
                    <td class="debit_exchange">
                      <div class="btn-group btn-group-toggle" data-toggle="buttons">
                       <!--  <?php
                        $currency_array = array('USD', 'EUR', 'GBP', 'CHF');
                        foreach ($currency_array as $currency) {
                          if ($is_gcb_usa_account == 1 && $currency == 'USD') {
                            $label = ' active ';
                            $sel = 'checked="checked"';
                            echo '<label class="btn btn-warning' . $label . '"><input type="radio" name="debt_acc_cur" id="debt_acc_cur" value="' . $currency . '" required="" ' . $sel . '>' . $currency . '</label>';
                          } else if ($is_gcb_usa_account == 0) {
                            $label = ($currency == $default_currency) ? ' active ' : '';
                            $sel = ($currency == $default_currency) ? 'checked="checked"' : '';
                            echo '<label class="btn btn-warning' . $label . '"><input type="radio" name="debt_acc_cur" id="debt_acc_cur" value="' . $currency . '" required="" ' . $sel . '>' . $currency . '</label>';
                          }
                        }
                        ?> -->
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="debit_exchange gbr_payout_exchange">Form of payment</td>
                    <td class="debit_exchange">
                      <select class="form-control selcet_account_number_exchange" name="transfer_opt" id="transfer_opt">
                        <option value="wire_transfer">Bank Transfer</option>
                        <!-- <?php if ($default_currency == 'EUR') { ?> -->
                          <!-- <option value="sofort">Sofort</option> -->
                       <!--  <?php } ?> -->
                      </select>
                    </td>
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
      <!--total section-->
      <div class="dashboard_image_section">
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
            <p class="Toatl_Gold_in_vault" id="buy_type_txt"></p>
            <!-- <p class="total_account">82:00 Oz</p> -->
            <!--rang slider-->
            <div class="slidecontainer_tranfer">
              <input type="range" min="1" max="54" value="1" class="slider_2" name="amount" id="amount">
            </div>
          </div>
          <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 ">
            <div class="row">
              <div class="col-12 col-sm-12 col-xl-6 col-lg-6">
                <p class="persona_screen_tranfer pb-18" id="account_type_unit">Oz</p>
                <p class="total_account_tranfer"><span></span><span id="amt_selection">1</span></p>
              </div>
              <div class="col-12 col-sm-12 col-xl-6 col-lg-6">
                <p class="persona_screen pb-18">Only Decimal points</p>
                <p class="persona_screen pb-18">Separator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- next descript_section-->
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
          <div class="input-group mb-3 useremane_dashboard user_group_text_tranfer">
            <div class="input-group-prepend w-50">
              <span class="input-group-text  user_group_text_tranfer_order_buy_coins ">Bank</span>
            </div>
            <!-- <input type="text" class="form-control first_names_display_tranfer text-center" > -->
           <!--  <?php
            $payout_lbl = ($profile_result['ResponseResult']['ProfileGroupID'] == 9) ? $profile_result['ResponseResult']['ProfileGroupID'] : 8;
            $payout_val = ($profile_result['ResponseResult']['ProfileGroupID'] == 9) ? 'TD Bank New York' : 'Credit Suisse AG';
            ?> -->
            <select class="form-control selcet_account_number_exchange" name="payment_opt" id="payment_opt">
              <option value="<?php echo $payout_lbl; ?>"><!-- <?php echo $payout_val; ?> --></option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offest-xl-5 offset-lg-6 offset-md-6">
          <p class="persona_screen mt-3">Amount to Pay</p>
          <p class="total_account_tranfer market_price"></p>
        </div>
      </div>
      <!-- button-->
      <div class="row contine_button_payout">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6">
          <input type="hidden" name="calc_market_price" id="calc_market_price" />
          <button type="button" class="btn  login_button" id="btn-buy-coins-form-next">Continue</button>
        </div>
      </div>
      <div class="row contine_button_buy_coins">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6 pl-4">
          <p class="persona_screen mb-0">Requires confirmation</p>
          <p class="persona_screen mb-0">by SMS</p>
        </div>
      </div>
    </div>
    <!-- end-->
  </div>
  <!-- /Buy Coins - Form View -->

  <!-- Buy Coins - Form Confirm View -->
  <div class="buy-coins-confirm-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout">
      <p class="persona_screen">Account Information</p>
      <div class="row ">
        <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 pr-0">
          <div class="table_section_payout">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Vault Number</td>
                    <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_debit_acc_info"></span></label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="seconed_tranfer_section payot_transfer_section pt-5 pb-5">
        <p class="persona_screen">Transaction Details</p>
        <!-- table section-->
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 pr-0">
            <div class="table_section_payout">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Form of payment</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_form_of_payment"></span></label></td>
                    </tr>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Amount to Pay</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_amount_to_pay"></span></label></td>
                    </tr>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Quantity</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_amount"></span></label></td>
                    </tr>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Bank</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_order_payment_to"></span></label></td>
                    </tr>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Reference Message</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="confirm_ref_msg"></span></label></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- button-->
      <div class="row contine_button_payout">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 d-flex flex-row align-items-center">
          <a href="javascript:;" class="img_edit_details_confirm" id="btn-buy-coins-confirm-back"> <span class="pr-3"> <img src="<?php echo site_url('assets/img/beta/left-arrow.svg'); ?>" class=""></span>Edit Details</a>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 pl-4">
          <button type="button" class="btn login_button" id="btn-buy-coins-confirm-otp-next">Confirm</button>
        </div>
      </div>
      <div class="row claculate_payout_row">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6 pl-4">
          <p class="persona_screen mb-0">Requires confirmation</p>
          <p class="persona_screen mb-0">by SMS</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /Buy Coins - Form Confirm View -->

  <!-- Buy Coins - OTP View -->
  <div class="buy-coins-confirm-otp-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section">
        <p class="persona_screen">Enter the 4 digit code</p>
        <p class="persona_screen">that was sent to <span class="mobile_info"><!-- <?php echo $this->session->userdata('phone');?> --></span></p>
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
  <!-- /Buy Coins - OTP View -->

  <!-- Buy Coins - Success View -->
  <div class="buy-coins-complete-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout_done">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section_done ">
        <!--invoice pargraph add-->
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
                    <td class=" market_palece_sell_payout account_done">Description</td>
                    <td class=" market_palece_sell_payout account_done" id="txn_account_type"></td>
                    <td class=" market_palece_sell_payout account_deatils_number_done" id="sell_payout_debit_account_no_final_screen"></td>
                    <td class="market_palece_sell_payout text-right" id="txn_account_sel_qty"></td>
                  </tr>
                  <tr>
                    <td colspan="1"></td>
                    <td class="account_done">Price in <span id="txn_account_currency"></span></td>
                    <td colspan="1"></td>
                    <td class="text-right" id="txn_market_price"></td>
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
  <!-- /Buy Coins - Success View -->
</form>
</template>

<script>
export default {

}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
