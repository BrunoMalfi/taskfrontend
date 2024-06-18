import axios from "axios";

const state = {
    tasks: [],
    newTask: { title: '', priority: '', description: '' },
    deletedTask: {},
};

const API_URL = "http://localhost:8080/tasks/";

const getters = {
    allTasks: (state) => state.tasks,
    newTask: (state) => state.newTask,
    deletedTask: (state) => state.deletedTask,
};

const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get(API_URL + "getall");
        commit("setTasks", response.data);
    },
    async createNewTask({ commit }, newTask) {
        const response = await axios.post(API_URL, { ...newTask });
        commit("setNewTask", response.data.task);
    },
    async deleteTask({ commit }, taskId) {
        const response = await axios.delete(API_URL + "delete/" + taskId);
        commit("setDeletedTask", response.data.task);
    },
    async completeTask({ commit }, task) {
        const updatedTask = { ...task, completed: !task.completed };
        const response = await axios.put(`${API_URL}update/${task._id}`, updatedTask);
        commit("updateTask", response.data.task);
    },
};

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    setNewTask: (state, newTask) => (state.newTask = newTask),
    setDeletedTask: (state, deletedTask) => (state.deletedTask = deletedTask),
    updateTask: (state, updatedTask) => {
        const index = state.tasks.findIndex(task => task._id === updatedTask._id);
        if (index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
