<template>
  <v-app id="home">
    <v-app-bar color="primary" absolute>
      <v-toolbar-title>Opendoors</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <!--<HelloWorld/>-->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
