<template>
  <div class="login">
    <h1>Login</h1>
        <input type="text" name="cpf" placeholder="Cpf" v-model="cpf"/>
        <input type="password" name="senha" placeholder="Senha" v-model="senha"/><br/>
        <button type="button" v-on:click="logar">Login</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      cpf:'',
      senha:''
    };
  },
  methods: {
    logar: function() {
      axios.post('funcionario/login',
      {headers: {Accept: 'application/json'},
       cpf:this.cpf,
       senha:this.senha})
      .then(res => {
        if(res.status === 200){ 
          alert('usuario ok')
          // resposta do token
          console.log(res.data);
        }
      })
      .catch(error => {
        if(error.response.status === 400) alert('usuario nao encontrado')
        if(error.response.status === 404) alert('senha incorreta ')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
