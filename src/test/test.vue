<template>
 <div class="security-code-wrap">
    <!-- <label for="code">
        <ul class="security-code-container">
            <li class="field-wrap" v-for="(item, index) in number" :key="index">
                <i class="char-field">{{value[index] || placeholder}}</i>
            </li>
        </ul>
    </label>
 <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
   id="code" name="code" type="tel" :maxlength="number"
   autocorrect="off" autocomplete="off" autocapitalize="off"> -->
   <div class="header">

   </div>
   <div style="height:1000px;margin-top:57px">
       <p style="font-size:0.28rem;margin:0px">87970970</p>
    </div>
 </div>
</template>
<script>
 export default {
 name: 'SecurityCode',
 // component properties
 props: {
  number: {
  type: Number,
  default: 6
  },
  placeholder: {
  type: String,
  default: ''
  }
 },
 // variables
 data() {
  return {
  value: ''
  }
 },
 methods: {
  hideKeyboard() {
  // 输入完成隐藏键盘
  document.activeElement.blur() // ios隐藏键盘
  this.$refs.input.blur() // android隐藏键盘
  },
  handleSubmit() {
  this.$emit('input', this.value)
  },
  handleInput(e) {
  this.$refs.input.value = this.value
  if (this.value.length >= this.number) {
   this.hideKeyboard()
  }
  this.handleSubmit()
  }
 }
 }
</script>
<style scoped lang="stylus">
.header
    position fixed
    top 0px
    height 57px
    width 100%
    background #ccc
.security-code-wrap 
    overflow: hidden
    margin-top 20px
.security-code-container
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    .field-wrap
        list-style: none;
        display: block;
        border: 1px solid #ccc
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: #fff;
        margin: 2px;
        color: #000;
        .char-field
            font-style: normal
            margin-left 15px
 .input-code
    position: absolute
    left: -9999px
    top: -99999px
    width: 0
    height: 0
    opacity: 0
    overflow: visible
    z-index: -1
</style>