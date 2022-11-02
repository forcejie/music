// pages/main_music/main_music.js
import { getMusicBanner } from "../../services/music"
Page({
  data: {
    searchValue: "",
    banners:[]
  },
  onload(){
    getMusicBanner().then(res => {
      this.setData({ banners: res.banners })
    })
    // this.fetchMusicBanner()
  },
    // 网络请求的方法封装
    // async fetchMusicBanner() {
    //   const res = await getMusicBanner()
      // this.setData({ banners: res.banners })
    //   console.log(res)
    // },

  onSearchClick(){
    wx.navigateTo({url: '/pages/detail_search/detail_search',})
  },
  
})