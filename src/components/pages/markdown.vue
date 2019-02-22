<template>
  <div class="page-markdown">
    <v-vuemarkdown
     class="md-editor-preview markdown-body"
     ref="markdown" :source="content">
    </v-vuemarkdown>
  </div>
</template>
<script>
import 'github-markdown-css'
import VueMarkdown from 'vue-markdown'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    'v-vuemarkdown': VueMarkdown
  },
  methods: {
    parseHash () {
      let hash = this.$route.hash
      if (hash === '#t1') {
        
      }
    }
  },
  mounted () {
    this.parseHash()
    this.$bus.$off('markdownContent').$on('markdownContent', content => {
      this.content = content
    })
  }
}
</script>

