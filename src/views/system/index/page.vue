<template>
  <div class='home_content_container'>
    <div class="home_content">
      <img src='./image/icon-only.png' />
      <p>欢迎使用本人力资源管理系统</p>
      <i>welcome to use this system</i>
    </div>
  </div>
</template>

<script>
import D2Badge from './components/d2-badge'
import D2Help from './components/d2-help'
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2Badge,
    D2Help,
    D2PageCover
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
  .home_content_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #fff;
    .home_content {
      width: 300px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 70%;
        height: 70%;
      }
      p {
        margin: 0;
        font-size: 18px;
        font-weight: bolder;
      }
      i {
        font-style: normal;
        padding-top: 10px;
        color: #999;
      }
    }
  }
</style>
