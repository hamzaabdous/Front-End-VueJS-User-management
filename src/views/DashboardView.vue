<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="users"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Gestion users</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.address"
                      label="address"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close(item)">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save(editedItem)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize()"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "id", align: "start", value: "id", sortable: true },
      { text: "name", value: "name", sortable: true },
      { text: "address", value: "address", sortable: true },
      { text: "Actions", value: "actions", sortable: false },
    ],
    users: [],
    isAdd: true,
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: "",
      address: "",
    },
    defaultItem: {
      id: 0,
      name: "",
      address: "",
    },
  }),
  mounted() {
    this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapGetters(["getUsers"]),
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.setUsersAction().then(() => {
        this.users = [...this.getUsers];
        console.log(this.users);
      });
    },
    ...mapActions([
      "setUsersAction",
      "editUserAction",
      "deleteUserAction",
      "addUserAction",
    ]),

    editItem(item) {
      this.editedIndex = this.users.indexOf(item) + 1;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteUserAction(this.editedIndex).then(() => {
        this.users = this.getUsers;
      });
      this.closeDelete();
    },
    close() {
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    save(editedItem) {
      if (this.editedIndex == -1) {
        console.log("add");
        this.addUserAction(editedItem).then(() => {
          this.users = [...this.getUsers];
        });
      } else {
        console.log("edite");

        this.editUserAction(editedItem).then(() => {
          this.users = this.getUsers;
        });
      }

      this.close();
    },
  },
};
</script>
