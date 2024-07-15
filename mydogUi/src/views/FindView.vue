<template>
  <div class="page-container">
    <Banner />
    <div class="data-fetcher">
      <h2>Fetched Dog Data</h2>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <ul v-if="!loading && !error" class="dog-list">
        <li v-for="dog in data" :key="dog._id" class="dog-item">
          <div class="dog-info">
            <h3 class="dog-name">{{ dog.name }}</h3>
            <p class="dog-age">Age: {{ dog.age }}</p>
            <p class="dog-breed">Breed: {{ dog.breed }}</p>
            <p class="dog-contact">Contact: {{ dog.contact }}</p>
            <img v-if="dog.image" :src="'data:' + dog.image.contentType + ';base64,' + dog.image.data.toString('base64')" alt="Dog Image" class="dog-image" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  components: {
    Banner,
  },
  data() {
    return {
      data: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        this.data = result; 
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false; 
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.banner {
  width: 100%;
}

.data-fetcher {
  width: 1000px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.loading {
  color: #888;
  font-style: italic;
}

.error {
  color: red;
  font-weight: bold;
}

.dog-list {
  list-style-type: none; 
  padding: 0;
}

.dog-item {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.dog-item:hover {
  transform: translateY(-3px);
}

.dog-info {
  text-align: center; 
}

.dog-name {
  font-size: 1.8em;
  color: #2c3e50;
  margin: 0 0 10px;
}

.dog-image {
  width: 150px; 
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

.dog-age,
.dog-breed,
.dog-contact {
  color: #555;
  margin: 5px 0; 
  font-size: 1em; 
}
</style>
