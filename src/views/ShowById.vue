<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Add user",
      username: 1,
      show: false,
      info: {},
      name: "",
      address: "",
      id: "",
    };
  },
  methods: {
    click(id) {
      console.log(id);
      this.show = true;
      axios
        .get("http://localhost:8080/users/" + id)
        .then((response) => (this.info = response.data));
    },
  },
  mounted() {
    document.title = "List users";
  },
};
</script>

<template>
  <div class="about">
    <br />
    name:
    <input v-model="id" type="text" ref="id" placeholder="id" />
    <br />
    <button v-on:click="click(id)">
      <span>show users by id</span>
    </button>
    <div>
      <div v-if="show" class="article">
        <p>{{ info.id }} : {{ info.name }} + {{ info.address }}</p>
      </div>
    </div>
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
