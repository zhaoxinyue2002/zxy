<template>
  <!-- <?php
  $transaction_html = $transaction_debit_html = $transaction_credit_html = '';
  $transaction_count = $transaction_debit_count = $transaction_credit_count = 0;
  if (!empty($transaction_results)) { //right-arrow.svg
    foreach ($transaction_results as $transaction) {
      //Set the transaction Credit and debit
      if ($transaction['DebitCredit'] == 'Credit') {
        $transaction_html .= '<tr class="' . $transaction['DebitCredit'] . '" transdate="' . gmdate('Y-m-d', strtotime($transaction['CreationDate'])) . '">';
        $transaction_html .= '<td>';
        $transaction_html .= '<p class="mb-0">' . gmdate('H:i:s,d M', strtotime($transaction['CreationDate'])) . '</p>';
        $transaction_html .= '<p class="mb-0">' . $transaction['Description'] . '</p>';
        $transaction_html .= '</td>';
        $transaction_html .= '<td><img src="' . site_url('assets/img/beta/left-arrow.svg') . '" class="arrow_icon_tranfer_table"></td>';
        $transaction_html .= '<td>' . $transaction['Currency'] . ' ' . $transaction['Amount'] . '</td>';
        $transaction_html .= '<td>' . $transaction['Id'] . '</td>';
        $transaction_html .= '<td class="text-right">' . $transaction['OtherAccount'] . '</td>';
        $transaction_html .= '</tr>';
        $transaction_count += 1;
      }
      if ($transaction['DebitCredit'] == 'Debit') {
        $transaction_html .= '<tr class="' . $transaction['DebitCredit'] . '" transdate="' . gmdate('Y-m-d', strtotime($transaction['CreationDate'])) . '">';
        $transaction_html .= '<td>';
        $transaction_html .= '<p class="mb-0">' . gmdate('H:i:s,d M', strtotime($transaction['CreationDate'])) . '</p>';
        $transaction_html .= '<p class="mb-0">' . $transaction['Description'] . '</p>';
        $transaction_html .= '</td>';
        $transaction_html .= '<td><img src="' . site_url('assets/img/beta/right-arrow.svg') . '" class="arrow_icon_tranfer_table"></td>';
        $transaction_html .= '<td>' . $transaction['Currency'] . ' ' . $transaction['Amount'] . '</td>';
        $transaction_html .= '<td>' . $transaction['Id'] . '</td>';
        $transaction_html .= '<td class="text-right">' . $transaction['OtherAccount'] . '</td>';
        $transaction_html .= '</tr>';
        $transaction_count += 1;
      }
    }
  }
  ?> -->
  <div class="">
    <!-- debit ammount-->
    <div class="debit_ammount_report">
      <div class="row  pb-1 filter_panel">
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <!--  <label class="input-group-text option_in_tarnfer" for="inputGroupSelect01">Options</label> -->
            </div>
            <select class="custom-select select_in_tranfer" name="mycardaccount" id="mycardaccount">
              <!-- <?php
              if (!empty($account_result)) {
                $is_bar_account = 0;
                foreach ($account_result as $acc_name => $account_res) {
                  if (is_array($account_res)) {
                    //$acc_name = strtolower(str_replace(' Account','',$account_res['account_type']));
                    $label = $account_res['AccountNumber'] . '|' . $acc_name;
                    $sel = ($acc_name == 'Gold') ? 'selected' : '';
                    if ($acc_name == 'Gold')
                      $acc_name = 'Gold Eagles';
                    else if ($acc_name == 'Silver')
                      $acc_name = 'Silver Eagles';
                    else if ($acc_name == 'Goldbar') {
                      $acc_name = 'Gold Bars 1 Kg';
                      $is_bar_account = 1;
                    } else if ($acc_name == 'Silverbar') {
                      $acc_name = 'Silver Bars 1 Kg';
                      $is_bar_account = 1;
                    } else if ($acc_name == 'Card')
                      $acc_name = 'Mastercard EUR';
                    echo '<option value="' . $label . '"" ' . $sel . '>' . $acc_name . '&nbsp;&nbsp;-&nbsp&nbsp' . $account_res['AccountNumber'] . '</option>';
                  }
                }
                if ($is_bar_account == 1) {
                  echo '<option value="bars_list_gold" ' . $sel . '>' . 'Bars List - Gold</option>';
                  echo '<option value="bars_list_silver" ' . $sel . '>' . 'Bars List - Silver</option>';
                }
              }
              ?> -->
            </select>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6 text-right">
          <!-- tab start-->
          <div class="btn-group btn-group-toggle  " data-toggle="buttons">
            <label class="btn  btn_report_new_design mr-2" @click="change(0)" :class="{active:tabIndex==0}">
              <input type="radio" name="transaction_type" checked id="All" value="All" autocomplete="off"  > All
            </label>
            <label class="btn  btn_report_new_design mr-2 credit_block" @click="change(1)" :class="{active:tabIndex==1}">
              <input type="radio" name="transaction_type" id="Credit" value="Credit" autocomplete="off"><span id="report_tab_opt_credit" >Stock In</span>
            </label>
            <label class="btn all_time_report btn_report_new_design debit_block" @click="change(2)" :class="{active:tabIndex==2}">
              <input type="radio" name="transaction_type" id="Debit" value="Debit" autocomplete="off"><span id="report_tab_opt_debit" >Stock Out</span>
            </label>
          </div>
        </div>
      </div>
      <div class="seconed_tranfer_section ">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
            <div class="table_section">
              <div class="table-responsive">
                <table class="table" id="report_wrapper">
                  <thead>
                    <tr id="report_row">
                      <th class="mcc_icon_block">&nbsp;</th>
                      <th class="date_description_report">Date/Description</th>
                      <th class="date_description_report">Transaction</th>
                      <th>Oz</th>
                      <th class="date_description_report">Stock In/Stock Out</th>
                    </tr>
                  </thead>
                  <tbody id="filter-results"><!-- <?php echo $transaction_html; ?> --></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- button-->
      <div class="row contine_button" id="bar_reports_total_block" style="display: none;">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
          <h3 class="text-right">Total: <span id="bar_total"></span> Kg </h3>
        </div>
      </div>

      <div class="row contine_button">
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6" id="generate_results">
          <button type="button" class="btn show_more_button" id="btn-load-report-data">Show More <i class="fas fa-arrow-down" id="loading-icon"></i></button>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6" id="generate_pdf" style="display: none;">
          <button type="button" class="btn btn-block pdf_button">Create PDF</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        tabIndex : 0,
    }
  },
  methods:{
    change(index){
      console.log(index);
      this.tabIndex = index;
    }
  }
}
</script>

<style>
@import "@/assets/css/dashboard_v2.css";
</style>
