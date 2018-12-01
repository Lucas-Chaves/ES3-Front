<template>
<div>
  <h2>HORARIOS AGENDADOS</h2>

  <div id="horario">
    <table>
      
      <tr>
        <th>Cliente</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>Telefone</th>&nbsp;&nbsp;&nbsp;
        <th>Dia</th>&nbsp;&nbsp;&nbsp;
        <th>Horario</th>
      </tr>
      <tr v-for="horario in horarios " :key="horario.id">
        <td>{{ horario.usuarioNome }}</td>&nbsp;
        <td>{{ horario.usuarioTelefone }}</td>&nbsp;
        <td>{{ horario.agendamentoDia.split('T')[0] }}</td>&nbsp;
        <td>{{ horario.agendamentoDia.split('T')[1].split('.')[0].substr(0,5)}}</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'horario',
  
  computed:
    mapState(['token']),
    data () {
      return {
        funcionarios: [],
        horarios:[],
        
          }
    },
  created () {
     if(this.token == null){
        alert('voce precisa estar logado.');
        this.$router.push('/')
      }
            axios.get('/agenda/getAll',
            { headers: { Accept: 'application/json' } })
            .then(res => {
              this.horarios = res.data
              this.limparHorario();
            })
            .catch(error => console.log(error))          
  },
  methods: {
    limparHorario(){
      if(this.token.split('-')[0] == 'xxxxx.yyyyy.zzzzz'){
        this.horarios = this.horarios.filter(obj => obj.funcionario.id == this.token.split('-')[1]);
        }
      }
    } 
}
</script>
<style>
#horario {
        
        width: 270px;
        border: 1px solid rgb(5, 31, 32);
        background-color: rgb(246, 250, 248);
        margin: auto;
        margin-top: 100px;
    }
</style>