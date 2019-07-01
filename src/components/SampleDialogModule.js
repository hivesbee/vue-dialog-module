import Vue from 'vue'
import SampleDialog from './SampleDialog'

export default class {
  constructor () {
    this.vm = new Vue({
      components: { SampleDialog },
      data() {
        return {
          shown: false,
          action: ''
        }
      },
      methods: {
        closeDialog() {
          this.action = 'close'
        }
      },
      render (h) {
        return this.shown ? h(SampleDialog, {
          on: {
            ['close']: this.closeDialog
          },
          attrs: {
            style: 'z-index: 1000'
          }
        }) : undefined
      }
    }).$mount()

    document.body.appendChild(this.vm.$el)
  }

  show() {
    this.vm.$data.shown = true
    this.vm.$data.action = ''
    return new Promise((resolve) => {
      this.vm.$watch('action', (newValue) => {
        resolve({
          action: this.vm.$data.action,
          message: newValue === 'ok' ? this.vm.$data.message : ''
        })
      })
    })
  }

  hide () {
    this.vm.$data.shown = false
  }
}
