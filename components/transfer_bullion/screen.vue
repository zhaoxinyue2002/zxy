
<template>
  <!-- <?php
$currency_label_array = array(
  "Gold" => "Gold Eagles", "Silver" => "Silver Eagles", "Goldbar" => "Gold Bars", "Silverbar" => "Silver Bars"
);
$account_label_array = array(
  "Gold" => "XAU", "Silver" => "XAG", "Goldbar" => "GBAR", "Silverbar" => "SBAR"
);
$debit_dropdown_array = array(
  "Gold" => "1 Oz Gold Eagles", "Silver" => "1 Oz Silver Eagles", "Goldbar" => "1 Kg Gold Bars", "Silverbar" => "1 Kg Silver Bars"
);
$default_currency = (null !== $this->session->userdata('app_currency')) ? $this->session->userdata('app_currency') : 'EUR';
?> -->
<form action="#" method="post" name="frm-make-transfer-btw-users" id="frm-make-transfer-btw-users" v-if="this.$store.state.loadingContent == false && this.data != null">
  <!-- Default View -->
  <div class="transfer-b-acc-form-view">
    <div id="msg_block" class="input-field col s12">
      <!-- <?php
      if ($this->session->userdata('temp_transfer_btw_success_msg')) {
        $msg = $this->session->userdata('temp_transfer_btw_success_msg');
        $this->session->unset_userdata('temp_transfer_btw_success_msg', '');
        echo $msg;
      }
      ?> -->
    </div>
    <!-- debit ammount-->
    <div class="debit_ammount">
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 text-right pt-3">
          <p class="debit_account_paragraph">Stock-out from:</p>
        </div>
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
          <div class="input-group mb-3">
            <select class="custom-select select_in_tranfer custom-select select_in_tranfer" name="debit_acc_to" id="debit_acc_to">
              <option value="" disabled selected>SELECT ACCOUNT</option>
             <!--  <?php
              if (!empty($account_result['ResponseResult'])) {
                foreach ($account_result['ResponseResult'] as $akey => $avalue) {
                  if ($akey != 'Card') {
                    $sel = ($akey == 'Gold') ? 'selected="selected"' : '';
                    echo '<option value="' . $avalue['AccountNumber'] . '" ' . $sel . '>' . $debit_dropdown_array[$akey] . ' - ' . $avalue['AccountNumber'] . '</option>';
                  }
                }
              }
              ?> -->
            </select>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 offset-md-6 offset-xl-6 offset-lg-6">
          <p class="debit_account_paragraph mb-2">Available Holdings</p>
          <p class="debit_account_sell_payout mb-2" id="debit_acc_avail_balance"><!-- <?php echo number_format($account_result['ResponseResult']['Gold']['AvailableBalance'], 2, '.', ','); ?> --> Oz</p>
        </div>
      </div>
    </div>
    <!-- table section-->
    <div class="seconed_tranfer_section">
      <p class="persona_screen">Fill in the fields</p>
      <p class="persona_screen">to complete the transaction</p>
      <!-- table section-->
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
          <div class="table_section">
            <table class="table">
              <tbody>
                <tr>
                  <td class="currency_sell_payout gbr_payout">Username</td>
                  <td class="currency_sell_payout">
                    <input type="text" class="form-control text_box_sell_payout validate_account ctrl_box_perm" name="credit_acc_to_username" id="credit_acc_to_username" required="" autocomplete="off" />
                    <small style="font-size: 0.69rem;color: #181818;opacity: 0.6;font-family: Arial;display: block;content: none;" id="credit_acc_to_user_block">&nbsp;</small>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td class="currency_sell_payout">
                    <label class="label_account_number" id="transfer_lbl_beneficiary_name"></label>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td class="currency_sell_payout">
                    <label class="label_account_number" id="transfer_lbl_beneficiary_address"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--total section-->
    <div class="dashboard_image_section">
      <div class="row">
        <div class="col-12 col-sm-12 col-xl-7 col-lg-7 col-md-7">
          <p class="Toatl_Gold_in_vault">Amount To Transfer</p>
          <!-- <p class="total_account">82:00 Oz</p> -->
          <!--rang slider-->
          <div class="slidecontainer_tranfer">
            <input type="range" min="0" max="0" value="0" step="1" class="slider_2" name="amount" id="amount" />
          </div>
        </div>
        <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3 ">
          <div class="row">
            <div class="col-12 col-sm-12 col-xl-12 col-lg-12">
              <p class="persona_screen_tranfer pb-18" id="oz_label">Gold</p>
              <p class="total_account_tranfer"><span></span><span id="transfer_amt">1 Oz</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transfer Bar Selection -->
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
        <div class="useremane_dashboard">
          <div class="w-100" id="bar_info_title_display_block" style="display: none;">
            <span class="input-group-text  user_group_text_tranfer ">Select Ownership Transfer</span>
          </div>
          <div class="w-100" id="bar_info_content_display_block" style="display: none;"></div>
        </div>
      </div>
    </div>
    <!-- /Transfer Bar Selection -->

    <!-- next descript_section-->
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
        <div class="input-group mb-3 useremane_dashboard">
          <div class="input-group-prepend">
            <span class="input-group-text  user_group_text_tranfer ">Description</span>
          </div>
          <input type="text" class="form-control first_names_display_tranfer text-center ctrl_box_perm" name="description" id="description" required="" autocomplete="off" />
        </div>
      </div>
    </div>
    <!-- button-->
    <div class="row contine_button">
      <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 offset-xl-6 offset-lg-6 offset-md-6">
        <button type="button" class="btn login_button" name="btn-transfer-between-users-form-next" id="btn-transfer-between-users-form-next" disabled>Continue</button>
      </div>
    </div>
  </div>
  <!-- /Default Form View -->

  <!-- Confirmation Form View-->
  <div class="transfer-b-acc-confirm-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout">
      <p class="persona_screen">Account Information</p>
      <div class="row mt-3">
        <div class="col-12 col-sm-12 col-xl-12 col-lg-12">
          <div class="row row_border_confirm pb-2 ml-0">
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6  pl-0">
              <label class="label_debit">Vault Number</label>
            </div>
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
              <label class="label_account_number" id="debit_confirm_list_view_account_no"></label>
            </div>
          </div>
          <div class="row row_border_confirm pb-2 ml-0 mt-3" id="lbl_bar_account_block" style="display: none;">
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6  pl-0">
              <label class="label_debit">Serial Number(s)</label>
            </div>
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
              <label class="label_account_number" id="debit_confirm_list_bar_serials"></label>
            </div>
          </div>
        </div>
      </div>
      <!-- table section-->
      <!-- next beneficiary table section-->
      <div class="seconed_tranfer_section payot_transfer_section">
        <p class="persona_screen">Beneficiary Information</p>
        <!-- table section-->
        <div class="row">
          <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
            <div class="table_section_payoutes">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td class="currency_sell_payout gbr_payout">Username</td>
                      <td class="currency_sell_payout">
                        <label class="label_account_number" id="credit_confirm_list_view_username"></label>
                      </td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td colspan="2"><label class="label_account_number" id="transfer_amount"></label></td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td><label class="label_account_number" id="transfer_description"></label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!--toggle button-->
        </div>
      </div>
      <!-- second beneficiary table section-->
      <!-- button-->
      <div class="row contine_button_payout">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 d-flex flex-row align-items-center">
          <a href="javascript:;" class="img_edit_details_confirm" id="btn-transfer-between-users-confirm-back"> <span class="pr-3"> <img src="<?php echo site_url('assets/img/beta/left-arrow.svg'); ?>" class=""></span>Edit Details</a>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 pl-4">
          <button type="button" class="btn login_button" id="btn-transfer-between-users-confirm-otp-next">Confirm</button>
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

  <!-- Confirmation OTP View-->
  <div class="transfer-b-acc-confirm-otp-view" style="display: none;">
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

  <!-- /Confirmation OTP View--->

  <!-- Transfer - Transaction Complete View -->
  <div class="transfer-b-acc-transaction-complete-view" style="display: none;">
    <!-- debit ammount-->
    <div class="debit_ammount_payout_done">
      <!-- table section-->
      <div class="seconed_tranfer_section payot_transfer_section_done ">
        <!--invoice pargraph add-->
        <div class="page_content_done_page">
          <p class="invoice_done mb-0"><b id="txn_confirm_msg"><!-- <?php echo $this->lang->line('transaction_success_msg'); ?> --></b></p>
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
                    <td class=" market_palece_sell_payout account_done" id="txn_acc_type"></td>
                    <td class=" market_palece_sell_payout account_deatils_number_done" id="sell_payout_debit_account_no_final_screen"></td>
                    <td class="market_palece_sell_payout text-right" id="sell_payout_debit_amt_final_screen">1.00 Oz</td>
                  </tr>
                  <tr>
                    <td colspan="1"></td>
                    <td class="account_done">Price in <span id="user_acc_currency"></span></td>
                    <td colspan="1"></td>
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
  <!-- /Transfer - Transaction Complete View --->

</form>
</template>

<script>
export default {
    data(){
      return{
        data : null
      }
    },
    mounted() {
      this.$store.commit('setLodingContent',true);
      this.fetchData();
    },
    components:{},
    methods: {
      async fetchData() {
        console.log('fetchData');
        var receiver_account_info = await this.$api.$post('getAllAccountsAllCards');

        this.$store.commit('setLoadingContent', false);
      }
    }
}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
