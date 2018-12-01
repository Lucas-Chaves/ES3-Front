<template>
  <div>
    <div id='psagendamento'>       
      <h2>AGENDE SEU HORARIO</h2>
      <input type="text" name="nome" placeholder="Nome" v-model="nome" /><br/><br>
      <input type="number" name="telefone" placeholder="Telefone" v-model="telefone"/><br><br>     
      <input type="data" name="dia" placeholder="dia" v-model="dia"/><br><br>
      <input type="time" name="hora" placeholder="hora" v-model="hora"/><br><br>
      <select v-model="funcionario" @change="mudar">
        <option v-for="func in listFunc" v-bind:value="func.nome" v-bind:key="func.id" >
          {{func.nome}}
        </option>
      </select><br><br>
      <select v-model="servico">
        <option v-bind:value="s.nome">
          {{ s.nome }}
        </option>
      </select>
      <br><br>
      <button type="button" v-on:click="salvar">Salvar</button>
    </div>
    <div>
      <funcionario_servico></funcionario_servico>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Funcionario_servico from './Funcionario_Servico'

export default {
    name: "agenda",
    components:{
      Funcionario_servico
    },
    data(){
      return{
        gd:'AGENDA',
        nome:'',
        telefone:'',
        dia:'',
        hora:'',
        listServ: [],
        listFunc: [],
        s:{},
        }
    },
    created() {
      axios.get('funcionario/getAll', 
        {headers: { Accept: 'application/json'}})
        .then(res => {
         this.listFunc = res.data;
        })
        .catch(error=> alert(error));
    },
    methods: {
      mudar: function(){
        axios.get(`funcionario/get/${this.funcionario}`,{header: { Accept: 'application/json'}})
        .then(res => {
          this.s = res.data.servico
        })
        .catch(err => console.log(err));
      },
      salvar: function() {
        axios.post('agenda/save',
        {headers: {Accept: 'application/json'},
          usuarioNome: this.nome,
          usuarioTelefone: this.telefone,
          agendamentoDia: `${this.dia}T${this.hora}`,
          funcionario: {
    	      nome:this.funcionario
          }
        })
        .then(res => {
          if(res.status === 201) alert('Horario salvo com sucesso')
        })
        .catch(error => {
          alert(error.message);
        });
      }
    }
}
</script>
<style>

</style>
