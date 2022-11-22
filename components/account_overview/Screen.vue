<template>
  <div class="debit_ammount_report" v-if="this.$store.state.loadingContent == false && data.result != null">
    <div
      class="field_section_welcomes
        d-flex
        justify-content-between
        w-50
        align-items-center"
    >
      <h2 class="chart_title pb-2">Holdings Distribution</h2>

      <div class="input-group vault_slider_wrapper w-auto">
        <div class="input-group-append ml-3">
          <span
            class="input-group-text ATM_withdrawal_switch_button"
            id="basic-addon2"
          >
            <ul class="list-group list-group-flush">
              <li class="">
                <label class="switch">
                  <input
                    type="checkbox"
                    class="default"
                    id="switch_oz_kg_option"
                    value="Oz"
                    @change="changeValueOrPercent($event)"
                  />
                  <span class="slider switch_oz_kg"></span>
                </label>
              </li>
            </ul>
          </span>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text slider_text">Value/Percent</span>
        </div>
      </div>
    </div>

    <!--total section-->
    <!--*******************chart section start**********-->
    <div class="row" >
      <div class="col-12">
        <div class="chart section">
          <div class="row">
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
              <div class="row gold_loard_card_welcome border-0 p-3">
                <div
                  class="
                    col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5
                    welcome_page_active
                  "
                >
                  &nbsp;
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4
                    welcome_page_active"
                  v-if="valueOrPercent"
                >
                  Holdings({{ this.$store.state.app_currency }})
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4
                    welcome_page_active"
                  v-if="!valueOrPercent"
                >
                  Holdings(%)
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3
                    welcome_page_active"
                  v-if="valueOrPercent"
                >
                  Profit/Loss({{ this.$store.state.app_currency }})
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3
                    welcome_page_active"
                  v-if="!valueOrPercent"
                >
                  Profit/Loss(%)
                </div>
              </div>


              <div class="row gold_loard_card_welcome">
                <!--column-->
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <p class="welcome_page_active mt-3">
                    <span class="pr-2 ative_iones_welcones"
                      ><img
                        src="/beta/icon-gold.png"
                        class="mw-100"
                        style="height: 21px" /></span
                    ><span class="pl-2" style="margin-left:16px">
                      {{ data.result.gold.title }}
                    </span>
                  </p>
                </div>
                <!--column-->
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-if="valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.gold.conversion_rate, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4"
                  v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.gold.conversion_rate / data.total_balance * 100, 2) }}
                  </p>
                </div>
                <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="valueOrPercent">
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.gold.profit, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3"
                  v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.gold.profit_percent, 2) }}
                  </p>
                </div>
              </div>
              <div class="row gold_loard_card_welcome">
                <!--column-->
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <p class="welcome_page_active mt-3">
                    <span class="pr-2 ative_iones_welcones"
                      ><img
                        src="beta/icon_goldbar.png"
                        class="mw-100"
                        style="height: 34px"
                    /></span>
                    <span class="pl-4" style="margin-left:34px">
                      {{ data.result.goldbar.title }}
                    </span>
                  </p>
                </div>
                <!--column-->
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-if="valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.goldbar.conversion_rate, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.goldbar.conversion_rate / data.total_balance * 100, 2) }}
                  </p>
                </div>
                <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="valueOrPercent">
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.goldbar.profit, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.goldbar.profit_percent, 2) }}
                  </p>
                </div>
              </div>

              <!-- //Silver Coins Block -->
              <div class="row gold_loard_card_welcome">
                <!--column-->
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <p class="welcome_page_active mt-3">
                    <span class="pr-2 ative_iones_welcones_sliver"
                      ><img
                        src="beta/icon-silver.png"
                        class="mw-100"
                        style="height: 21px" /></span
                    ><span class="pl-2" style="margin-left:16px">
                      {{ data.result.silver.title }}
                    </span>
                  </p>
                </div>
                <!--column-->
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4" v-if="valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silver.conversion_rate, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4"
                  v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silver.conversion_rate / data.total_balance * 100, 2) }}
                  </p>
                </div>
                <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="valueOrPercent">
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silver.profit, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silver.profit_percent, 2) }}
                  </p>
                </div>
              </div>
              <!-- //Silver Bars Block -->
              <div class="row gold_loard_card_welcome">
                <!--column-->
                <div class="col-12 col-sm-12 col-xl-5 col-lg-5 col-md-5">
                  <p class="welcome_page_active mt-3">
                    <span class="pr-2 ative_iones_welcones_sliver"
                      ><img
                        src="beta/icon_silverbar.png"
                        class="mw-100"
                        style="height: 34px" /></span
                    ><span class="pl-4" style="margin-left:34px">
                      {{ data.result.silverbar.title }}
                    </span>
                  </p>
                </div>
                <!--column-->
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4"
                  v-if="valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silverbar.conversion_rate, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-4 col-lg-4 col-md-4"
                  v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.silverbar.conversion_rate / data.total_balance * 100, 2) }}
                  </p>
                </div>
                <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3" v-if="valueOrPercent">
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silverbar.profit, 2) }}
                  </p>
                </div>
                <div
                  class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3"
                  v-if="!valueOrPercent"
                >
                  <p class="welcome_page_active mt-3">
                    {{ numberFormatter(data.result.silverbar.profit_percent, 2) }}
                  </p>
                </div>
              </div>
              <!-- //Master Card Block -->
              <!-- <div class="row gold_loard_card_welcome">
              <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
                <p class="welcome_page_active mt-3"><span class="pr-2 text-dark"><img src="<?php echo site_url('assets/img/beta/icon_mastercard.png'); ?>" class="mw-100" style="height:21px;" /></span><span class="pl-3">MasterCard</span></p>
              </div>
              <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3">
                <p class="welcome_page_active mt-3"><?php echo ((isset($result['card']['balance'])) ? $result['card']['balance'] : '---'); ?></p>
              </div>
              <div class="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-3">
                <p class="welcome_page_active mt-3"><?php echo (isset($result['card'])) ? number_format((($result['card']['balance'] / $total_balance) * 100), 2, '.', '') : '0'; ?></p>
              </div>
            </div> -->
            </div>
            <div class="col-12 col-sm-12 col-xl-6 col-lg-6 col-md-6">
              <div id="donutchart" class="google_pie_chart_welcome"></div>
            </div>
          </div>
        </div>

        <!-- button-->
        <div class="row contine_button_payout">
          <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <p class="chart_title mt-3"><strong>Total</strong></p>
            <p class="total_account_tranfer">
              {{ getCurrencySymbol(this.$store.state.app_currency) }} {{ numberFormatter(data.total_balance, 2) }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <p class="chart_title mt-3">
              <strong>Performance Since Begining</strong>
            </p>
            <p class="total_account_tranfer" v-if="valueOrPercent">
              {{ getCurrencySymbol(this.$store.state.app_currency) }} {{ numberFormatter(data.total_profit, 2) }}
            </p>
            <p class="total_account_tranfer" v-if="!valueOrPercent">
              {{ numberFormatter(data.profit_percent, 2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <EchartsVue id="right"></EchartsVue>
  </div>
</template>

<script>
import EchartsVue from './Echarts';
export default {
  name: 'OverviewContent',
  data () {
    return {
      valueOrPercent: true,
      data: {}
    };
  },
  mounted() {
    this.$store.commit('setLoadingContent', true);
    this.fetchData();
  },
  components: {EchartsVue},
  methods: {
    async fetchData() {
      console.log('fetchData');
      var currency_result = await this.$api.$get('exchange_price/type_based');
      console.log(currency_result);

      var body = new FormData();
      body.append('username', 'yang@goldensuisse.com');
      var balance_result = await this.$api.$post('getBalance', body);
      console.log(balance_result);

      var profitloss_array = await this.$api.$post('profit_loss/get_profit_loss', body);
      console.log(profitloss_array);

      if (balance_result.ResponseCode != '0') {
        return;
      }
      if (profitloss_array.ResponseCode != '0') {
        return;
      }

      var total_purchase = 0;
      var total_profit = 0;
      var profitloss = {};

      for (let i = 0; i < profitloss_array.ResponseResult.length; i++) {
        var profitloss_item = profitloss_array.ResponseResult[i];
        profitloss[profitloss_item.Bullion] = profitloss_item;
        total_purchase += profitloss_item.accumulatedPurchases;
        total_profit += profitloss_item.profitLoss;
      }

      var profit_percent = 0;
      if (total_purchase > 0) {
        profit_percent = total_profit * 100 / total_purchase;
      }

      var default_currency = this.$store.state.app_currency;
      var total_balance = 0;

      // Gold Eagle
      var final_result = {
        gold: {
          balance: 1 * balance_result.ResponseResult.Gold.AvailableBalance,
          title: 'Gold Coins',
          conversion_rate: 1 * balance_result.ResponseResult.Gold.AvailableBalance * currency_result.ResponseResult.XAU[default_currency].buy_price,
          profit: profitloss.GEA.profitLoss,
          profit_percent: profitloss.GEA['%']
        }
      };
      total_balance += final_result.gold.conversion_rate;

      // Gold Bar
      if (balance_result.ResponseResult.Goldbar != null) {
        var goldbar_balance = balance_result.ResponseResult.Goldbar.AvailableBalance / process.env.CONVERSION_KG_OZ_VALUE;
        final_result = {
          ...final_result,
          goldbar: {
            balance: goldbar_balance,
            title: 'Gold Bars',
            conversion_rate: goldbar_balance * currency_result.ResponseResult.GBAR[default_currency].buy_price,
          }
        }
        total_balance += final_result.goldbar.conversion_rate;
      } else {
        final_result = {
          ...final_result,
          goldbar: {
            balance: null,
            title: 'Gold Bars',
            conversion_rate: 0
          }
        }
      }
      final_result.goldbar = {
        ...final_result.goldbar,
        profit: profitloss.XAU.profitLoss,
        profit_percent: profitloss.XAU['%']
      }

      // Silver Eagle
      final_result = {
        ...final_result,
        silver: {
          balance: 1 * balance_result.ResponseResult.Silver.AvailableBalance,
          title: 'Silver Coins',
          conversion_rate: 1 * balance_result.ResponseResult.Silver.AvailableBalance * currency_result.ResponseResult.XAU[default_currency].buy_price,
          profit: profitloss.SEA.profitLoss,
          profit_percent: profitloss.SEA['%']
        }
      }
      total_balance += final_result.silver.conversion_rate;

      // Silver Bar
      if (balance_result.ResponseResult.Silverbar != null) {
        var silverbar_balance = balance_result.ResponseResult.Silverbar.AvailableBalance / process.env.CONVERSION_KG_OZ_VALUE;
        final_result = {
          ...final_result,
          silverbar: {
            balance: silverbar_balance,
            title: 'Silver Bars',
            conversion_rate: silverbar_balance * currency_result.ResponseResult.SBAR[default_currency].buy_price,
          }
        }
        total_balance += final_result.silverbar.conversion_rate;
      } else {
        final_result = {
          ...final_result,
          silverbar: {
            balance: null,
            title: 'Silver Bars',
            conversion_rate: 0
          }
        }
      }
      final_result.silverbar = {
        ...final_result.silverbar,
        profit: profitloss.XAG.profitLoss,
        profit_percent: profitloss.XAG['%']
      }

      // Master Card
      this.$store.commit('setCardCurrency', 'EUR');
      if (balance_result.ResponseResult.Card != null) {
        this.$store.commit('setCardCurrency', balance_result.ResponseResult.Card.Currency);
        final_result = {
          ...final_result,
          currency: balance_result.ResponseResult.Card.Currency,
          balance: balance_result.ResponseResult.Card.AvailableBalance,
          title: 'MasterCard'
        }
      }
      this.data = {
        result: final_result,
        total_balance: total_balance,
        total_profit: total_profit,
        profit_percent: profit_percent
      }
      console.log(this.data);
      this.$store.commit('setLoadingContent', false);
    },
    changeValueOrPercent(event) {
      this.valueOrPercent = !event.target.checked;
      console.log(this.data);
    },
    numberFormatter(value, decimal) {
      if (value == undefined) return '0.00';
      return value.toFixed(decimal).toLocaleString();
    },
    getCurrencySymbol(currency) {
      if (currency == 'USD') return '$';
      if (currency == 'EUR') return '€';
      if (currency == 'GBP') return '£';
      if (currency == 'CHF') return 'Fr';
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
#right{
  float: right;
  margin-top:-720px;
  margin-right: 120px;
}
</style>

