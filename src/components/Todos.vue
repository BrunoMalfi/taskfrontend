  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
      methods: {
          ...mapActions(["fetchTodos"]),
        },
        computed: mapGetters(["allTodos"]),
        
        created() {
      this.fetchTodos();
    },
};
  </script>
  
<template>
    <div>
      <div v-for="todo of allTodos" :key="todo.id">
        {{ todo.title }}
      </div> 
    </div>
  </template>