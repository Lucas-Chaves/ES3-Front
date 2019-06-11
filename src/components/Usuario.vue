<template>
    <div id='Usuario'>
        <h2>Cadastro de Usuario</h2>
        <input type="email" name="user" v-model="user" placeholder="E-mail">
        <input type="password" name="passw" v-model="passw" placeholder="Senha"><br/>
        <button type="button" v-on:click="salvarUsr">Salvar</button>
    </div>
</template>

<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name:'Usuario',
    computed:mapState(['token']),
    data() {
        return {
          user: '',
          pass: ''
        }
    },
    methods: {
      salvarUsr: function() {
        axios.post('/user', {
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          email: this.user,
          password:  this.passw
        })
        .then(resp => {
          if (resp.status === 201) alert('usuario criado com sucesso !');
        })
        .catch(error => {
          alert(error.response.data);
        })
      }
    }
  }
</script>