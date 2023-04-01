<template>
    <body>
      <h1 class="title">Welcome to Trax</h1>
      <div class="button">
      <router-link class="routerLink" to="/new"><button class="button">Add an Trax Log</button></router-link>
    </div>
      <div v-if="traxs.length">
          <ul  v-for="trax in traxs" :key="trax.id">
              <router-link :to="`/trax/${trax.id}`"><h1>{{ trax.name }}</h1></router-link>
          </ul>
        </div>
      </body>
  </template>
  
  <script>
  export default {
    data() {
      return {
        traxs: []
      }
    },

    mounted() {
      fetch('https://traxbackend.onrender.com/trax')
        .then(response => response.json())
        .then(data => {
          this.traxs = data.map(trax => ({
            id: trax._id,
            name: trax.name,
            meal: trax.meal,
            workout: trax.workout,
            weight: trax.weight,
            notes: trax.notes
          })
          );
        })
    }
  }
  </script>
  
  <style scoped>
  a, .title {
    color: #11005c;
    font-family: 'Courier New', Courier, monospace;
  }
  .button {
    background-image: url("https://static.vecteezy.com/system/resources/thumbnails/002/890/248/small/vintage-coffee-shop-banner-template-with-coffee-beans-drawing-in-line-art-style-isolated-coffee-branch-illustration-on-brown-background-panoramic-coffee-roasting-banner-organic-caffeine-free-vector.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 200px;
    border: none;
    padding: 15px 32px;
    font-size: 16px;
    color: #F3DEBA;
  }
  </style>