// pages/main_music/main_music.js
import { getMusicBanner, getPlaylistDetail } from "../../services/music"
import querySelect from "../../utils/query-select"
// import throttle from "../../utils/throttle"
import { throttle } from 'underscore'


const querySelectThrottle = throttle(querySelect, 100)
// const app = getApp()
Page({
  data: {
    searchValue: "",
    banners:[],
    bannerHeight: 150,
    screenWidth: 375,

    // 推荐歌单
    recommendSongs:[]
  },
  onLoad(){
    // getMusicBanner().then(res => {
    //   this.setData({ banners: res.banners })
    // })
    this.fetchMusicBanner()
    this.fetchRecommendSongs()
  },
    // 网络请求的方法封装
     async fetchMusicBanner() {
       const res = await getMusicBanner()
       this.setData({ banners: res.banners })
    //   console.log(res)
     },
     async fetchRecommendSongs(){
        const res = await getPlaylistDetail(3779629)
        const playlist = res.playlist
        // console.log(playlist)
        // 前六条
        const recommendSongs = playlist.tracks.slice(0, 6)
        this.setData({ recommendSongs })
     },

  onSearchClick(){
    wx.navigateTo({url: '/pages/detail_search/detail_search',})
  },
  onBannerImageLoad(event) {
    querySelectThrottle(".banner-image").then(res => {
      this.setData({ bannerHeight: res[0].height })
    })
  },
  onRecommendClick(){
    console.log(11)
  }
})