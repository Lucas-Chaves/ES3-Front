<template>
    <div id='imc'>
        <h2>Índice de massa corporal (IMC)</h2>
        <input type="number" name="peso" v-model="pso" placeholder="Peso Atual">
        <input type="number" name="altura" v-model="alt" placeholder="Altura Atual" v-on:keyup.enter="salvarImc"><br/>
        <button type="button" v-on:click="salvarImc">Salvar</button>
    </div>
</template>
<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name:'imc',
    computed:mapState(['token']),
    data() {
        return {
          pso: '',
          alt: ''
        }
    },
    methods: {
      salvarImc: function() {
        const imc = parseInt(this.pso)/(parseInt(this.alt) * parseInt(this.alt));
        axios.post('/imc', {
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          idUser: 1,
          valorImc: imc
        })
        .then(resp => {
          if (resp.status === 201) alert('imc criado com sucesso !');
        })
        .catch(error => {
          alert(error.response.data);
        })
      }
    }
  }
</script>
<style>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
</style>