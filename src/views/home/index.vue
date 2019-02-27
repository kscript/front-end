<template>
  <div class="view-home">
    <el-container>
      <el-aside :width="asideW + 'px'">
      <v-deformation
        class="deformation-el"
        :x="0"
        :w="asideW"
        :draggable="2"
        :resizable="2"
        :showHandler="false"
        :move="true"
        size="w"
        axis="x"
        :minw="minw"
        :maxw="maxw"
        @resizing="onResizing">
        <div class="scroll" style="height: 100%;">
        <el-menu
        class="el-menu-vertical-demo"
        text-color="#555"
        text-color2="#fff"
        background-color2="#545c64"
        active-text-color2="#ffd04b"
        @select="selectMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="defaultActive"
        :style="'width: ' + asideW + 'px'"
        >
          <template v-for="(vo, i1) in list">
          <el-submenu
           v-if="vo.children"
           :key="i1"
           :index="String(i1)">
            <template slot="title">
              <i :class="vo.icon" v-if="vo.icon"></i>
              <span class="menu-item-title">
                {{vo.label}}
              </span>
            </template>
            <el-menu-item-group>
              <el-menu-item 
                v-for="(v2, i2) in vo.children"
                :key="i2"
                :route="v2.path"
                :index="i1 + '-' + i2"
                >
                <span class="menu-item-title">
                  {{v2.label}}
                </span>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="String(i1)" :key="i1" :route="vo.path">
            <i :class="vo.icon" v-if="vo.icon"></i>
            <span slot="title" class="menu-item-title">{{vo.label}}</span>
          </el-menu-item>
          </template>
        </el-menu>
        </div>
        </v-deformation>
      </el-aside>
      <el-main>
        <!-- <el-header></el-header> -->
        <div class="main-view">
          <router-view/>
        </div>
        <el-footer :style="'padding-left:' + asideW + 'px'">
          Copyright &copy;2019 <a class="link" href="//github.com/kscript" target="_blank">kscript</a> 
        </el-footer>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import deformation from '../../components/common/deformation.vue'
export default {
  data () {
    return {
      asideW: 240,
      minw: 160,
      maxw: 300,
      isCollapse: false,
      defaultActive: '0',
      timer: 0,
      list: []
    }
  },
  watch:{
    $route(){
      this.defaultActive = this.getActive()
    }
  },
  components: {
    'v-deformation': deformation
  },
  methods: {
    onResizing (left, top, width, height) {
      this.asideW = width
      if (!this.timer) {
        this.timer = setTimeout(() => {
          this.timer = 0
          this.$store.commit('asideW', this.asideW)
        }, 150)
      }
    },
    getList () {
      return this.$store.dispatch('routes')
    },
    selectMenu (index, indexPath, { route }) {
      if (route !== '') {
        this.$router.push({
          path: route
        })
      }
    },
    getActive () {
      let path = this.$route.path
      let hash = this.$route.hash.slice(1)
      let active
      this.list.forEach((vo, i1) => {
        !active && (vo.children || []).forEach((v2, i2) => {
          let info = v2.path.split('#')
          if (!active && info[0] === path && (!info[1] || info[1] === hash)) {
            active = [i1, i2].join('-')
          }
        })
      })
      return active
    },
    redirect () {
      if (this.$route.fullPath === '/') {
        this.$router.push({
          path: '/viewer',
          hash: '#start'
        })
      }
    }
  },
  created () {
    this.asideW = this.$store.getters.asideW
  },
  mounted () {
    this.getList().then(data => {
      this.list = data
      this.defaultActive = this.getActive() || '0'
      this.redirect()
    })
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
}
.el-aside{
  .deformation-el{
    cursor: auto;
    outline: none;
    height: 100%!important;
  }
  .scroll{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    overflow: hidden auto;
    border-right: 1px solid #e6e6e6;
    background: #fff;
    .el-menu{
      border-right: none;
      /deep/ .el-menu-item-group__title{
        display: none;
      }
      /deep/ .el-menu-item,
      /deep/ .menu-item-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.el-main{
  padding-bottom: 75px;
  .el-footer{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    height: 60px!important;
    line-height: 60px;
    border-top: 1px solid #f6f6f6;
    color: #999;
    .link{
      padding: 0px 5px;
      font-size: 14px;
      color: #999;
      text-decoration: none;
    }
  }
}
</style>


