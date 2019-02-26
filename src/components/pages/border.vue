<template>
  <div class="page-border">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cxt: null,
      handlers: []
    }
  },
  methods: {
    init () {
      this.cxt = this.$refs.canvas.getContext('2d')
      this.createHandler(this.cxt)
    },
    createHandler (cxt) {

    }
  },
  mounted () {
    this.init()
  }
}
</script>
