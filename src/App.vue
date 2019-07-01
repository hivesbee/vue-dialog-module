<template>
  <div id="app">
    <button type="button" @click="showDialog = true">ダイアログを表示</button>
    <br>
    <br>
    <button type="button" @click="showDialog2()">ダイアログを表示（改）</button>
    <sample-dialog v-if="showDialog" @close="showDialog = false" />
  </div>
</template>

<script>
import SampleDialog from './components/SampleDialog.vue'

import SampleDialogModule from './components/SampleDialogModule'

export default {
  name: 'app',
  components: {
    SampleDialog
  },
  data () {
    return {
      showDialog: false,
      sampleDialogModule: null
    }
  },
  created () {
    this.sampleDialogModule = new SampleDialogModule()
  },
  methods: {
    async showDialog2 () {
      await this.sampleDialogModule.show()
      this.sampleDialogModule.hide()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
