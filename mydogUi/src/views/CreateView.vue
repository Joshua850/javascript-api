<template>
  <div class="createADog">
    <Banner class="banner" />
    <div class="content">
      <div class="form-container">
        <Create />
      </div>
    </div>
  </div>
</template>

<script>

import Burger from '../components/Burger.vue';
import Banner from '../components/Banner.vue';
import Create from '../components/Create.vue';


export default {
  components: {
    Create,
    Burger,
    Banner,
  },
};
</script>

<style scoped>
.createADog {
  
}

.banner {
  width: 100%; /* Make the banner full-width */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}



</style>
