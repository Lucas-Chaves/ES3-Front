<template>
<div>
  <h2>Lista de Funcionarios</h2>

  <div id="F_S">
    <table>
      <tr>
        <th>Funcionario</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>Especialidade</th>&nbsp;&nbsp;&nbsp;
    </tr>
      <tr v-for="funcionario in listaFunc" :key="funcionario.id">
        <td>{{ funcionario.nome }}</td>&nbsp;
        <td>{{ funcionario.servico.nome }}</td>&nbsp;
      </tr>
    </table>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'funcionario_servico',
     data(){
      return{
          listaFunc: []
      }
     },
    created() {
        axios.get('funcionario/getAll', 
        {headers: { Accept: 'application/json'}})
        .then(res => {
         this.listaFunc = res.data;
        })
        .catch(error=> alert(error));
    }
}
</script>
<style>
#F_S {
        
        width: 270px;
        border: 1px solid rgb(5, 31, 32);
        background-color: rgb(246, 250, 248);
        margin: auto;
        margin-top: 100px;
    }
</style>
