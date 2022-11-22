<template>
  <!-- <?php
$default_currency = $card_currency;
$debit_dropdown_array = array(
  "Gold" => "1 Oz Gold Eagles",
  "Silver" => "1 Oz Silver Eagles",
  "Goldbar" => "1 Kg Gold Bars",
  "Silverbar" => "1 Kg Silver Bars"
);
?> -->
<form action="#" method="post" name="frm-load-card" id="frm-load-card">
  <!--coulmn full div start-->
  <div class="load-card-form-view">
    <!--row start-->
    <div class="debit_ammount">
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
          <div class="input-group mb-3">
            <select class="custom-select account_list_drop_down account_type" name="account_type" id="account_type">
              <option value="" disabled selected>SELECT ACCOUNT</option>
              <!-- <?php
              if (!empty($account_result['ResponseResult'])) {
                foreach ($account_result['ResponseResult'] as $acc_name => $account_res) {
                  if (is_array($account_res)) {
                    //$acc_name = strtolower(str_replace(' Account','',$account_res['account_type']));
                    $label = $account_res['AccountNumber'] . '|' . $acc_name;
                    $sel = ($acc_name == 'Gold') ? 'selected' : '';
                    if ($acc_name == 'Gold') {
                      $acc_name = $acc_name;
                      $acc_type = 'g';
                    } else if ($acc_name == 'Silver') {
                      $acc_name = $acc_name;
                      $acc_type = 's';
                    } else {
                      $acc_name = '';
                    }

                    if ($acc_name != '') {
                      echo  '<option value="' . $acc_name . '" ' . $sel . '>' . $debit_dropdown_array[$acc_name] . '&nbsp;&nbsp;-&nbsp&nbsp' . $account_res['AccountNumber'] . '</option>';
                    }
                  }
                }
              }
              ?> -->
            </select>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
          <p class="debit_account_paragraph mb-2">Available Balance</p>
          <p class="debit_account_sell_payout mb-2" id="debit_acc_avail_balance"><!-- <?php echo $account_result['ResponseResult']['Gold']['AvailableBalance']; ?> --> Oz</p>
        </div>
      </div>
    </div>
    <div class="sub_header_buycoins mt-4">
      <p class="persona_screen">Slide bar to select Oz/amount</p>
    </div>
    <!--sub header section end-->
    <!--row start-->
    <div class="row">
      <!--coulmn start-->
      <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 ">

        <!--row start-->
        <div class="row gold_loard_card mt-5 pt-3">
          <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
            <p class="Toatl_Gold_in_vault"><span id="lbl_acc_type">Gold</span> Eagles</p>
            <!-- <p class="total_account">82:00 Oz</p> -->
            <!--rang slider-->
            <div class="slidecontainer_tranfer">

              <input type="range" min="0" max="0" value="0" step="1" class="slider_2" id="exchange-amt-gold-silver">
              <input type="hidden" name="qty" id="qty" />
            </div>
          </div>
          <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 ">
            <div class="row">
              <div class="col-12 col-sm-12 col-xl-6 col-lg-6">
                <p class="persona_screen_tranfer pb-18">Oz</p>
                <p class="total_account_tranfer"><span></span><span id="lbl_quantity">1</span></p>
              </div>
            </div>
          </div>
        </div>
        <!--row end-->

        <!-- button section start-->
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 offest-xl-6 offset-lg-6 offset-md-6">
            <p class="persona_screen mt-3">Amount to load</p>
            <p class="total_account_tranfer" id="conversion_amt"></p>
          </div>
        </div>
        <!-- button-->
        <div class="row contine_button_payout">
          <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6">
            <button type="button" class="btn  login_button" id="btn-load-card-form-next">Continue</button>
          </div>
        </div>
        <div class="row contine_button_buy_coins">
          <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6 pl-4">
            <p class="persona_screen mb-0">Requires confirmation</p>
            <p class="persona_screen mb-0">by SMS</p>
          </div>
        </div>
        <!--button section end-->
      </div>
      <!--column end-->
    </div>
    <!--row end-->
    <!--coumn full div end-->
  </div>
  <!--content section end-->


  <!-- Load Card -  Confirm View -->
  <div class="load-card-confirm-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout">
      <p class="persona_screen">Stock-out from:</p>
      <div class="row ">
        <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 pr-0">
          <div class="table_section_payout">
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Vault number</td>
                    <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="debit_confirm_acc_no"></span></label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section pt-5">
        <p class="persona_screen">Card Load</p>
        <!-- table section-->
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 pr-0">
            <div class="table_section_payout">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Amount</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="credit_amount_load"></span></label></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                      <td class=" currency_sell_payout gbr_payout currency_payout_sell_screen_in">Reference Message</td>
                      <td class=" currency_sell_payout currency_payout_sell_screen_in"><label><span class="ammount_dollar_payout p-0" id="ref_msg"></span></label></td>
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
          <a href="javascript:;" class="img_edit_details_confirm" id="btn-load-card-confirm-back"> <span class="pr-3"> <img src="<?php echo site_url('assets/img/beta/left-arrow.svg'); ?>" class=""></span>Edit Details</a>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 pl-4">
          <button type="button" class="btn login_button" id="btn-load-card-confirm-otp-next">Confirm</button>
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
  <!-- /Exchange - Confirm View -->

  <!-- Load Card -  OTP View -->
  <div class="load-card-confirm-otp-view" style="display: none;">
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
  <!-- /Load Card - OTP View -->
  <!-- Load Card -  Transaction Complete View -->
  <div class="load-card-transaction-complete-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout_done">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section_done ">
        <!-- <p class="persona_screen">about section</p> -->
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
                    <td class=" market_palece_sell_payout account_done">Debit Account</td>
                    <td class=" market_palece_sell_payout account_deatils_number_done">&nbsp;</td>
                    <td class=" market_palece_sell_payout account_done">Master Card Load</td>
                    <td class="market_palece_sell_payout text-right" id="sell_payout_debit_amt_final_screen"></td>
                  </tr>
                  <tr>
                    <td colspan="1" id="debit_amt_confirm_screen_lbl">&nbsp;</td>
                    <td class="account_done" id="debit_acc_confirm_screen_lbl"></td>
                    <td colspan="1"><img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                    <td class="account_done" id="credit_load_amt_confirm_screen_lbl"></td>
                    <td class="text-right"></td>
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
  <!-- /Load Card - Transaction Complete View -->
</form>
</template>

<script>
export default {

}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
