<template>
    <div class="Report">
    <div class="container-fluid fullscreen">
      <div class="row  full_logo_sreen_dashboard h-100">
        <!--dashboard section-->
        <!-- Sidebar Menu -->
        <div class="col-12 col-sm-12 col-md-3 col-xl-3 col-lg-3 fisrt_coulum_backcolor" id="first_setion">
          <div class="logo-section">
            <h6 class="company_logo_text">COMPANY LOGO</h6>
            <div class="input_group_section">
              <div class="read_madels_accountes">
                <label class="user_group_text ">Mr</label>
                <label class="user_group_text_deactive_username text-center">Pradeep Kumar </label>
              </div>
              <div class="acc_number-dashboard">
                <span class="account_numberes">Acc 234-789-788</span>
              </div>
              <div class="read_madels_accountes">
                <label class="user_group_text_active "> <a href="dashboard.html" class="user_group_text_deactive_error">MY ACCOUNTS</a></label>
              </div>

              <div class="read_madels_accountes">
                <label class="user_group_text_deactive "><a href="exchange.html" class="user_group_text_deactive_error">EXCHANGE GOLD & SILVER</a></label>
              </div>
              <div class="read_madels_accountes">
                <label class="user_group_text_deactive "><a href="report.html" class="user_group_text_active_my_account">REPORTS</a><span> <img src="img\new-menu-highlight.svg" class="arrow_icon_tranfer"></span></label>
              </div>
              <div class="read_madels_accountes">
                <label class="myprofile_dashboard "> <a href="profile.html" class="user_group_text_deactive_error">MY PROFILE</a></label>
              </div>
                <div class="sell_button">
                  <a href="sell_payout.html"><button type="button" class="btn  login_button">Sell and Payout</button></a>
                </div>
                <div class="tranfer_button">
                  <a href="tranfer.html"><button type="button" class="btn login_button_tranfer">Transfer</button></a>
                </div>
                <p class="conformation-dashboard">Requires Confirmation</p>
                <p class="conformation-dashboard_bysms">by SMS</p>
            </div>
            <footer>
              <div class="row footer_row">
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <a href="#"><img src="<?php echo site_url('assets/img/Untitled-5.png'); ?>" class="image_section_footer"></a>
                </div>
                <div class="col-12 col-sm-12 col-xl-7 col-lg-7 col-md-7">

                  <a href="#" class="footer_logout_dashboard">
                    <p class="number_footer_1">Logout</p>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <!-- /Sidebar Menu -->
        <!--account section-->
        <!-- Content Section -->
        <div class="col-12 col-sm-12 col-md-9 col-xl-9 col-lg-9 pl-0 pr-0 second_section" id="fist_class_display">
          <div class="accounts">
            <h1><strong>Reports</strong></h1>
            <!-- debit ammount-->
            <div class="debit_ammount_report">
              <div class="row  pb-4">
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-6">
                  <!-- tab start-->
                  <div class="btn-group btn-group-toggle  " data-toggle="buttons">
                    <label class="btn  btn_report_new_design active mr-2">
                      <input type="radio" name="options" id="USD" autocomplete="off"> All
                    </label>
                    <label class="btn  btn_report_new_design mr-2">
                      <input type="radio" name="options" id="INR" autocomplete="off"> Debit
                    </label>
                    <label class="btn all_time_report btn_report_new_design">
                      <input type="radio" name="options" id="EUR" autocomplete="off"> Credit
                    </label>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <!--  <label class="input-group-text option_in_tarnfer" for="inputGroupSelect01">Options</label> -->
                    </div>
                    <select class="custom-select select_in_tranfer">
                      <option selected>All Accounts</option>
                      <option value="1">788798-6789-79989</option>
                      <option value="2">9799-879-768</option>
                      <option value="3">789-879-6789</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- second label section 2-->
              <div class="row  pb-3">
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <p class="total_account_tranfer">2</p>
                </div>
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5 border_style_in_bottom_report pl-0 pr-0">
                  <div class="btn-group btn-group-toggle w-100 " data-toggle="buttons">
                    <label class="btn btn-warning active pl-0 text-left">
                      <input type="radio" name="options" id="USD" autocomplete="off"> Last week
                    </label>
                    <label class="btn btn-warning text-left">
                      <input type="radio" name="options" id="INR" autocomplete="off"> Last month
                    </label>
                    <label class="btn btn-warning all_time_report text-right">
                      <input type="radio" name="options" id="EUR" autocomplete="off"> All time
                    </label>
                  </div>

                </div>
              </div>
              <div class="seconed_tranfer_section ">
                <p class="persona_screen mb-2">Transaction Found.<a href="#" class="text_report"><span class="reload_report"> Reload Transaction</span></a></p>
                <p class="persona_screen">25 Sep,2019-18 Sep,2019</p>
                <!-- table section-->
                <div class="row">
                  <!--columns-->
                  <div class="col-12 col-sm-12 col-md-10 col-xl-10 col-lg-10">
                    <div class="table_section">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th class="date_description_report">Date / Description</th>
                              <th></th>
                              <th>Currency / Amount</th>

                              <th>ID</th>
                              <th class="text-right">Account</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>




                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones text-warning pr-2"> <i class="fas fa-plane"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer to test@gmail.com</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 450:98</td>
                              <td>2890</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones pr-2"><i class="fas fa-trophy"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer From ABC Bank</p>
                              </td>
                              <td> <img src="<?php echo site_url('assets/img/beta/right-arrow.svg'); ?>" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 24:98</td>
                              <td>3505</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                            <tr>
                              <td>
                                <p class="mb-0"><span class="report_trophy_iones text-warning pr-2"> <i class="fas fa-plane"></i></span>12:34,23 Sep</p>
                                <p class="mb-0 ml-4">Transfer to test@gmail.com</p>
                              </td>
                              <td> <img src="img\left-arrow.svg" class="arrow_icon_tranfer_table"></td>
                              <td>XUS 450:98</td>
                              <td>2890</td>
                              <td class="text-right">89909-87654-907</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <!--coumn end-->
                  <!--toggle button start-->
                  <div class="col-12 col-sm-12 col-xl-2 col-md-2 col-lg-2 button_toogle ">
                    <button class="navbar-toggler ml-auto data_toogle_button close_button report_button_click " id="remove_button_click" type="button">
                      <span class="navbar-toggler-icon my-toggler"><i class="fas fa-bars bar_icones"></i></span>
                    </button>
                  </div>
                  <!--toogle end-->
                </div>
              </div>


              <!-- button-->
              <div class="row contine_button">
                <div class="col-12 col-sm-12 col-md-5 col-xl-5 col-lg-5 ">
                  <button type="button" class="btn  show_more_button">Show More</button>
                </div>
                <div class="col-12 col-sm-12 col-md-5 col-xl-5 col-lg-5 ">
                  <button type="button" class="btn  pdf_button">Create PDF</button>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-5 col-xl-5 col-lg-5 offset-xl-5 offset-lg-5 offset-md-5">
                  <a href="#" class="text_report">
                    <p class="persona_screen">Download Document</p>
                  </a>
                </div>
              </div>

            </div>

            <!--footer-->
            <div class="footer footer_in_accounts">
              <a href="#" class="footer_logout_dashboard">
                <p class="number_footer_logout">Help Center</p>
              </a>
            </div>
          </div>
        </div>
        <!-- /Content Section -->
        <!-- Settings Menu Drawer -->
        <div class="col-12 col-sm-12 col-md-3 col-xl-3 col-lg-3 sected_card_section " style="display: none;">
          <div class="logo-section">
            <!-- <h6 class="company_logo_text">Crad</h6> -->
            <p class="ptagwithcard">Card</p>
            <div class="input_group_section_card">
              <!--input group section-->
              <div class="input-group mb-3 useremane_dashboard">
                <div class="input-group-prepend">
                  <span class="input-group-text   ATM_withdrawal ">ATM withdrawals</span>
                </div>
                <!-- <input type="text" class="form-control first_names_display" placeholder="Username">
                  <span><input type="checkbox" checked data-toggle="toggle"></span> -->
                <div class="input-group-append swithbutton_append">
                  <span class="input-group-text  ATM_withdrawal_switch_button pr-0" id="basic-addon2">
                    <ul class="list-group list-group-flush">
                      <li class="">
                        <label class="switch ">
                          <input type="checkbox" class="default">
                          <span class="slider"></span>
                        </label>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <!-- <span class="account_numberes">Acc 234-789-788</span> -->
              <div class="input-group mb-3 myaccount_dashboard useremane_dashboard">
                <div class="input-group-prepend">
                  <span class="input-group-text  ATM_withdrawal ">Online Purchases</span>
                </div>
                <div class="input-group-append swithbutton_append">
                  <span class="input-group-text  ATM_withdrawal_switch_button  pr-0" id="basic-addon2">
                    <ul class="list-group list-group-flush">
                      <li class="">
                        <label class="switch ">
                          <input type="checkbox" class="default">
                          <span class="slider slider-bar"></span>
                        </label>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <!--rand slider-->
              <div class="slidecontainer pt-2">
                <p class="range_details"><span class="daily_user_details">Daily</span><span>$</span><span id="demo"></span></p>
                <input type="range" min="1" max="100" value="50" class="slider_1" id="myRange">

              </div>
              <div class="slidecontainer">
                <p class="range_details"><span class="daily_user_details">Monthly</span><span>$</span><span id="demo_1"></span></p>
                <input type="range" min="1" max="100" value="50" class="slider_1" id="myRange_1">
                <button class="navbar-toggler ml-auto data_toogle_button remove_icon_click" id="remove_button_click" type="button">
                  <span class="navbar-toggler-icon my-toggler"><i class="fas fa-bars bar_icones remove__distep_icon"></i></span>
                </button>

              </div>
              <div class="input-group mb-3 myaccount_dashboard useremane_dashboard">
                <div class="input-group-prepend">
                  <span class="input-group-text   apple_play_pay"><i class="fab fa-apple-pay"></i></span>
                </div>
                <div class="input-group-append swithbutton_append_apple_pay">
                  <span class="input-group-text  ATM_withdrawal_switch_button pr-0" id="basic-addon2">
                    <ul class="list-group list-group-flush">
                      <li class="">
                        <label class="switch ">
                          <input type="checkbox" class="default">
                          <span class="slider slider-bar"></span>
                        </label>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <div class="reuires_confromation">
                <p class="conformation-dashboard">Some information about </p>
                <p class="conformation-dashboard_bysms">Settings</p>
              </div>
            </div>
            <!--button section-->
            <div class="tranfer_button">
              <button type="button" class="btn btn-primary login_button_send">Set Default</button>
            </div>
            <div class="sell_button">
              <button type="button" class="btn btn-primary login_button">Save</button>
            </div>


            <footer>
              <!-- <div class="row">
                  <div class="col-12 col-sm-12 col-md-12 col-xl-11 col-lg-11">
                    <p class="app_version">APP VERSION</p>
                  </div>
                </div>  -->

              <div class="row seeting_rowes">
                <div class="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                  <p class="conformation-dashboard">Some information about </p>
                  <p class="conformation-dashboard_bysms">Settings</p>
                </div>
                <!-- <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">

                    <a href="#"> <p class="number_footer_1">Logout</p></a>
                  </div> -->
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
