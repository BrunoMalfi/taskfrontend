import{createStore} from "vuex";
import count from "./modules/count.js"; 
import todos from "./modules/todos.js"
import tasks from "./modules/tasks.js"
 const sotre = createStore({
    modules:{
        count, 
        todos,
        tasks
    }
 }); 

 export default sotre