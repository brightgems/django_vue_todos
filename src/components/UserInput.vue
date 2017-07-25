<template>
  <div id="user-inputs">
    <input v-model="newTodoText" v-on:keyup.enter="createTodo">
    
    <button class="btn btn-warn" v-on:click="clearTodos">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return { newTodoText: '' }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    createTodo () {
      this.$store.dispatch('addTodo', {id: this.todos.length, text: this.newTodoText})
      console.log(this.newTodoText, 'created!')
    },
    clearTodos () {
      this.$store.dispatch('clearTodos', this.newTodoText)
      console.log('Todos cleared!')
    }
  }
}
</script>