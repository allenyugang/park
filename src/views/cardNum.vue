<template>
  <div style="margin-top:10px">
    <van-cell value="停车费" is-link>
      <template #title>
        <span class="custom-title">缴费项目</span>
      </template>
    </van-cell>
    <van-cell value="XXXX停车场">
      <template #title>
        <span class="custom-title">收费单位</span>
      </template>
    </van-cell>
    <carNumber @getPlateLicense="getPlateLicense"></carNumber>
    <div style="margin-top:20px;padding:0px 16px" class="numsubmit">
      <van-button style="width:100%;border-radius:4px;color:#ffffff" @click="submitCarnum">下一步</van-button>
    </div>
  </div>
</template>
<script>
import carNumber from '@/components/carNumber.vue'
import { Toast } from 'vant';
export default {
  name: 'App',
  data(){
    return{
      carNum:'',
      carType:'',
      status:false
    }
  },
  components: {
    carNumber
  },
  methods:{
    getPlateLicense(data){
      this.carNum = data.carNum
      this.carType = data.carType
      console.log('组件传出的data',data)
    },
    submitCarnum(){
      if(this.carType == 1){
        if(this.carNum.length < 7 ){
          Toast('请输入正确的车牌号')
          this.status=false
        }else{
          this.status=true
        }
      }else if(this.carType == 2){
        if(this.carNum.length < 8) {
          Toast('请输入正确的车牌号')
           this.status=false
        }else{
           this.status=true
        }
      }
      if(this.status == true){
        // Toast("输入正确")
        this.$router.push('/index')
      }else{
        if(this.carNum == ''){
          Toast('请输入车牌号')
        }
      }
    }
  }
}
</script>
<<style>
.numsubmit .van-button__text{
  font-size:0.6rem;
}
.numsubmit .van-button{
  background:#008cdd !important
}
</style>