<template>
    <div class="mainTrax">
 
      <h1 class="text">Add a New Trax Log</h1>
      <div class="button">
      <form @submit.prevent="createTrax">
        
          <label for="name" class="text">Name:</label>
          <input 
            type="text" 
            name="name" 
            v-model="traxName"><br/>
       
          <label for="meal" class="text">Meal:</label>
          <input 
            type="text" 
            name="meal" 
            v-model="traxMeal"><br/>
       
          <label for="workout" class="text">Workout:</label>
          <input 
            type="text" 
            name="workout" 
            v-model="traxWorkout"><br/>

          <label for="weight" class="number">weight:</label>
          <input 
            type="number" 
            name="weight" 
            v-model="traxWeight"><br/>  

          <label for="notes" class="text">Notes:</label>
          <input 
            type="text" 
            name="notes" 
            v-model="traxNotes"><br/>
   
        <button type="submit" class="text">Create</button>
      </form>
    </div>
    </div>
</template>
  
<script>

  export default {
  data() {
    return {
      traxName: '', traxMeal: '', traxWorkout: '', traxWeight: '', traxNotes: '', traxs: []
    }
  },
  methods: {
    createTrax() {
      fetch('https://traxbackend.onrender.com/trax', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.traxName,
          meal: this.traxMeal,
          workout: this.traxWorkout,
          weight: this.traxWeight,
          notes: this.trax.Notes
        })
      })
      .then(response => response.json())
      .then(data => {
        
        this.traxName = '';
        this.traxMeal = '';
        this.traxWorkout = '';
        this.traxWeight = '';
        this.traxNotes = '';
        
        this.traxs.push(data);
        this.$router.push('/trax/');
      })
      .then((response) => {
          if (response.ok) {
            this.$router.push(`/trax/`);
          } else {
            throw new Error("Error.");
          }
        })
    }
  }
}
</script>

<style>
body {
  background-color: #ddc8ba;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 3px solid #1a037e;
  text-align: center;
}
label {
  display: inline-block;
  width: 150px;
  text-align: right;
}
</style>