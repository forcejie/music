// pages/main_video/main_video.js
import {getTopMV} from "../../services/video"
Page({
  data: {
    videoList:[],
    offset: 0,
    hasMore:true
  },  
  onLoad() {
    // getTopMV().then(res => {
    //   this.setData({ videoList: res.data })
    // })
    // 发送网络请求
    this.fetchTopMV()
  },
  // 发送网络请求的方法
  async fetchTopMV() {
    // 1.获取数据
    const res = await getTopMV(this.data.offset)
    
    // 2.将新的数据追加到原来数据的后面
    const newVideoList = [...this.data.videoList, ...res.data]

    // 3.设置全新的数据
    this.setData({ videoList: newVideoList })
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.hasMore
  },

  // 监听下拉加载更多
  onReachBottom(){
    if(!this.data.hasMore) return
    this.fetchTopMV()
  },

  // --------界面事件监听的方法-----
  onVideoItemTap(event){
    // const item = event.currentTarget.dataset.item
    // wx.navigateTo({
    //   url: `/pages/detail_video/detail_video?id=${item.id}`,
    // })
  }
})