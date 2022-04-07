import CustomizedAxios from "../plugin/axios.js";

const usersModule = {
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    DELETE_USER(state, id) {
      state.users = state.users.filter((c) => c.id != id);
    },
    EDIT_USER(state, user) {
      state.users = state.users.map((c) => {
        if (c.id == user.id) return user;
        return c;
      });
    },
  },
  actions: {
    setUsersAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("users/")
          .then((response) => {
            commit("SET_USERS", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addUserAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/add", {
          name: user.name,
          address: user.address,
        })
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_USER", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteUserAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("users/delete/" + id)
          .then((response) => {
            commit("DELETE_USER", id);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editUserAction({ commit }, user) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.put("/users/update", {
          id: user.id,
          name: user.name,
          address: user.address,
        })
          .then((response) => {
            commit("EDIT_USER", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
  },
};
export default usersModule;
