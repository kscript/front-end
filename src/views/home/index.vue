<template>
  <div class="view-home">
    <el-container>
    <el-aside class="scroll" :width="asideW + 'px'">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu
       class="el-menu-vertical-demo"
       text-color="#fff"
       background-color="#545c64"
       active-text-color="#ffd04b"
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
      defaultActive: '0-0-0',
      list: [
        {
          label: '开始',
          icon: 'el-icon-star-off',
          children: [
            {
              label: '',
              group: [
                {
                  to: {
                    path: '/'
                  },
                  label: '使用说明'
                }
              ]
            }
          ]
        },
        {
          label: 'CSS',
          icon: 'el-icon-picture-outline',
          children: [
            {
              label: '工具',
              group: [
                {
                  to: {
                    path: '/sprite'
                  },
                  icon: 'el-icon-setting',
                  label: '精灵图片生成器'
                },
                {
                  to: {
                    path: '/sprite'
                  },
                  icon: 'el-icon-more-outline',
                  label: '精灵图片生成器'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectMenu (index, indexPath, { route }) {
      if (route !== '') {
        this.$router.push({
          path: route
        })
      }
    },
    getActive () {
      let path = this.$route.path
      let active
      this.list.forEach((vo, i1) => {
        !active && (vo.children || []).forEach((v2, i2) => {
          !active && (v2.group || []).forEach((v3, i3) => {
            if (!active && v3.to.path === path) {
              active = [i1, i2, i3].join('-')
            }
          })
        })
      })
      return active
    }
  },
  mounted () {
    this.defaultActive = this.getActive()
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
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // width: auto!important;
  // min-width: 200px;
  background: #545c64;
}
.el-menu{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  border-right: none;
  /deep/ .el-menu-item-group__title{
    display: none;
  }
}
</style>


