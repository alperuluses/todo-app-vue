<template>

    <div class="d-flex flex-column align-items-center justify-content-center">
        <div>
            <h1 class="title">
                {{ title }}
            </h1>
        </div>
        <div class="glass-show">
            <form>
                <input @keyup="onInput" placeholder="Write and wait...">
            </form>
            <ul>
                <li class="d-flex justify-content-between align-items-center" v-for="todo in todos" :key="todo.id"
                    :id="`todo-item_${todo.id}`">
                    <span :class="{ 'text-decoration-overline': !todo.status }">{{ todo.text }}</span>
                    <div class="d-flex">
                        <button class="btn  mx-10"
                            :class="{ 'btn-check': todo.status, 'btn-cancel': todo.status == false }"
                            @click="todoFinish(todo.id)">
                            <font-awesome-icon v-if="todo.status" icon="fa-solid fa-check" />
                            <font-awesome-icon v-else icon="fa-solid fa-ban" />
                        </button>
                        <button class="btn btn-delete" @click="removeTodo(todo.id)">
                            <font-awesome-icon icon="fa-solid fa-trash" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <message-use severity="success" :closable="false">Tamamlanan Sayısı {{ finishedCount }}</message-use>
            <message-use severity="error" :closable="false">Tamamlanmayan Sayısı {{ unFinishedCount }}</message-use>
        </div>

    </div>

</template>

<script>
let id = 0;
export default {
    name: "TodoList",
    props: {
        title: String
    },
    data() {
        return {
            newTodo: '',
            newSet: null,
            preventTime: 1500,
            todos: [
                { id: id++, text: 'Learn HTML', status: true },
                { id: id++, text: 'Learn Css', status: true },
                { id: id++, text: 'Learn JavaScript', status: true },
                { id: id++, text: 'Learn Php', status: false },
                { id: id++, text: 'Learn Git', status: true },
                { id: id++, text: 'Learn Vue', status: true }
            ]

        }
    },
    methods: {
        onInput(e) {
            this.clearTime(this.newSet)
            this.newSet = setTimeout(() => {
                this.addTodo(e.target.value)
                e.target.value = null;
            }, this.preventTime)
        },
        clearTime(timeOutName) {
            clearTimeout(timeOutName)
        },
        addTodo(newTodoText) {
            this.newTodo = {
                id: id++,
                text: newTodoText,
                status: true
            }
            this.todos.push(this.newTodo)
            this.newTodo = '';
            this.openToast("success", "Başarılı", "Başarılı olarak eklendi")
        },
        todoFinish(todo) {
            this.todos = this.todos.map((v) => {
                if (v.id === todo) {
                    return { ...v, status: !v.status };
                } else {
                    return { ...v }
                }
            })
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((v) => {
                return todo != v.id;
            })
            this.openToast("success", "Başarılı", "Başarılı olarak silindi")
        },
        openToast(severity, summary, detail, time = 2000) {
            return this.$toast.add({ severity: severity, summary: summary, detail: detail, life: time });
        }
    },
    computed: {
        finishedCount() {
            return this.todos.filter((t) => t.status == false).length;
        },
        unFinishedCount() {
            return this.todos.filter((t) => t.status == true).length;
        }
    }
}
</script>



<style scoped>
input {
    width: 100%;
    border: none;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: .3s;
    font-family: 'Open Sans', sans-serif !important;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400;
    padding: 15px;
    background-color: rgba(0,0,0,0.2);
    color: white;
}

input:focus {
    border-color: #41b883;
    box-shadow: 0 0 3px 0 #41b883;
    background-color: rgba(0,0,0,0.5);
}

input::placeholder {
    font-size: 14px;
    color: white;
}

ul {
    width: 250px;
    padding: 0;
}

li {
    list-style: none;
    margin-bottom: 10px;
    color: white;
    font-weight: 400;

}

.btn {
    margin: 0;
    padding: 5px;
    border: none;
    cursor: pointer;
}

.btn-delete {
    background-color: #E14D2A;
    color: White;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
}

.btn-check {
    background-color: #5F8D4E;
    color: White;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
}

.btn-cancel {
    background-color: #e22e2e;
    color: White;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
}

.title {
    padding: 10px 16px;
    background: rgba(65, 184, 131, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border: 1px solid rgba(65, 184, 131, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.glass-show {
    padding: 30px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>