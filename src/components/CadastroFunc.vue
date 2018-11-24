<template>
    <div id='psfuncionario'>
        <h1>{{ gd }}</h1>
         <h1>Salvar Funcionario</h1>
        <input type="text" name="nome" placeholder="Nome" v-model="nome" /><br/>

        <input type="cpf" name="cpf" placeholder="CPF" v-model="cpf"/><br/>

        <input type="password" name="senha" placeholder="Senha" v-model="senha"/><br/>

        <select v-model="tipo">
          <option v-for="opt in options" v-bind:key="opt.text" v-bind:value="opt.value">
            {{opt.text}}
          </option>
        </select><br />

        <select v-model="servico">
          <option v-for="serv in listServ" v-bind:value="serv.nome" v-bind:key="serv.id">
            {{serv.nome}}
          </option>
        </select><br/>

        <button type="button" v-on:click="salvar">Salvar</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "funcionario",
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
#psfuncionario {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
