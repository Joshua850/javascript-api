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
import Component1 from '../components/Component1.vue'
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
  top: 50%; /* Center vertically */
  left: 70%; /* Center horizontally */
  bottom:10%;
  transform: translate(-50%, -50%); /* Adjust for centering */
  color: white; /* Text color */
  text-align: center; /* Center align text */
  z-index: 1001; /* Ensures text is above the image */
}
#banner {
  width: 100%;
  height: 500px; /* Adjust height as needed */
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Ensures the banner stays on top */
}

#banner img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the banner area */
}

nav {
  position: absolute;
  top: 10px; /* Adjust position as needed */
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