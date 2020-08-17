export const phone = (value) => {
    var length = value.length
    var regPhone = /^1([3469578]\d|4[59])\d{8}$/  
    return  length == 11 && regPhone.test( value )
}
export const showtime= (data)=> {
    var nowtime = new Date(),  //获取当前时间
        endtime = new Date(data);  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
    return leftd + "天" + lefth + "时" + leftm + "分" + lefts +"秒";  //返回倒计时的字符串
}
/**
 * 
 * @param {检错的key值} key 
 * @param {Window.location.search} Url 
 */
export const getSearchString=(key,Url) =>{
    var str = Url
    str = str.substring(1,str.length)
    var arr = str.split("&")
    var obj = new Object()
    for(var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=")
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1])
    }
    return obj[key]
}