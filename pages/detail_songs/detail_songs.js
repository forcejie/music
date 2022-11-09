// pages/detail_songs/detail_songs.js
import recommendStore from "../../store/recommendStore"
Page({
  data: {
    songs: []
  },
  onLoad() {
    recommendStore.onState("recommendSongs", this.handleRecommendSongs)
  },
  handleRecommendSongs(value) {
    this.setData({ songs: value })
  },
  onUnload() {
    recommendStore.offState("recommendSongs", this.handleRecommendSongs)
  }
})