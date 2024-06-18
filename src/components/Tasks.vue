<script>
import { mapGetters, mapActions } from "vuex";


export default {
    methods: {
        ...mapActions(["fetchTasks","deleteTask"]),
        handleDeleteTask(taskId) {
            this.deleteTask(taskId).then(this.fetchTasks())
            // TODO: messaje of the deleted tasks
        },
        editTask(task) {
            console.log(task)
            this.$router.push('/edittask/'+task._id)
        },
        toggleComplete(task) {
            console.log(task)
            //task.completed = !task.completed;
        },
        getPriorityClass(priority) {
            if (priority === 'High') {
                return 'task-priority-high';
            } else if (priority === 'Medium') {
                return 'task-priority-medium';
            } else if (priority === 'Low') {
                return 'task-priority-low';
            }
            return 'task-priority-low';
        },
    },
    computed: mapGetters(["allTasks"]),

    created() {
        this.fetchTasks();
    },
};
</script>

<template>
    <div class="container">
        <h1>Tasks:</h1>
        <div class="new-task-buttons">
            <button @click="()=> this.$router.push('/newtask')">New task</button>
        </div>
        
        <div class="task-list">
            <div class="task-card" v-for="task of allTasks" :key="task._id":class="getPriorityClass(task.priority)">
                <div class="task-header">
                    <div class="task-buttons">
                        <button @click="editTask(task)">Edit</button>
                        <button @click="handleDeleteTask(task._id)">Delete</button>
                        <button @click="toggleComplete(task)">
                            {{ task.completed ? 'Unmark' : 'Complete' }}
                        </button>
                        <h2>{{ task.title }}</h2>
                        <p>{{task.description?.length > 50 ? task.description.substring(0,47)+"...":task.description }}</p>
                    </div>
                </div>
                <div class="task-body">
                    <p>Created at: {{ new Date(task.createdAt).toLocaleString() }}</p>
                    <p>Updated at: {{ new Date(task.updatedAt).toLocaleString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scopeed>
h1 {
    color: gray
}

.task-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.task-card {
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    transition: transform 0.2s;
}

.task-card:hover {
    transform: translateY(-5px);
}

.task-header {
    justify-content: space-between;
    align-items: center;
}

.task-header h2 {
    margin: 0;
    font-size: 1.25em;
    color: #333;
}

.task-buttons button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.task-buttons button:hover {
    background-color: #0056b3;
}

.new-task-buttons button {
    background-color: #ff9900;
    color: rgb(78, 26, 112);
    border: none;
    padding: 5px 10px;
    margin-left: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.new-task-buttons button:hover {
    background-color: #ff9900;
}

.task-body p {
    margin: 5px 0;
    color: #666;
}
.task-priority-high {
    background-color: #ffcccc;
}

.task-priority-medium {
    background-color: #ffffcc;
}

.task-priority-low {
    background-color: #ccffcc;
}
</style>