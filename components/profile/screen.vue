<template>
  <form action="#" name="frm-profile-details" id="frm-profile-details" method="post" class="form-horizontal">
    <div class="myprofile myprofile-main-screen">
        <!--fisrt tab-->
        <div class="general_profile_user" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <h2 class="pt-4 pb-4"><!-- <?php echo format_input(ucfirst($result['Title'])) . '.' . format_input(ucfirst($result['FirstNames'])) . ' ' . format_input(ucfirst($result['LastNames'])); ?> --></h2>
            <div class="row">
                <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 mb-3">
                    <!-- Form Grid View -->
                    <!-- Mobile Section -->
                    <div class="card mb-2">
                        <div class="card-header">Phone</div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Country Code:</label>
                                        <select class="custom-select account_list_drop_down select_box" name="prof_mobile_prefix" id="prof_mobile_prefix" required="">
                                            <option value="">--SELECT--</option>
                                           <!--  <?php
                                            $mobile_no = $result['MobilePhone'];
                                            //$mobile_no = preg_replace('/[^A-Za-z0-9\-]/', '', $mobile_no);
                                            $mobile_no_split = explode(' ', $mobile_no);
                                            $mobile_no = $mobile_no_split[1];
                                            //print_r($mobile_no_split);
                                            $is_mobile_prefix_sep = 0;

                                            foreach ($country_dropdown as $rcountry) {
                                                //$sel = ()'';
                                                //$sel = ($rcountry['name']==$result['PhysicalAddressCountry'])?'selected="selected"':'';
                                                $mobile_prefix = str_replace("+", "", $rcountry['phone_code']);
                                                $sel = ($mobile_prefix == $mobile_no_split[0]) ? 'selected="selected"' : '';
                                                echo '<option value="' . $mobile_prefix . '" ' . $sel . '>' . $rcountry['name'] . ' (' . $rcountry['phone_code'] . ')</option>';
                                            }
                                            ?> -->
                                        </select>
                                    </div>
                                    <div class="col-md-8">
                                        <label for="uname" class="float-left">Mobile Number:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm ctrl_box_digit_rules" name="prof_mobile" id="prof_mobile" value="<?php echo format_input($mobile_no); ?>" required="" autocomplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Residential Address Section -->
                    <div class="card mb-2">
                        <div class="card-header">Residential Address</div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row row_color">
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">House No:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_res_house_no" id="prof_res_house_no" value="<?php echo format_input($result['PhysicalAddressLine1']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Street:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_res_street" id="prof_res_street" value="<?php echo format_input($result['PhysicalAddressLine2']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Postcode:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_res_zip" id="prof_res_zip" value="<?php echo format_input($result['PhysicalAddressPostalCode']); ?>" required="" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">City:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_res_city" id="prof_res_city" value="<?php echo format_input($result['PhysicalAddressCity']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Country:</label>
                                        <select class="custom-select account_list_drop_down select_box ctrl_box_perm" name="prof_res_country" id="prof_res_country" required="">
                                            <option value="">--SELECT--</option>
                                            <!-- <?php
                                            foreach ($country_dropdown as $rcountry) {
                                                //$sel = ()'';
                                                $sel = ($rcountry['name'] == $result['PhysicalAddressCountry']) ? 'selected="selected"' : '';
                                                echo '<option value="' . $rcountry['name'] . '" ' . $sel . '>' . $rcountry['name'] . '</option>';
                                            }
                                            ?> -->
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">State:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_res_state" id="prof_res_state" value="<?php echo format_input($result['PhysicalAddressState']); ?>" required="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card Address Section -->
                    <div class="card mb-2">
                        <div class="card-header">
                            <p class="float-left mr-3 mb-0">Card Delivery Address<small class="pl-3 card_help_txt">Same as Residential Address</small></p>
                            <div class="input-group-append float-left d-block mt-2">
                                <span class="input-group-text  ATM_withdrawal_switch_button  pr-0" id="basic-addon2">
                                    <ul class="list-group list-group-flush">
                                        <li class="">
                                            <label class="switch ">
                                                <input type="checkbox" class="default" id="switch_card_address_opt" value="y">
                                                <span class="slider slider-bar"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div class="card-body" id="card_address_information_block">
                            <div class="form-group">
                                <div class="row row_color">
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">House No:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_card_house_no" id="prof_card_house_no" value="<?php echo format_input($result['MailingAddressLine1']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Street:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_card_street" id="prof_card_street" value="<?php echo format_input($result['MailingAddressLine2']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Postcode:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_card_zip" id="prof_card_zip" value="<?php echo format_input($result['MailingAddressPostalCode']); ?>" required="" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">City:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_card_city" id="prof_card_city" value="<?php echo format_input($result['MailingAddressCity']); ?>" required="" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">Country:</label>
                                        <select class="custom-select account_list_drop_down select_box ctrl_box_perm" name="prof_card_country" id="prof_card_country" required="">
                                            <!-- <?php
                                            foreach ($country_dropdown as $ccountry) {
                                                //$sel = ()'';
                                                $sel = ($ccountry['name'] == $result['MailingAddressCountry']) ? 'selected="selected"' : '';
                                                echo '<option value="' . $ccountry['name'] . '" ' . $sel . '>' . $ccountry['name'] . '</option>';
                                            }
                                            ?> -->
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="uname" class="float-left">State:</label>
                                        <input type="text" class="form-control txt_box ctrl_box_perm" name="prof_card_state" id="prof_card_state" value="<?php echo format_input($result['MailingAddressState']); ?>" required="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark float-left btn_submit" id="btn_authorize_change">Authorize Changes</button>
                </div>
            </div>
        </div>
    </div>


    <!-- My Profile -  OTP View -->
    <div class="myprofile-confirm-otp-view" style="display: none;">
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
                    <p class="persona_screen Resent_codes_otp"><a href="javascript:;" id="resend_profile_confirm_otp">Resend Code</a></p>
                    <a href="javascript:;"><button type="submit" class="btn login_button" id="btn_profile_confirm">Confirm</button></a>
                </div>
            </div>
        </div>
    </div>
    <!-- /My Profile - OTP View -->
    <!-- My Profile -  Transaction Complete View -->
    <div class="myprofile-transaction-complete-view" style="display: none;">
        <div class="debit_ammount_payout_done">
            <!-- table section-->
            <div class="seconed_tranfer_section payot_transfer_section_done ">
                <div class="page_content_done_page">
                    <p class="invoice_done mb-0"><b><!-- <?php echo $this->lang->line('success_msg_line_1'); ?> --></b></p>
                    <p class="invoice_done mb-0"><b><!-- <?php echo $this->lang->line('success_msg_line_2'); ?> --></b></p>
                </div>
            </div>
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
