<template>
  <div class="view-home">
    <el-container>
      <el-aside :width="asideW + 'px'">
        <div class="scroll">
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
          :index="String(i1)"
          v-if="vo.children"
          :key="i1">
            <template slot="title">
              <i :class="vo.icon" v-if="vo.icon"></i>
              <span>
                {{vo.label}}
              </span>
            </template>
            <template
            v-for="(v2, i2) in vo.children"
            >
            <el-menu-item-group :key="i2">
              <template slot="title">
                <span>
                  {{v2.label}}
                </span>
              </template>
              <el-menu-item 
              v-for="(v3, i3) in v2.group"
              :key="i3"
              :route="v3.to.path"
              :index="i1 + '-' + i2 + '-' + i3"
              >
              {{v3.label}}
              </el-menu-item>
            </el-menu-item-group>
            </template>
          </el-submenu>
          <el-menu-item :index="String(i1)" v-else :key="i1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{vo.label}}</span>
          </el-menu-item>
          </template>
        </el-menu>
        </div>
      </el-aside>
      <el-main>
        <!-- <el-header></el-header> -->
        <div class="main-view">
          <router-view/>
        </div>
        <el-footer>
          Copyright &copy;2019 <a class="link" href="//github.com/kscript" target="_blank">kscript</a> 
        </el-footer>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      asideW: 240,
      isCollapse: false,
      defaultActive: '0',
      list: []
    }
  },
  watch:{
    $route(){
      this.defaultActive = this.getActive()
    }
  },
  methods: {
    getList () {
      return this.$store.dispatch('toolList')
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
          !active && (v2.group || []).forEach((v3, i3) => {
            let info = v3.to.path.split('#')
            if (!active && info[0] === path && (!info[1] || info[1] === hash)) {
              active = [i1, i2, i3].join('-')
            }
          })
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
  mounted () {
    this.getList().then(data => {
      this.list = data.route
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


