<template>
    <cards :newsURL="newsURL" :tags="tags"></cards>
</template>
<script>
import cards from '@/components/cards.vue'
export default {
    components:{
        cards
    },
    data(){
        return {
              newsURL:["https://newsapi.org/v2/top-headlines?country=us&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?q=trump&apiKey=921c834598874e29956fdc23d1ececbc","https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=921c834598874e29956fdc23d1ececbc"],
               tags:["US NEWS","BBC NEWS","TRUMP NEWS","GERMANY NEWS"],
        }
    }
}
</script>