import store from '../store'

if (localStorage.getItem("ice_wine")) {
    store.commit("login/setUser", JSON.parse(localStorage.getItem("ice_wine")));
}