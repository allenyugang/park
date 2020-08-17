const app = {
    state:{
        prodInfo:window.localStorage['prodInfo'] || '',//用户新增 1 用户修改 2
        userId:window.localStorage['userId'] || '',//用户帐号
        vistordetail:window.localStorage['vistordetail'] || '',//用户新增 1 用户修改 2
        userInfo:window.localStorage['userInfo'] || '',
    },
    mutations:{
        PRODINFO: (state,prodInfo)=>{
            state.prodInfo = prodInfo
            window.localStorage.setItem('prodInfo',prodInfo)
        },
        USERID: (state,userId)=>{
            state.userId = userId
            window.localStorage.setItem('userId',userId)
        },
        VISTORDETAIL: (state,vistordetail)=>{
            state.vistordetail = vistordetail
            window.localStorage.setItem('vistordetail',vistordetail)
        },
        USERINFO: (state,userInfo)=>{
            state.userInfo = userInfo
            window.localStorage.setItem('userInfo',userInfo)
        },
    },
    actions:{
        getprodInfo({commit},prodInfo){
            commit('PRODINFO',prodInfo)
        },
        getuserId({commit},userId){
            commit('USERID',userId)
        },
        getvistordetail({commit},vistordetail){
            commit('VISTORDETAIL',vistordetail)
        },
        getuserInfo({commit},userInfo){
            commit('USERINFO',userInfo)
        },
    }
}
export default app