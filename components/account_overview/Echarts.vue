<template>
  <div id="box">
    <div class="box" ref="box"></div>
  </div>
</template>

<script>

import * as echarts from 'echarts';
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.getBar();
  },
  methods: {
    getBar() {
      //1.实例化echarts
      let ec = echarts.init(this.$refs.box);
      let option = {
        title: {
          text: '100%',
          left: 'center',
          top: 'center',
  },
        series: [
          {
            name: "内圈",
            type: "pie",
            radius: ["30%", "80%"],
            hoverAnimation:false,
            data:[
                {name:"Glod Bars",value:1753.12},
            ],
          label: {
              show:false,
              /* position: "center", */
              /* color:"yellow", */
              /* formatter:(v)=>{
                console.log(v);
                return `${v.name}\n${v.value}(${v.percent}%)`
              } */
            },
            itemStyle:{
              normal:{
                color:function(colors){
                  var colorList = [
                    '#ffc107'
                  ];
                  return colorList[colors.dataIndex];
                }
              }
            },
          }
        ],
        //鼠标悬浮提示
        tooltip:{
              trigger:'item',
              formatter:"{b}<br>{c}({d}%)",
            },
      };
      ec.setOption(option);
    },
  },
};
</script>

<style scoped>
#box{
  width: 435px;
  height: 380px;
}
.box{
    width:400px;
    height:400px;
    margin-top:100px;
    margin-left:-100px;
}
</style>
