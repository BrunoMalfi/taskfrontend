  
  <script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    //   data() {
    //     return {
    //         newTask: {
    //             title: '',
    //             description: '',
    //             priority: '',
    //         },
    //     };
    // },
    methods: {
        ...mapActions(["createNewTask"]),
        submitForm() {
        console.log('send form', this.newTask)
        // Clear the form
        //this.newTask.title = '';
        //this.newTask.description = '';
        //this.newTask.priority = '';
        this.createNewTask(this.newTask)
        this.$router.push('/tasks')

        
      },
    },
    computed: mapGetters(["newTask"]),
};
  </script>

  <template>
      <div class="new-task-form">
        <h2>Create a New Task</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="newTask.title" required />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="newTask.description" required></textarea>
          </div>
          <div class="form-group">
            <label for="priority">Priority:</label>
            <select id="priority" v-model="newTask.priority" required>
              <option value="" disabled>Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit">Create Task</button>
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
  