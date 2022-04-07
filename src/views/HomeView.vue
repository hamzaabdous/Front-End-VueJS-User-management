<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      message: "Add user",
      username: 1,
      show: true,
      info: "",
      user: {
        name: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(["addUserAction"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  mounted() {
    document.title = "Add page";

    /*  this.addUserAction().then(() => {
      //  this.getUsers;
      console.log("users", this.getUsers);
    }); */
  },
};
</script>

<template>
  <div id="app">
    <header>
      <h1>{{ message }}</h1>
      <div class="crud">
        <div class="add">
          name:
          <input
            v-model="user.name"
            type="text"
            ref="name"
            placeholder="name"
          />
          <br />
          <br />
          address
          <input
            v-model="user.address"
            type="text"
            ref="address"
            placeholder="address"
          />
          <br />
          <br />
          <br />
          <v-btn
            @click="addUserAction(user)"
            color="primary"
            elevation="2"
            small
            >Add user</v-btn
          >
        </div>
      </div>
      <br />
    </header>
  </div>
</template>

<style>
h1 {
  color: rgb(255, 118, 77);
}
.crud {
  background-color: rgb(255, 125, 125);
  text-align: center;
}
.add {
  padding: 20px;
}
.container {
  background-color: antiquewhite;
}
.article {
  background-color: rgb(248, 86, 86);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
