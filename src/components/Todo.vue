// src/components/Todo.vue

<template>
  <p>
    {{ todo.text }}
  </p>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    createTodo () {
      this.$store.dispatch('addTodo', {text: this.newTodoText})
      this.newTodoText = ''
    },
    clearTodos () {
      this.$store.dispatch('clearTodos')
    }
  }
}
</script>