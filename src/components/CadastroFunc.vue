<template>
    <div id='psfuncionario'>
        
         <h2>CADASTRAR FUNCIONARIO</h2>
        <input type="text" name="nome" placeholder="Nome" v-model="nome" /><br/><br>

        <input type="text" name="cpf" placeholder="Cpf" v-model="cpf"/><br><br>
        
        <input type="password" name="senha" placeholder="Senha" v-model="senha"/><br><br>

        <select v-model="tipo">
          <option v-for="opt in options" v-bind:key="opt.text" v-bind:value="opt.value">
            {{opt.text}}
          </option>
        </select><br><br>
     
        <select v-model="servico">
          <option v-for="serv in listServ" v-bind:value="serv.nome" v-bind:key="serv.id">
            {{serv.nome}}
          </option>
        </select><br><br>
    
        <button type="button" v-on:click="salvar">Salvar</button>
    </div>
</template>
<script>
import axios from 'axios';
import {mapState} from 'vuex';

export default {
    name: "funcionario",
    computed:mapState(['token']),
    data(){
      return{
        gd:'FUNCIONARIO',
        listServ: [],
        tipo:0,
        servico:'',
        nome:'',
        senha:'',
        cpf:0,
        options: [
          { text: 'Admin', value: 1 },
          { text: 'Funcionario', value: 0 },
        ]
        }
    },
    created() {
      if(this.token == null || this.token.split('-')[0] != 'aaaaa.bbbbb.ccccc'){
        if(this.token == null){
          alert('precisa estar logado.');
        }else{
          alert('voce nao tem permissao a esta pagina.');
        }
        this.$router.push('/')
      }
      axios.get('servico/getAll', 
      {headers: { Accept: 'application/json'}})
      .then(res => {
       this.listServ = res.data;
      })
      .catch(error=> alert(error));
    },
    methods: {
      salvar: function() {
        axios.post('funcionario/save',
        {headers: {Accept: 'application/json'},
        nome:this.nome,
        cpf: this.cpf,
        senha:this.senha,
        tipo: this.tipo,
        servico:{
          nome: this.servico
        }
        })
        .then(res => {
          if(res.status === 201) alert('funcionario salvo com sucesso')
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
}
</script>
<style>

</style>
