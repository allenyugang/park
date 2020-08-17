<template>
    <div class="index">
        <van-nav-bar
        title="ETC缴费"
        class="indexpay"
        />
        <div class="index_all">
            
        </div>
        <div class="index_titlecontent" style="padding:0px 15px;position:relative;">
            <div style="width:93%;height:180px;border-radius:4px;background:#ffffff;position:absolute;top:-80px;box-shadow: 1px 1px 15px #888888;">
                <p style="text-align:center;font-size:0.42rem;font-weight:700;margin:0px;padding-top:20px">￥98.00</p>
                <p style="text-align:center;font-size:0.28rem;font-weight:500;margin:0px;padding-top:2px">本次收费</p>
                <p style="text-align:left;font-size:0.28rem;font-weight:500;margin:0px;padding-top:44px;padding-left:20px">ETC卡号：2738627462378</p>
                <p style="text-align:left;font-size:0.28rem;font-weight:500;margin:0px;padding-top:5px;padding-left:20px">车牌号：浙ACH876</p>
                <p></p>
            </div>
        </div>
        <div class="index_titledetail" style="padding:0px 15px;position:relative;">
            <div style="margin-top:32%;height:125px;border-radius:4px;background:#ffffff;box-shadow: 1px 1px 15px #888888;padding:25px 20px">
                <div class="vant-flex">
                    <div class="vant-flex__item" style="position:relative">
                        <p style="margin:0px;position:absolute;top:0px;left:0px;width:40px;height:40px;border-radius:50%;background:#FF8921;color:#ffffff;line-height:40px;text-align:center;font-size:0.32rem">入</p>
                        <p style="margin:0px;margin-left:50px;font-size:0.24rem">进场时间：2020-08-07 09：54</p>
                        <p style="margin:0px;margin-left:50px;margin-top:5px;font-size:0.24rem">收费场编号：252554</p>
                    </div>
                    <div>
                        <p style="text-align:right;margin:0px;margin-top:10px;font-size:0.28rem">东入口</p>
                    </div>
                </div>
                <div class="vant-flex" style="margin-top:40px">
                    <div class="vant-flex__item" style="position:relative">
                        <p style="margin:0px;position:absolute;top:0px;left:0px;width:40px;height:40px;border-radius:50%;background:#E56B56;color:#ffffff;line-height:40px;text-align:center;font-size:0.32rem">出</p>
                        <p style="margin:0px;margin-left:50px;font-size:0.24rem">出场时间：2020-08-07 09：54</p>
                        <p style="margin:0px;margin-left:50px;margin-top:5px;font-size:0.24rem">收费场编号：252554</p>
                    </div>
                    <div>
                        <p style="text-align:right;margin:0px;margin-top:10px;font-size:0.28rem">西出口</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index_titledetail" style="padding:0px 15px;position:relative;margin-top:40px">
            <van-button @click="apply" style="background:#E56B56;color:#ffffff;width:100%;height:50px;border-radius:4px;font-size:0.32rem;">立即缴费</van-button>
        </div>
    </div>
</template>

