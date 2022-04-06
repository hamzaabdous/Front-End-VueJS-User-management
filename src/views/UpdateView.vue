<template>
  <div class="update">
    <div class="add">
      id: <input v-model="user.id" type="text" ref="id" placeholder="id" />
      <br />
      name:
      <input v-model="user.name" type="text" ref="name" placeholder="name" />
      <br />
      <br />address:
      <input
        v-model="user.address"
        type="text"
        ref="address"
        placeholder="address"
      />
      <br />
      <br />
      <br />
      <button @click="editUserAction(user)">Update</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      message: "Delete user",
      username: 1,
      show: true,
      info: "",
      user: {
        id: "",
        name: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(["editUserAction"]),
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  mounted() {},
};
</script>

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
.update {
  background-color: rgba(221, 112, 112, 0.8);
}
.article {
  background-color: rgb(248, 86, 86);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
