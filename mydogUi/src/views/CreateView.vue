<template>
  <div class="createADog">
    <div class="form-container">
      <Component1 />
    </div>
    <Burger class="burger" />
  </div>
</template>

<script>
import Component1 from '../components/Component1.vue';
import Burger from '../components/Burger.vue';

export default {
  components: {
    Component1,
    Burger,
  },
};
</script>

<style scoped>
.createADog {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  padding: 20px; 
}

.form-container {
  margin-right: 20px; 
}

.burger {
  width: 90px;
  height: 50px; 
  background-color: #007bff; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px; 
  cursor: pointer; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
}
</style>
