<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment Count</button>
      <button @click="decrement">Decrement Count</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      increment() {
        this.$store.commit("increment");
      },
      decrement() {
        this.$store.commit("decrement");
      },
    },
    computed: {
      count() {
        return this.$store.state.count.count;
      },
    },
  };
  </script>
  