<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Add user",
      username: 1,
      show: true,
      info: "",
      name: "",
      address: "",
    };
  },
  methods: {
    click() {
      axios
        .get("http://localhost:8080/users/")
        .then((response) => (this.info = response.data));
    },
    handlclick(name, address) {
      axios
        .post("http://localhost:8080/users/add", {
          name: name,
          address: address,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    document.title = "List users";
  },
};
</script>

<template>
  <div class="about">
    <button v-on:click="click">
      <span>show users</span>
    </button>
    <div>
      <div v-if="show" class="article">
        <div v-for="item in info" :key="item.id">
          <p>{{ item.id }} : {{ item.name }} + {{ item.address }}</p>
        </div>
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
