<template>
  <div id="todolist">
    <div> {{error}} </div>
    <h2>createTodo(press Enter)</h2>
      <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>todo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="todo in todos">
                  <td>{{todo.id}}</td>
                  <td>
                    {{todo.text}}
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import { mapState } from 'vuex'

export default {

  components: {
    Todo
  },
  computed: {
    ...mapState(['error', 'todos'])
  },
}
</script>