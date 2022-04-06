<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      message: "Delete user",
      username: 1,
      show: true,
      info: "",
      id: "",
    };
  },
  methods: {
    ...mapActions(["deleteUserAction"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  mounted() {},
};
</script>

<template>
  <div id="app">
    <header>
      <h1>{{ message }}</h1>

      <div class="crud">
        <div class="delete">
          id:
          <input v-model="id" type="text" ref="id" placeholder="id" />
          <br />

          <br />
          <button @click="deleteUserAction(id)">Delete user</button>
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
