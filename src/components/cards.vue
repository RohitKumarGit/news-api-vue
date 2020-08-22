<template>
    <div id="app">
        <div class="box">
            <button type="button" v-on:click="change" style="position: absolute; right: 180px;top: 4px;"
                class=" ml-auto btn btn-outline-primary">Change</button>
        </div>
        <div class="cont">
            <div class="news_cont shadow">
                <div class="tag">
                    {{tags[idx]}}
                </div>
                <div class="news_box " v-for="news in news.articles"
                    v-bind:style="'background:url('+news.urlToImage+')'"  v-bind:key="news.urlToImage">
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['newsURL','tags'],
    data(){
        return {
            n:-1,
            idx:0,
            news:"no"
        }
    },
    methods:{
        change:async function(){
           const p = this;
           
            p.n+=1;
            
            
        }
    },
    created(){
        this.n=0;
    },
    watch :{
        n : async function(val){
            const p = this;
            this.idx = val % p.newsURL.length;
            const res =await axios.get(p.newsURL[this.idx]);
            console.log(res.data)
            this.news = res.data
           
            
        }
    }
}
</script>