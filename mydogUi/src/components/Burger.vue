<template>
    <div id="burgerDrop">
      <div class="burger" @click="toggleMenu">
        <div :class="['line', { active: isOpen }]"></div>
        <div :class="['line', { active: isOpen }]"></div>
        <div :class="['line', { active: isOpen }]"></div>
      </div>
      <nav v-if="isOpen" class="nav-menu">
       
        <router-link to="/create" @click="toggleMenu">Create</router-link>
        <router-link to="/" @click="toggleMenu">Home</router-link>
        <router-link to="/find" @click="toggleMenu">Find</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .burger {
    padding:20px;
    position: absolute;
    right: 20px; /* Adjust position */
    cursor: pointer;
    z-index: 1002; /* Ensure it’s above the menu */
  }
  
  .line {
    width: 30px;
    height: 4px;
    background: white;
    margin: 5px;
    transition: 0.3s;
  }
  
  .line.active:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .line.active:nth-child(2) {
    opacity: 0;
  }
  
  .line.active:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  
  .nav-menu {
    position: absolute;
    top: 60px; 
    right: 120px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1001;
    transition: transform 0.3s ease;
    transform: translateX(100%);
  }
  
  .nav-menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-menu a:hover {
    text-decoration: underline;
  }
  
 
  .nav-menu.active {
    transform: translateX(0); 
  }
  
  .close {
    cursor: pointer;
    color: white;
    text-align: right;
  }
  </style>
  