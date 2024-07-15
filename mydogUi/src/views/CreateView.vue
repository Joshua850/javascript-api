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
  justify-content: center; /* Center elements horizontally */
  align-items: flex-start; /* Align elements at the start vertically */
  padding: 20px; /* Add some padding */
}

.form-container {
  margin-right: 20px; /* Space between the form and burger */
}

.burger {
  /* Ensure the burger is visible */
  width: 90px; /* Set a fixed width */
  height: 50px; /* Set a fixed height */
  background-color: #007bff; /* Set a background color */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px; /* Add rounded corners */
  cursor: pointer; /* Change cursor to pointer */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add some shadow */
}
</style>
