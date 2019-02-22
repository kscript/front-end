<template>
  <div class="view-home">
    <el-container>
    <el-aside class="scroll" :width="asideW + 'px'">
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
      <router-view/>
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
    }
  },
  mounted () {
    this.getList().then(data => {
      this.list = data.route
      this.defaultActive = this.getActive() || '0'
    })
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  position: absolute;
  min-height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.el-aside{
  .scroll{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #e6e6e6;
    .el-menu{
      border-right: none;
      /deep/ .el-menu-item-group__title{
        display: none;
      }
    }
  }
}
</style>


