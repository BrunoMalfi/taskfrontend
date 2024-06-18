<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        methods:{
            ...mapActions(["getTask","updateTask","fetchTasks"]),
            submitForm() {
                console.log('send form', this.task)
                this.updateTask(this.task).then(()=> this.fetchTasks())
                this.$router.push('/tasks')
            }
        },
    
    computed: mapGetters(["task"]),
    created() {
        this.getTask(this.$route.params.id);
    },
    }
</script>
<template>
    <div class="new-task-form">
      <h2>Update Task</h2>
      
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="task.title" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="task.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="priority">Priority:</label>
          <select id="priority" v-model="task.priority" required>
            <option value="" disabled>Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  </template>

<style scoped>
.new-task-form {
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 400px;
    margin: 20px auto;
  }
  
.new-task-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>