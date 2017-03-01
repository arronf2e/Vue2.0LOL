<template>
  <div>
    <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul>
  </div>
</template>

<script>
import axios from 'axios'
const TOKEN = {
  "DAIWAN-API-TOKEN": "F4E9C-448AB-2BF93-4E988"
}
export default {
  name: 'hello',
  data () {
    return {
      list: [1,2,3,4,5,6,7,8,9,10,20,21,22,23,24,25,26,27],
      loading: true
    }
  },
  methods: {
    loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  display: block;
  padding: 10px 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
