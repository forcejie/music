// components/menu-area/menu-area.js
Component({
  properties: {
    title: {
      type: String,
      value:"默认歌单"
    },
    menulist: {
      type: Array,
      value: []
    }
  },
  methods:{
    onMenuMoreClick(){
      wx.navigateTo({
        url: '/pages/detail_menu/detail_menu',
      })
    }
  }
})