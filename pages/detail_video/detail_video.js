// pages/detail_video/detail_video.js
import { getMVUrl, getMVInfo, getMVRelated } from '../../services/video'
Page({
  data:{
    id: 0,
    mvUrl:"",
    mvInfo:{},
    relatedVideo:[],
    danmuList:[
      {text:"小宝学长o(*￣︶￣*)o",color:"#FFB6C1", time: 3},
      {text:"经理啊<(￣︶￣)↗[GO!]",color:"#FFB6C1", time: 5},
      {text:"大师╰(*°▽°*)╯",color:"#FFB6C1", time: 7},
      {text:"风佬✨✨✨✨",color:"#FFB6C1", time: 9},
      {text:"H.o(*^▽^*)┛",color:"#FFB6C1", time: 11},
      {text:"可乐💜💜💜💜",color:"#FFB6C1", time: 13},
    ]
  },
  onLoad(options) {
    // 1.获取id
    const id = options.id
    this.setData({id})

    // 2.请求数据
    this.fetchMVUrl()
    this.fetchMVInfo()
    this.fetchMVRelated()
  },
    async fetchMVUrl() {
    const res = await getMVUrl(this.data.id)
    this.setData({mvUrl: res.data.url})
  },
    async fetchMVInfo(){
    const res = await getMVInfo(this.data.id)
    // console.log(res)
    this.setData({mvInfo: res.data})
    },

    async fetchMVRelated(){
      const res = await getMVRelated(this.data.id)
      this.setData({relatedVideo: res.data})
      console.log(res)
    }
})