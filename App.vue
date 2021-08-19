<template>
  <div>
    <md-app md-mode="fixed-last">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <span class="md-title">Titolo riga1</span>
        </div>
        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route="true">
            <md-tab id="tab-home" md-label="Home" to="/home"></md-tab>
            <md-tab id="tab-page1" md-label="Persons" to="/page1"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      navOpen: false
    };
  }
};
</script>

<style>
.md-app {
  height: 100vh;
}
.md-tabs {
  width: 100%;
}
</style>
