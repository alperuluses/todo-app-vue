<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <div>
            <h1 class="title">
                {{ title }}
            </h1>
        </div>
        <form>
            <input @keyup="onInput" placeholder="Write and wait...">
        </form>
        <ul>
            <li class="d-flex justify-content-between align-items-center" v-for="todo in todos" :key="todo.id">
                <span :class="{ 'text-decoration-overline': !todo.status }">{{ todo.text }}</span>
                <div class="d-flex">
                    <button class="btn  mx-10" :class="{ 'btn-check': todo.status, 'btn-cancel': todo.status == false }"
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
            preventTime: 500,
            todos: [
                { id: id++, text: 'Learn HTML', status: true },
                { id: id++, text: 'Learn JavaScript', status: true },
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
            this.newTodo = ''
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
        }
    }
}
</script>



<style scoped>
input {
    padding: 10px;
    border: 2px solid #CFB997;
    width: 250px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
}

input:focus-visible {
    border-color: #9BA17B !important;
    outline: none;
}

input::placeholder {
    font-weight: 600;
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
    color: #6c816b;
}

ul {
    width: 250px;
    padding: 0;
}

li {
    list-style: none;
    margin-bottom: 10px;
    color: #557153;
    font-weight: bold;
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
    color: #557153;
}
</style>