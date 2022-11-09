// pages/detail_menu/detail_menu.js
import { getSongMenuTag, getSongMenuList} from "../../services/music"
Page({
  data:{
    songMenus: []
  },
  onLoad() {
    this.fetchAllMenuTag()
  },
  // 发送网络请求
  async fetchAllMenuTag(){
    // 1.获取tags
    const tagRes = await getSongMenuTag()
    // console.log(tagRes)
    const tags = tagRes.tags
    // 2.根据tags去获取对应的歌单
    const allPromises = []
    for (const tag of tags) {
      const promise = getSongMenuList(tag.name)
      allPromises.push(promise)
    }
    // 3.获取到所有的数据之后，调用一次setData
    Promise.all(allPromises).then(res => {
      this.setData({ songMenus: res })
    })
  }
  
})