<script>
import {getapply,getdetail} from '../serve/indexserve'
import {phone} from '../utils/check'
import { Toast } from 'vant';
export default {
    name: 'Index',
    data(){
        return{
            list:[],
            value:'',
            active:"1",
            moreshow:true,
            personmoreshow:true,
            othershow:false,
            personothershow:false,
            personarrowdirection:'',
            arrowdirection:'',
            persondetailshow:false,
            detailshow:false,
            //企业信息
            buyername:"",
            taxnum:'',
            phone:'',
            email:'',
            address:'',
            telephone:'',
            account:'',
            remark:'',
            //个人信息
            personbuyername:"",
            persontaxnum:'',
            personphone:'',
            personemail:'',
            personaddress:'',
            persontelephone:'',
            personaccount:'',
            personremark:'',
            //订单号
            orderId:'',
            totalPrice:'',
            pricelist:''
        }
    },
    methods:{
        more(){
            if(this.moreshow == true){
               this.moreshow = !this.moreshow
               this.othershow = !this.othershow
            }
        },
        personmore(){
            if(this.personmoreshow == true){
               this.personmoreshow = !this.personmoreshow
               this.personothershow = !this.personothershow
            }
        },
        close(){
            if(this.moreshow == false){
               this.moreshow = !this.moreshow
               this.othershow = !this.othershow
            }
        },
        personclose(){
            if(this.personmoreshow == false){
               this.personmoreshow = !this.personmoreshow
               this.personothershow = !this.personothershow
            }
        },
        detail(){
            this.arrowdirection == '' ? this.arrowdirection = 'down' : this.arrowdirection = ''
            this.arrowdirection == '' ? this.detailshow = false : this.detailshow = true
        },
        persondetail(){
            this.personarrowdirection == '' ? this.personarrowdirection = 'down' : this.personarrowdirection = ''
            this.personarrowdirection == '' ? this.persondetailshow = false : this.persondetailshow = true
        },
        //申请开票
        apply(){
            let params=""
            console.log(this.active)
            var url = this.UrlDecode(window.location.href)
            this.getdecodeUrl(url)
            if(this.active == '1'){
                params = {
                    o:this.orderId,
                    accountType:this.active,
                    buyername:this.buyername,
                    taxnum:this.taxnum,
                    phone:this.phone,
                    email:this.email,
                    address:this.address,
                    telephone:this.telephone,
                    account:this.account,
                    remark:this.remark
                }
            }else{
                params = {
                    o:this.orderId,
                    accountType:this.active,
                    buyername:this.personbuyername,
                    taxnum:this.persontaxnum,
                    phone:this.personphone,
                    email:this.personemail,
                    address:this.personaddress,
                    telephone:this.persontelephone,
                    account:this.personaccount,
                    remark:this.personremark
                }
            }
            if(this.check(params)){
                const toast = Toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message:"正在申请开票，请稍后...",
                    loadingType: 'spinner',
                });
                getapply(params).then((res)=>{
                    if(res.code == '200'){
                        toast.clear()
                        Toast(res.message)
                    }else{
                        toast.clear()
                        Toast(res.message)
                    }
                }).catch((error)=>{
                    toast.clear()
                    Toast('服务出现故障，请稍后再试')
                })
            }
        },
        check(params){
            if(params.buyername == ''){
                Toast('请输入抬头')
                return false
            }else if(params.taxnum == '' && this.active=='1'){
                Toast('请输入税号')
                return false
            }else if(params.phone == ''){
                Toast('请输入手机号')
                return false
            }else if(params.phone == ''){
                Toast('请输入手机号')
                return false
            }else if(!phone(params.phone)){
                Toast('请输入正确手机号')
                return false
            }else if(params.email.length>80){
                Toast('请输入正确邮箱')
                return false
            }else if(params.address.length>300){
                Toast('请输入正确地址')
                return false
            }else if(params.telephone.length>30){
                Toast('请输入电话')
                return false
            }else if(params.account.length>200){
                Toast('请输入开户行')
                return false
            }else if(params.remark.length>300){
                Toast('请输入正确备注')
                return false
            }else{
                return true
            }
        },
        //获取详情
        __getdetail(value){
            getdetail({o:value}).then((res)=>{
                if(res.code == '200'){
                    let price_list = []
                    this.pricelist = res.data
                    res.data.forEach((item)=>{
                        price_list.push(parseFloat(item.price))
                    })
                    this.totalPrice = this.sum(price_list)
                }else{
                    Toast(res.message)
                }
            }).catch((error)=>{
                Toast('请求链接有误')
            })
        },
        sum(arr) {
            return arr.reduce(function(prev, curr, idx, arr){
                return prev + curr;
            });
        },
        asc2str(ascasc){
            return String.fromCharCode(ascasc)
        },
        UrlDecode(str){
            var ret=""
            for(var i=0;i<str.length;i++){
                var chr = str.charAt(i)
                if(chr == "+"){
                    ret+=" "
                }else if(chr=="%"){
                    var asc = str.substring(i+1,i+3)
                    if(parseInt("0x"+asc)>0x7f){
                        ret+=this.asc2str(parseInt("0x"+asc+str.substring(i+4,i+6)))
                        i+=5
                    }else{
                        ret+=this.asc2str(parseInt("0x"+asc))
                        i+=2
                    }
                }else{
                    ret+= chr
                }
            }
            return ret;
        },
        getdecodeUrl(url){
            if(url.indexOf('?') != -1){
                let spliturl = url.split('?')
                if(spliturl[1].indexOf('&') != -1){
                    let spliturlone = spliturl[1].split('&')
                    let spliturltow = spliturlone[0]
                    let spliturlthree = spliturltow.split('=')
                    this.orderId = spliturlthree[1]
                }else{
                    let urlone = spliturl[1]
                    let urltwo = urlone.split('=')
                    this.orderId = urltwo[1]
                }
            }
        }    
    },
    mounted(){
        // var url = window.location.href
        // this.getdecodeUrl(url)
        // this.__getdetail(this.orderId)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../common/app.styl';
.index
    font-size $text_16
    position relative
    .indexpay
        background #333333
        .van-ellipsis
            color #ffffff
            font-size $text_34
            font-weight 600
    .van-hairline--bottom::after
        border-bottom-width 0px !important
    .index_all
        height 80px
        background #333333
</style>
