<template>
    <div class="traxMain">
      <h2>Edit Exercise</h2>
      <div class="button">
      <form @submit.prevent="submitForm">
        <label for="name" class="text">Name:</label>
        <input type="text" id="name" v-model="trax.name" /><br/>
        <label for="meal" class="text">Meal:</label>
        <input type="text" id="meal" v-model="trax.meal" /><br/>
        <label for="workout" class="text">Workout:</label>
        <input type="text" id="workout" v-model="trax.workout" /><br/>
        <label for="weight" class="text">Weight:</label>
        <input type="text" id="weight" v-model="trax.weight" /><br/>
        <label for="notes" class="text">Notes:</label>
        <input type="text" id="notes" v-model="trax.notes" /><br/>
        <button type="submit">Edit Exercise</button>
      </form>
    </div>
    </div>
  </template>
<script>
    export default {
        name: "TraxEdit",
        data() {
            return {
                trax: null,
            }
    },
    created() {
        const id = this.$route.params.id
        fetch(`https://traxbackend.onrender.com/trax/${id}`)
            .then(response => response.json())
            .then(data => {
                this.trax = data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        submitForm() {
            const id = this.$route.params.id;
            const formData = {
                name: this.trax.name,
                meal: this.trax.meal,
                workout: this.trax.workout,
                weight: this.trax.weight,
                notes: this.trax.notes
            };
            fetch(`https://traxbackend.onrender.com/trax/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    this.$router.push(`/trax/${id}`);
                } else {
                    throw new Error("Error updating")
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