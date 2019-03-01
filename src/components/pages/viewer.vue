<template>
  <div class="page-markdown">
    <v-vuemarkdown
     class="md-editor-preview markdown-body"
     ref="markdown"
     :source="content"
     @rendered="rendered">
    </v-vuemarkdown>
  </div>
</template>
<script>
import 'github-markdown-css'
import 'prismjs'
import 'prismjs/themes/prism.css';
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
  watch:{
    $route(){
      this.parseHash()
    }
  },
  methods: {
    parseHash () {
      let hash = this.$route.hash.slice(1)
      this.$store.dispatch('server', hash).then(data => {
        this.content = data
      })
    },
    rendered () {
      this.$nextTick(()=>{
        window.scrollTo(0, 0)
        Prism.highlightAll()
      })
    }
  },
  mounted () {
    this.parseHash()
    this.$bus.$off('markdownContent').$on('markdownContent', content => {
      this.content = content
    })
    Prism.highlightAll()
  }
}
</script>

