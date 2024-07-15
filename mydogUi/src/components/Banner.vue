<template>
  <div class="banner">
    <h1 class="site-name">myDog</h1>
    <Burger class="burger" />
  </div>
</template>

<script>
import Burger from './Burger.vue';

export default {
  components: {
    Burger,
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background-color: #C9E8FC;
  color: white;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.site-name {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.burger {
  width: 90px;
  height: 50px;
 position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
