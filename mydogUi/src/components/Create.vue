<template>
  <div class="background">
    <div class="create-post">
      <h2>Create a Dog Posting</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="formData.age" required />
        </div>

        <div class="form-group">
          <label for="breed">Breed:</label>
          <input type="text" id="breed" v-model="formData.breed" required />
        </div>

        <div class="form-group">
          <label for="contact">Contact Number:</label>
          <input type="tel" id="contact" v-model="formData.contact" required />
        </div>

        <button type="submit" class="submit-button">Submit</button>
      </form>

      <div v-if="submitted" class="confirmation">
        <p>Your posting has been created successfully!</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        age: '',
        breed: '',
        contact: '',
      },
      submitted: false,
    };
  },
  methods: {
    async handleSubmit() {
      const jsonData = {
        name: this.formData.name,
        age: this.formData.age,
        breed: this.formData.breed,
        contact: this.formData.contact,
      };

      try {
        const response = await axios.post('http://localhost:3000/api/data', jsonData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          this.submitted = true;
          this.resetForm();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    resetForm() {
      this.formData = {
        name: '',
        age: '',
        breed: '',
        contact: '',
      };
    },
  },
};
</script>

<style scoped>
.background {
  background-color: rgba#C9E8FC;
  min-height: 100%; 
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center; 
}

.create-post {
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
 
  min-width: 80%; 
  margin: 50px auto;
}

h2 {
  margin-bottom: 20px;
  color: #1e90ff;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="number"],
input[type="tel"] {
  width: 100%;
  padding: 15px;
  border: 1px solid #007bff;
  border-radius: 8px;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus {
  border-color: #0056b3;
  outline: none;
}

.submit-button {
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  width: 20%;
}

.submit-button:hover {
  background-color: #0056b3;
}

.confirmation {
  margin-top: 20px;
  color: #28a745;
  text-align: center;
  font-weight: bold;
}
</style>

