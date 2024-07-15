<template>
  <div id="banner">
    <Burger></Burger>
    <img src="@/assets/stock.jpg" alt="Banner Image">
  </div>
  <div id=title>

<h1>myDog</h1>      
    
<h2>Regester Search Recover</h2>

  </div>
</template>

<script>

import Burger from '../components/Burger.vue'
export default {
  name: 'Banner',
  components:{
    Burger
  }
}
</script>

<style scoped>
#title{
  position: absolute;
  top: 50%; 
  left: 70%; 
  bottom:10%;
  transform: translate(-50%, -50%); 
  color: white; 
  text-align: center; 
  z-index: 1001; 
}
#banner {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
}

#banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

nav {
  position: absolute;
  top: 10px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1px;
  font-size: 25px;;
  padding: 10px;
  border-radius: 5px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>