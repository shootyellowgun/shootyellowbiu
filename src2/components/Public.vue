<template>
    <div class="public">
        <ul class="list">
            <li>全部评价</li>
            <li>好评</li>
            <li>差评</li>
            <li>晒单</li>
        </ul>
        <div class="pj" v-for="(item,index) in list" :key="index">
            <h2>{{item.title}}<span>{{item.time}}</span> </h2>
            <img :src="item.img">
            <p>{{item.txt}}</p>
            <span>{{item.txt1}}</span>
        </div>
    </div>
</template>
<script>
import imgs from "../assets/04.jpg";
export default {
    data(){
        return {
            list:[
                {
                    title:"月色天香",
                    time:"2015-10-03 21:47:13",
                    img:imgs,
                    txt:"已经开始喝第二阶段的奶粉了，会继续支持德贝",
                    txt1:"管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务"
                },
                {
                    title:"月色天香",
                    time:"2015-10-03 21:47:13",
                    img:imgs,
                    txt:"已经开始喝第二阶段的奶粉了，会继续支持德贝",
                    txt1:"管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务"
                },
                {
                    title:"月色天香",
                    time:"2015-10-03 21:47:13",
                    img:imgs,
                    txt:"已经开始喝第二阶段的奶粉了，会继续支持德贝",
                    txt1:"管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务"
                },
                {
                    title:"月色天香",
                    time:"2015-10-03 21:47:13",
                    img:imgs,
                    txt:"已经开始喝第二阶段的奶粉了，会继续支持德贝",
                    txt1:"管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务"
                }
            ]
        }
    },
    poprs:["abc"]
    
}
</script>
<style scoped>
.list{
    width: 6.93rem;
    display: flex;
    border-bottom: 1px solid #dddddd;
    margin: 0 auto;
    padding-bottom: .1rem;
}
.list>li{
    flex: 4;
    height: .5rem;
    line-height: .5rem;
    background-color: #999;
    font-size: .3rem;
    text-align: center;
    margin-right: .4rem;
    border-radius: .25rem;
    color: #fff;
    font-size: .28rem;
}
li:nth-child(4){
    margin-right: 0;
}
.pj{
    padding: 0 .3rem .3rem .3rem;
    margin-top: .19rem;
    line-height: .1rem;
    border-bottom: 1px solid #dddddd;
}
.pj>h2{
    color: #ff9900;
    font-size: .3rem;
    margin-bottom: .2rem;
}
.pj>h2>span{
    float:right;
    color: #ff9900;
    font-size: .3rem;
    color: #999999;
    font-size: .2rem;
}
.pj>p{
    font-size: .26rem;
    margin-top: .2rem;
    margin-bottom: .11rem;
    color: #999;
}
.pj>span{
    display: inline-block;
    margin-top: .15rem;
    padding-top: .15rem;
    padding-left: .09rem;
    line-height: .35rem;
    font-size: .26rem;
    width: 6.91rem;
    height: .75rem;
    background-color: #dddddd;
    border-radius: .1rem;
    color: #666;
}
</style>