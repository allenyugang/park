<template>
  <div id="page">
    <div class="wrap">
      <div class="radio-box">
        <label class="flex-items-center">
          <img v-if="formData.commonCard == 1"
            src="../assets/icon_chose_s@2x.png"
            alt="">
          <img v-else
            src="../assets/icon_chose_n@2x.png"
            alt="">
          <input type="radio"
            v-model="formData.commonCard"
            value="1" />普通车牌
        </label>
        <label class="flex-items-center">
          <img v-if="formData.commonCard == 2"
            src="../assets/icon_chose_s@2x.png"
            alt="">
          <img v-else
            src="../assets/icon_chose_n@2x.png"
            alt="">
          <input type="radio"
            v-model="formData.commonCard"
            value="2" />新能源车牌
        </label>
      </div>
      <div class="card-header">车牌号码：</div>
      <div class="num-box">
        <div class="num0" @click="clickFirstWrap()">
            <span>{{formData.num0}}</span>
        </div>
        <div class="num1" @click="clickKeyWordWrap(1)"><span>{{formData.num1}}</span></div>
        <em class="spot"></em>
        <div class="num1" @click="clickKeyWordWrap(2)"><span>{{formData.num2}}</span></div>
        <div class="num1" @click="clickKeyWordWrap(3)"><span>{{formData.num3}}</span></div>
        <div class="num1" @click="clickKeyWordWrap(4)"><span>{{formData.num4}}</span></div>
        <div class="num1" @click="clickKeyWordWrap(5)"><span>{{formData.num5}}</span></div>
        <div class="num1" @click="clickKeyWordWrap(6)"><span>{{formData.num6}}</span></div>
        <div v-if="formData.commonCard == '2'" class="num1" @click="clickKeyWordWrap(7)"><span>{{formData.num7}}</span></div>
      </div>
    </div>
    <div class="first-word-wrap"
      v-if="firstWrapStatus">
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>京</span>
        </div>
        <div class="word">
          <span>湘</span>
        </div>
        <div class="word">
          <span>津</span>
        </div>
        <div class="word">
          <span>鄂</span>
        </div>
        <div class="word">
          <span>沪</span>
        </div>
        <div class="word">
          <span>粤</span>
        </div>
        <div class="word">
          <span>渝</span>
        </div>
        <div class="word">
          <span>琼</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>翼</span>
        </div>
        <div class="word">
          <span>川</span>
        </div>
        <div class="word">
          <span>晋</span>
        </div>
        <div class="word">
          <span>贵</span>
        </div>
        <div class="word">
          <span>辽</span>
        </div>
        <div class="word">
          <span>云</span>
        </div>
        <div class="word">
          <span>吉</span>
        </div>
        <div class="word">
          <span>陕</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>黑</span>
        </div>
        <div class="word">
          <span>甘</span>
        </div>
        <div class="word">
          <span>苏</span>
        </div>
        <div class="word">
          <span>青</span>
        </div>
        <div class="word">
          <span>浙</span>
        </div>
        <div class="word">
          <span>皖</span>
        </div>
        <div class="word">
          <span>藏</span>
        </div>
        <div class="word">
          <span>闽</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>蒙</span>
        </div>
        <div class="word">
          <span>赣</span>
        </div>
        <div class="word">
          <span>桂</span>
        </div>
        <div class="word">
          <span>鲁</span>
        </div>
        <div class="word">
          <span>宁</span>
        </div>
        <div class="word">
          <span>豫</span>
        </div>
        <div class="word">
          <span>新</span>
        </div>
        <div class="word">
          <span>台</span>
        </div>
      </div>
    </div>
    <div class="keyboard-wrap" v-if="keyBoardStatus === true">
      <!-- <div class="number-wrap"></div>
      <div class="letter-wrap"></div>
      <div class="cn-wrap"></div> -->
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord._1"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord._2"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord._3"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord._4"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord._5"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord._6"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <!-- <span class="bordernone" v-if="activeKeyWordIndex === 1"></span>
          <span class="bordernone" v-if="activeKeyWordIndex === 1"></span> -->
          <!-- <span @click="deleteWord" v-if="activeKeyWordIndex === 1">x</span> -->
      </div>
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord._7"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="delete" @click="deleteWord"><img src="../assets/icon-delete.png" alt=""></span>
      </div>
      <div class="cancel">
        <span @click="cancelkeyBoardStatus">完成</span>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="overlaycontent">
        <van-overlay :show="show" @click="canceloverlay" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        formData: {
            commonCard: '1',
            num0: '',
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: '',
            num6: '',
            num7: ''
        },
        allKeyWord: {
            _1: [1, 2, 3, 4, 5, 6, 7],
            _2: [8, 9, 0],
            _3: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            _4: ['H', 'J', 'K', 'L', 'M', 'N', 'O'],
            _5: ['P', 'Q', 'R', 'S', 'T', 'U', 'V'],
            _6: ['W', 'X', 'Y', 'Z'],
            _7: ['港', '澳', '学', '领', '警','挂']
        },
        activeKeyWordIndex: 1, // 当前车牌号
        keyBoardStatus: false,
        firstWrapStatus: false, // 选择弹窗
        confirmTitle: '',
        submitConfirm: false,
        submitConfirmFalse: false,
        submitConfirmText: '',
        show:false
    }
  },
  mounted () {
  },
  methods: {
    canceloverlay(){
        this.show = false
        this.firstClickStatus = false
        this.firstWrapStatus = false
        this.keyBoardStatus = false
    },
    cancelkeyBoardStatus(){
        this.keyBoardStatus = false
        this.show = false
    },
    clickFirstWrap () {
      // 点击第一个输入框
      this.show = true
      this.firstClickStatus = true
      this.firstWrapStatus = true
      this.keyBoardStatus = false
      this.formData.num0 = ''
    },
    selectFirstWord (event) {
      // 选择省份
      if (event.target.localName !== 'span') {
        return
      }
      this.formData.num0 = event.target.innerText
      this.firstSelectStatus = true
      this.firstWrapStatus = false
      this.firstClickStatus = false
      this.keyBoardStatus = true
      this.activeKeyWordIndex = 1
      // this.$refs.num1.focus()
      // document.getElementById('num1').focus()
    },
    clickKeyBoard (item) { // 点击自定义键盘
      console.log(item)
      this.formData['num' + this.activeKeyWordIndex] = item

      if (this.formData.commonCard === '1') {
        this.activeKeyWordIndex++
        if (this.activeKeyWordIndex > 6) {
          this.keyBoardStatus = false
          this.show = false //输完关闭弹窗
          this.submitFn ()
        }
      } else {
        this.activeKeyWordIndex++
        if (this.activeKeyWordIndex > 7) {
          this.keyBoardStatus = false
          this.show = false //输完关闭弹窗
          this.submitFn ()
        }
      }
    },
    deleteWord () { // 退格
      // console.log(this.activeKeyWordIndex)
      // console.log(this.formData['num' + (this.activeKeyWordIndex - 1)])
      if (this.activeKeyWordIndex > 1) {
        this.formData['num' + (this.activeKeyWordIndex - 1)] = ''
        this.activeKeyWordIndex--
      }
    },
    clickKeyWordWrap (activeKeyWordIndex) {
      this.keyBoardStatus = true
      this.show = true
      this.activeKeyWordIndex = activeKeyWordIndex
      this.formData['num' + this.activeKeyWordIndex] = ''
    },
    submitFn () {
      let plateLicense
      if (this.formData.commonCard === '1') {
        plateLicense = this.plate_license_1
        plateLicense = this.palindrome(plateLicense)
      }
      if (this.formData.commonCard === '2') {
        plateLicense = this.plate_license_2
        plateLicense = this.palindrome(plateLicense)
      }
      let carInfo = new Object()
      carInfo.carNum = plateLicense
      carInfo.carType = this.formData.commonCard
      this.$emit('getPlateLicense',carInfo) //需要传递两个参数 车牌号和类型
      console.log(plateLicense);
    },
    palindrome (str) {
      var arr = str.split('')
      arr = arr.filter(function (val) {
        return (
          val !== ' ' &&
          val !== ',' &&
          val !== '.' &&
          val !== '?' &&
          val !== ':' &&
          val !== ';' &&
          val !== '`' &&
          val !== "'" &&
          val !== '_' &&
          val !== '/' &&
          val !== '-' &&
          val !== '\\' &&
          val !== '' &&
          val !== '(' &&
          val !== ')'
        )
      })
      return arr.join('')
    }
  },
  computed: {
    plate_license_1 () {
      return (
        this.formData.num0 +
        this.formData.num1 +
        this.formData.num2 +
        this.formData.num3 +
        this.formData.num4 +
        this.formData.num5 +
        this.formData.num6
      )
    },
    plate_license_2 () {
      return (
        this.formData.num0 +
        this.formData.num1 +
        this.formData.num2 +
        this.formData.num3 +
        this.formData.num4 +
        this.formData.num5 +
        this.formData.num6 +
        this.formData.num7
      )
    }
  }
}
</script>
<style lang="less" scoped>
.flex-items-center {
  display: flex;
  align-items: center;
}
.wrap {
  height: 5rem;
  padding: 10px 16px;
  background-color: #fff;
  border-radius: 0.5rem;
  .radio-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.7rem;
    text-align: right;
    color: #4a4a4a;
    input[type="radio"] {
      display: none;
    }
    label {
      padding-left: 0.6rem;
      cursor: pointer;
      img {
        width: 0.8rem;
        margin-right: 0.1rem;
      }
    }
  }
  .card-header {
    font-size: 0.65rem;
    margin: 0.2rem 0 0.5rem;
    color: #4a4a4a;
  }
  // input输入框
  .num-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .spot {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: #d8d8d8;
    }
    & > div {
      width: 1.8rem;
      height: 1.8rem;
      border: 1px solid #e4e4e4;
      &.first {
        position: relative;
        text-align: center;
        line-height: 1.7rem;
        font-weight: 200;
        .input-wrap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          &.active {
            z-index: 100;
          }
        }
        em {
          color: #979797;
          font-size: 1.6rem;
          line-height: 1.7rem;
        }
        span {
          display: inline-block;
          width: 100%;
          height: 100%;
          // background-color: #9cbce2;
          color: #828282;
          line-height: 1.8rem;
        }
      }
      &.active {
        border: 1px solid #4a90e2;
        &:after {
          border-bottom: 0.5rem solid #4a90e2;
        }
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        color: #828282;
        &.first {
          background-color: #9cbce2;
          color: #fff;
          text-indent: 0.4rem;
          border-radius: 0;
        }
      }
    }
  }
  .submit-box {
    button {
      width: 100%;
      height: 2.2rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      margin-top: 0.7rem;
      background: linear-gradient(
        320deg,
        rgba(74, 144, 226, 1) 0%,
        rgba(101, 172, 248, 1) 100%
      );
      color: #fff;
    }
  }
  .info {
    font-size: 0.5rem;
    margin-top: 0.9rem;
    color: #828282;
    text-align: left;
    img {
      width: 0.6rem;
      vertical-align: middle;
    }
  }
}
.first-word-wrap {
  // height: 9.4rem;
  background-color: #D2D5DB;
  padding: 0.6rem 0.8rem 1.1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:10000;
  .first-word {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.45rem;
    .word {
      box-sizing: border-box;
      width: 1.8rem;
      height: 1.8rem;
      // border: 1px solid #9cbce2;
      box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
      border-radius: 0.16rem;
      text-align: center;
      &.bordernone {
        border: none;
        box-shadow:none
      }
      span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        color: #000;
        // border: 1px solid #fff;
        border-radius: 0.125rem;
      }
      img {
        width: 1.6rem;
      }
    }
    &:nth-last-of-type(1){
      margin-bottom: 0rem;
    }
  }
}
.keyboard-wrap {
  background-color: #D2D5DB;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  padding: 0.6rem 0.6rem 0.4rem;
  .keyboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    margin-bottom: 0.3rem;
    span {
      text-align: center;
      display: flex;
      width: 1.8rem;
      align-items: center;
      justify-content: center;
      height: 1.8rem;
      margin: 0 0.3rem;
      box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
      background-color: #fff;
      border-radius: 0.125rem;
      &:active {
        background-color: #e4e4e4;
      }
      &.bordernone{
        border: none;
        box-shadow: none;
        background-color: #D2D5DB;
        &:active{
          background-color:#D2D5DB;
        }
      }
      &.delete{
        background-color: #465266;
        img{
          width: 1.15rem;
        }
      }
    }
  }
  .cancel{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.6rem;
      height: 1.8rem;
      background-color: #465266;
      color: #fff;
      border-radius: 0.125rem;
    }
  }
}
.overlaycontent{
    .van-overlay{
        background: rgba(0, 0, 0, 0.5) !important;
    }
}
</style>
