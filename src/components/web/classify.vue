<template>
  <div>
    <h1>我是分类页面</h1>
    <div class="award-box">
      <div>北京PK10第{{ awardPeriod }}期开奖号码 &nbsp;&nbsp;&nbsp; 每日179期，今日剩余123期</div>
      <ul class="award-list">
        <li v-for="(num, index) in awardList" :key='index' :class="['num'+num, 'num']">{{ num }}</li>
      </ul>
    </div>

    <div class="recent-box">
      <ul class="recent-ten">
        <li v-for="(item, index) in recentTen" :key='index'>
          <span class="period-num">{{ item.issue }}：</span>
          <span v-for="(subItem, i) in item.array" :key='i' :class="['num'+subItem, 'num']">{{ subItem }}</span>
        </li>
      </ul>
    </div>

    <div class="statistics-box">
      <h5 style="text-align: left;padding-left: 70px;">第一位</h5>
      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th></th>
            <th>出现次数</th>
            <th>下一局概率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.statistics[0]" :key="index">
            <td> {{ index }} </td>
            <td> {{ item.count }} </td>
            <td> {{ item.rate }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      awardPeriod: '--',
      recentTen: [],
      statistics: {
        '0': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '1': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '2': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '3': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '4': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '5': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '6': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '7': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '8': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        },
        '9': {
          '1': { count: 0, rate: '100%' },
          '2': { count: 0, rate: '100%' },
          '3': { count: 0, rate: '100%' },
          '4': { count: 0, rate: '100%' },
          '5': { count: 0, rate: '100%' },
          '6': { count: 0, rate: '100%' },
          '7': { count: 0, rate: '100%' },
          '8': { count: 0, rate: '100%' },
          '9': { count: 0, rate: '100%' },
          '10': { count: 0, rate: '100%' }
        }
      }
    }
  },
  methods: {
    getNewest() {
      this.$http.get('api/newest', {
        params: {
          code: 'pk10',
          t: +new Date()
        }
      })
      .then((data) => {
        if(data.status == 200) {
          let result = data.data.data;
          this.awardList = result.newest.array;
          this.awardPeriod = result.newest.issue;
          this.data = data.data.data
        }
      })
    },
    getRecent() {
      this.$http.get('api/recent', {
        params: {
          code: 'pk10',
          t: +new Date()
        }
      })
      .then((data) => {
        if(data.status == 200) {
          this.recentTen = data.data.data;
          var result = data.data.data;
          for(var i = 0, len = result.length; i < len; i++) {
            this.recentTen.push(result[i])
          }
          this.stat();
        }
      })
    },
    stat() {
      const dataList = this.recentTen;
      const statistics = this.statistics;
      var item = [],
          subItem = null;
      for(var i = 0, len = dataList.length; i < len; i++) {
        item = dataList[i].array;
        for(var j = 0; j < 10; j++) {
          subItem = statistics[j][item[j]];
          subItem.count++;
          subItem.rate = ((1 - subItem.count / dataList.length).toFixed(2) * 100) + '%';
        }
      }
      console.log(statistics)
    }
  },
  created() {
    // this.getNewest();
    // this.getRecent();
    /* setInterval(() => {
      this.getDate();
    }, 18000000) */
  }
}
</script>

<style lang="scss" scoped>
  .award-box {
    border: 1px solid red;
    // .award-list {
      
    // }
  }
  .recent-box {
    margin-top: 20px;
    border: 1px solid green;
    li {
      margin-top: 5px;
    }
  }
  .num {
    display: inline-block;
    color: #fff;
    width: 38px;
    line-height: 38px;
    font-weight: 800;
    font-size: 18px;
    border-radius: 4px;
    margin: 0 2px;
  }
  .num1 { background-color: #e6de00; }
  .num2 { background-color: #0092dd; }
  .num3 { background-color: #4b4b4b; }
  .num4 { background-color: #ff7600; }
  .num5 { background-color: #17e2e5; }
  .num6 { background-color: #5234ff; }
  .num7 { background-color: #bfbfbf; }
  .num8 { background-color: #ff2600; }
  .num9 { background-color: #780b00; }
  .num10 { background-color: #07bf00; }
</style>
