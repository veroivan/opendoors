<template>
  <q-page class="flex flex-center">
    <div class="full-width row wrap justify-center items-start content-start absolute-top q-mt-xl">
      <img alt="Quasar logo" src="~assets/opendoors-logo-text.png">
    </div>
    <div class="row full-width justify-center">
      <q-input class="col-xs-8" bg-color="accent" v-model="searchUrl" filled type="url" label="Open directory url">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
        <q-btn label="Knock" color="secondary" text-color="primary" @click="scrapeUrl"/>
      </q-input>
    </div>
  </q-page>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'PageIndex',
        data: () => ({
            searchUrl: ''
        }),
        methods: {
            async scrapeUrl() {
                //TODO
                console.log('Knock knock')
                const response = await axios.get('scrapeUrl')
                console.log('Response', response)
            }
        }
    }
</script>
