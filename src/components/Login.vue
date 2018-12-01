<template>
<div>
  <div class="login">
    <h2>LOGIN</h2>
        <input type="text" name="cpf" placeholder="Cpf" v-model="cpf"/><br><br>
        <input type="password" name="senha" placeholder="Senha" v-model="senha"/><br><br>
        <button type="button" v-on:click="logar">Login</button>
  </div>
  <br><br>
  <div class="menu">
    <h2>AGENDE SEU HORARIO</h2>
         <h3> <router-link to='/agenda'>AGENDAR</router-link></h3>

  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      cpf:'',
      senha:''
    };
  },
  methods: {
    ...mapMutations([
      'setToken',
    ]),
    logar: function() {
      axios.post('funcionario/login',
      {headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
       cpf:this.cpf,
       senha:this.senha})
      .then(res => {
        if(res.status === 200){ 
          this.setToken(res.headers.token);
          if(res.headers.token.split('-')[0] === 'xxxxx.yyyyy.zzzzz'){
            this.$router.push('/listahorario');
          }
        }
      })
      .catch(error => {
        if(error.response.status === 400) alert('Usuario não encontrado')
        if(error.response.status === 404) alert('Senha incorreta ')
      })
    }
  }
};
</script>

<style>
#menu {
        
        width: 270px;
        border: 3px solid rgb(5, 31, 32);
        background-color: rgb(105, 221, 110);
        margin-top: 100px;
        padding: 10px;
    }
</style>
