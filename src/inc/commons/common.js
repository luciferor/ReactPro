//防抖
const ashakExtends = (callback,awaitor)=>{
    let timer = null;// 使用闭包，多次调用都能访问到同一个变量，而不是生成新的变量
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this,arguments);//执行防抖需要执行的回调函数
        }, awaitor);
    }
}

//节流
const throttleExtends = (callback,awaitor)=>{
    let timer = null;//使用闭包
    return function(){
        if(timer) return;
        timer = setTimeout(() => {
            callback.apply(this,arguments);
            timer = null;
        }, awaitor);
    }
}

export {
    ashakExtends,
    throttleExtends
}