<template>
    <div class="banner" @click="goHome">
      <h1 class="site-name">myDog</h1>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .banner {
    background-color: #007bff; 
    color: white;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .banner:hover {
    background-color: #0056b3; /
  }
  
  .site-name {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
  </style>