<template>
  <v-card class="mx-auto overflow-hidden" height="765">
    <v-app-bar color="#A6CEE3">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Tanger Alliance</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list style="padding: 0px; align-items: center" nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <img src="./assets/TangerAlliance.png" alt="logo" height="200" />
          <v-list dense nav class="sideBar">
            <v-list-item
              v-for="item in listDrawerRouter"
              :key="item.id"
              link
              :to="item.ROUTE"
              class="sideBarItem"
            >
              <v-list-item class="test">
                <v-icon>{{ item.name }}</v-icon>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app>
      <router-view />
    </v-app>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      listDrawerRouter: [
        { id: 1, name: "Add", ROUTE: "/" },
        { id: 2, name: "Update", ROUTE: "/Update" },
        { id: 3, name: "Delete", ROUTE: "/Delete" },
        { id: 4, name: "Show All", ROUTE: "/ShowUsers" },
        { id: 5, name: "Dashboard", ROUTE: "/DashboardView" },
      ],
    };
  },
};
</script>

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
