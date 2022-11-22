export const state = () => ({
  loadingContent: false,
  firstname: 'Yang',
  lastname: 'Yang',
  settingMenu: false,
  app_currency: 'EUR',
  card_currency: 'EUR'
});

export const mutations = {
  setLoadingContent(state, payload) {
      state.loadingContent = payload;
  },
  openSettingMenu(state, payload) {
      state.settingMenu = payload;
  },
  setAppCurrency(state, payload) {
      state.app_currency = payload;
  },
  setCardCurrency(state, payload) {
      state.card_currency = payload;
  },
  saveSettings(state, payload) {
      state.app_currency = payload;
      state.settingMenu = false;
  }
};

export const actions = {
};
