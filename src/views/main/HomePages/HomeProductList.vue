<template>
  <div class="index-board-list">
    <div
      class="index-board-item"
      v-for="(item, index) in buyData"
      :key="index"
      :class="['index-board-' + item.url, { 'line-last': index % 2 !== 0 }]"
    >
      <div class="index-board-item-inner">
        <h2>{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
        <div class="index-board-button">
          <a href="#" class="button">立即购买</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyData: [
        {
          title: "开放产品",
          desc: "开放产品描述",
          url: "openproduct",
        },
        {
          title: "品牌营销",
          desc: "品牌营销",
          url: "logo",
        },
        {
          title: "使命必达",
          desc: "使命必达",
          url: "golife",
        },
        {
          title: "勇攀高峰",
          desc: "勇攀高峰",
          url: "heigh",
        },
      ],
    };
  },
};
</script>

<style scoped>
.index-board-list {
  overflow: hidden;
  margin-top: 15px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-openproduct .index-board-item-inner {
  background: url(../../../assets/images/1.png) no-repeat;
  background-size: 200px 150px;
}
.index-board-logo .index-board-item-inner {
  background: url(../../../assets/images/2.png) no-repeat;
  background-size: 200px 150px;
}
.index-board-golife .index-board-item-inner {
  background: url(../../../assets/images/3.png) no-repeat;
  background-size: 200px 150px;
}
.index-board-heigh .index-board-item-inner {
  background: url(../../../assets/images/4.png) no-repeat;
  background-size: 200px 150px;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>