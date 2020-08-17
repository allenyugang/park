<template>
    <div class="index">
        <div style="padding:0px 16px;">
            <div class="text-center" style="padding:20px 0px">
                <p style="margin:0px;font-size:1.7rem">15.00元</p>
                <p style="margin:0px;margin-top:4px;font-size:0.7rem">应付金额</p>
            </div>
        </div>
        <div>
            <van-cell-group>
                <van-cell title="缴费商户" value="XXXX停车场" />
                <van-cell title="缴费项目" value="停车费" />
                <van-cell title="车牌号" :value="carNum" />
                <van-cell title="账单支付截止日期" value="2020-08-11"/>
                <van-cell>
                    <template #title style="position:relative">
                        <span class="custom-title">账单备注</span>
                        <span class="text-right" style="position:absolute;right:16px;top:10px;color:#969799">车辆【浙A99999】暂无待缴费记录!!!</span>
                    </template>
                </van-cell>
                <!-- <van-cell title="账单备注" value="车辆【浙A99999】暂无待缴费记录!!!" /> -->
            </van-cell-group>
        </div>
        <div style="margin-top:20px;padding:0px 16px" class="paysubmit">
            <van-button style="width:100%;border-radius:4px;color:#ffffff" @click="submitpay">缴费</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            carNum:"浙A99999"
        }
    },
    methods:{
        submitpay(){
            
        }
    }
}
</script>
<style>
.paysubmit .van-button__text{
  font-size:0.6rem;
}
.paysubmit .van-button{
  background:#008cdd !important
}
</style>