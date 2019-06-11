<template>
<div>
  <div class="login">
    <h2>LOGIN</h2>
        <input type="text" name="login" placeholder="login" v-model="login"/><br><br>
        <input type="password" name="senha" placeholder="Senha" v-model="senha"/><br><br>
        <button type="button" v-on:click="logar">Login</button>
  </div>
  <br><br>
</div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      login:'',
      senha:''
    };
  },
  methods: {
    ...mapMutations([
      'setToken',
    ]),
    logar: function() {
      alert('button clicked')
      axios.post('/oauth/login',
      {headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
       email:this.login,
       password:this.senha})
      .then(res => {
        if(res.status === 200){
          alert(res.data.token)
          this.setToken(res.data.token);
          this.$router.push(`/listahorario`)
          // if(res.headers.token.split('-')[0] === 'xxxxx.yyyyy.zzzzz'){
          //   this.$router.push('/listahorario');
          // }
        }
      })
      .catch(error => {
        if(error.response.status === 505) alert('Error Interno')
        if(error.response.status === 401) alert('Senha incorreta')
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
