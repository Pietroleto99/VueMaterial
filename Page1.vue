<template>
  <div>
    <md-empty-state
      v-if="persons.length == 0"
      md-icon="supervisor_account"
      md-label="No persons found"
      md-description="Add a new person to the list"
      md-rounded
    >
      <md-button class="md-primary md-raised" @click="personFormDialog = true">Add person</md-button>
    </md-empty-state>

    <div v-if="persons.length > 0">
      <md-button class="md-primary md-raised" @click="personFormDialog = true">Add person</md-button>

      <md-list class="md-double-line">
        <md-divider></md-divider>
        <div v-for="person in persons" :key="person.id">
          <md-list-item :to="'/person/' + person.id">
            <md-avatar>
              <img :src="person.image">
            </md-avatar>
            <div class="md-list-item-text">
              <span>{{person.name}}</span>
              <span>{{person.description}}</span>
            </div>
            <md-button
              class="md-icon-button md-list-action"
              @click.prevent="confirmDeletePerson(person)"
            >
              <md-icon>delete</md-icon>
            </md-button>
          </md-list-item>
          <md-divider></md-divider>
        </div>
      </md-list>
    </div>

    <md-dialog :md-active.sync="personFormDialog">
      <md-dialog-title>Add new person</md-dialog-title>

      <div>
        <md-field>
          <label>Name</label>
          <md-input v-model="newPerson.name"></md-input>
        </md-field>
        <md-field>
          <label>Description</label>
          <md-input v-model="newPerson.description"></md-input>
        </md-field>
        <md-field>
          <label>Image</label>
          <md-input v-model="newPerson.image"></md-input>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-primary md-raised" @click="savePerson()">Save</md-button>
        <md-button @click="personFormDialog = false">Cancel</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog-confirm
      :md-active.sync="confirmDialog"
      md-title="Confirm Delete"
      md-content="Are you sure you want to delete this person?"
      @md-confirm="deletePerson()"
    ></md-dialog-confirm>

    <md-snackbar :md-active.sync="addPersonSnack">Person added!</md-snackbar>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data: function() {
    return {
      persons: DataService.getPersons(),
      personFormDialog: false,
      confirmDialog: false,
      newPerson: {},
      selectedPerson: null,
      addPersonSnack: false
    };
  },
  methods: {
    savePerson() {
      DataService.addPerson(
        this.newPerson.name,
        this.newPerson.description,
        this.newPerson.image
      );
      this.persons = DataService.getPersons();
      this.personFormDialog = false;
      this.addPersonSnack = true;
    },
    confirmDeletePerson(person) {
      this.selectedPerson = person;
      this.confirmDialog = true;
    },
    deletePerson() {
      DataService.deletePerson(this.selectedPerson.id);
      this.persons = DataService.getPersons();
      this.confirmDialog = false;
    }
  }
};
</script>

<style>
</style>
