<template>
  <div id="app">
    <table>
      <tr>
        <th>ID</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>FUNCIONARIO</th>&nbsp;&nbsp;&nbsp;
        <th>CPF</th>
      </tr>
      <tr v-for="func in funcionarios" :key="func.id">
        <td>{{ func.id }}</td>&nbsp;
        <td>{{ func.nome }}</td>&nbsp;
        <td>{{ func.cpf}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
    data () {
      return {
        funcionarios: [],
        
          }
        },
        created () {
            axios.get('funcionario/getAll',
            { headers: { Accept: 'application/json' } })
            .then(res => {
              console.log(res)
              this.funcionarios = res.data
            })
            .catch(error => console.log(error))
          }
        }
</script>