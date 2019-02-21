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
        this.content = `
          # 这是一个测试
          \`\`\` js
            var a = 'test'
          \`\`\`
        `.replace(/\s{10}/g, '\n')
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

