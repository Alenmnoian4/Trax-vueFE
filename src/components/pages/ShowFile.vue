<template>
    <div class="mainShow">
       
        <h1 class="text">The Show Page</h1>
        <div v-if="trax">
            <h1 class="text">{{ trax.name }}</h1>
            <h1 class="text">{{ trax.meal }}</h1>
            <h1 class="text">{{ trax.workout }}</h1>
            <h1 class="number">{{ trax.weight }}</h1>
            <h1 class="text">{{ trax.notes }}</h1>
        </div>
        <div class="button">
        <router-link :to="`/edit/${trax._id}`"><button class="text">Edit Trax Log</button></router-link>
        <button @click="deleteTrax" class="text">Delete Trax Log</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'traxShowPage',
    data() {
        return {
            trax: null
        };
    },
    //show page
    created() {
        const id = this.$route.params.id;
        fetch(`https://traxbackend.onrender.com/trax/${id}`)
        .then(response => response.json())
        .then(data => {
            this.trax = data;
        })
    },
    // Delete route
    methods: {
        deleteTrax() {
            const id = this.$route.params.id;
            if (confirm("Are you sure you want to delete this trax log?")) {
                fetch(`https://traxbackend.onrender.com/trax/${id}`, {
                    method: 'DELETE'
                })
                // Redirects to main 
                .then(response => {
                    if (response.ok) {
                        this.$router.push("/trax/");
                    } else {
                        throw new Error("Error");
                    }
                })
            }
        }
    }
}
</script>


<style>
a {
  text-align: center;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 3px solid #1a037e;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
.mainShow {
    margin: 5px;
    padding: 3px;
    border-radius: 4px;
    font-size: 18px;
}
</style>