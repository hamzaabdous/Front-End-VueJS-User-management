import axios from "axios";
const CustomizedAxios = axios;
CustomizedAxios.defaults.baseURL = "http://localhost:8080/";
//var token;
/* if (localStorage.cache) {
  token = JSON.parse(localStorage.cache);
  CustomizedAxios.defaults.headers.common["Accept"] = "application/json";
  CustomizedAxios.defaults.headers.common = {
    Authorization: `Bearer ${token.utilisateurModule.token}`,
    Accept: "application/json",
  };
} */

/*CustomizedAxios.defaults.headers.common["Accept"] = "application/json";
CustomizedAxios.defaults.headers.common = {
  Authorization: "Bearer 6|6uIIYWserC7ESnRnsCoDB5fcgnZNMUNJWkAShELa",
};
//console.log("store.getters.getCurrentUser", this.$store);
/* if (userModule.state.currentUser != null) {
  console.log("user", userModule.state.currentUser);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${userModule.state.currentUser.token}`,
  };
} */
/*axios.interceptors.request.use(
  function (config) {
    const token = store.getters.getCurrentUser.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);*/

export default CustomizedAxios;
