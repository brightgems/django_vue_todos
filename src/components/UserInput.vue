<template>
  <div id="user-inputs">
  
    <div class="row">
  
      <div class="col lg-12">
  
        <span class="label label-warning">{{error}}</span>
  
      </div>
  
    </div>
    <div class="col lg-12">
      <input v-model="newTodoText" v-on:keyup.enter="createTodo">
    
      <button class="btn btn-warn" v-on:click="clearTodos">
    
          Clear
  
      </button>
    </div>
  </div>
  
  </div>
  
  </div>
</template>

<script>
  import {
  
    mapState
  
  } from 'vuex'
  
  
  
  export default {
  
    data: function() {
  
      return {
  
        newTodoText: ''
  
      }
  
    },
  
    computed: {
  
      ...mapState(['error', 'todos'])
  
    },
  
    methods: {
  
      createTodo() {
  
        this.$store.dispatch('addTodo', {
  
          text: this.newTodoText
  
        })
  
        console.log(this.newTodoText, 'created!')
  
      },
  
      clearTodos() {
  
        this.$store.dispatch('clearTodos', this.newTodoText)
  
        console.log('Todos cleared!')
  
      }
  
    }
  
  }
</script>