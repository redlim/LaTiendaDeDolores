import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'https://ddatos.com/api';

const tokenName = 'MercadoDoloresToken';

export const getApiToken = () => {
  Vue.http.get('user/session').then(response => {
    if(response.data.status === 'OK'){
      localStorage.setItem(tokenName,response.data.token);
    }else {
      console.log("ups, something wrong happend");
    }
  }, err => {
    console.log(err);
  });
};

export const getAllMarkets = (params) =>{
  params.token = localStorage.getItem(tokenName);
  return Vue.http.get('user/postalcode',{params:params})
};

export const getCategories = (params) => {
  params.token = localStorage.getItem(tokenName);
  return Vue.http.get('company/categories',{params:params});
};

export const getItems =( params) =>{
  params.token = localStorage.getItem(tokenName);
  return Vue.http.get('company/featured',{params:params});
};
