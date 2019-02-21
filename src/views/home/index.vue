<template>
  <div class="view-home">
    <el-container>
    <el-aside class="scroll">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu
       default-active="0-0-0"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
       :collapse="isCollapse"
       :collapse-transition="false"
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b">
        <template v-for="(vo, i1) in list">
        <el-submenu :index="String(i1)" v-if="vo.children" :key="i1">
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
      isCollapse: false,
      list: [
        {
          to: {
            path: '____'
          },
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
                  icon: 'el-icon-star-off',
                  label: '精灵图片生成器'
                },
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: auto!important;
  min-width: 200px;
  background: #545c64;
}
.el-menu{
  border-right: none;
}
</style>


