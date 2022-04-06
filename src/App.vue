<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        <v-avatar color="primary" size="80">GESTION USERS</v-avatar>
      </div>
      <v-btn to="/" text>Add</v-btn>
      <v-btn to="/Update" text>Update</v-btn>
      <v-btn to="/Delete" text>Delete</v-btn>
      <v-btn to="/ShowUsers" text>ShowUsers</v-btn>
      <v-btn to="/DashboardView" text>DashboardView</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
