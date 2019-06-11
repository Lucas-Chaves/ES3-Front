<template>
    <div id='Grupo'>
        <h2>Grupo de Alimentos</h2>
        <input type="text" name="nome" v-model="name" placeholder="Nome do Grupo">
        <input type="text" name="description" v-model="desc" placeholder="Descrição do Grupo" v-on:keyup.enter="salvarGrupo"><br/>
        <button type="button" v-on:click="salvarGrupo">Salvar</button>
    </div>
</template>
<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  export default {
    name:'grupo',
    computed:mapState(['token']),
    data() {
        return {
          name: '',
          desc: ''
        }
    },
    methods: {
      salvarGrupo: function() {
        console.log({ name: this.name, desc: this.desc })
        axios.post('/grupo', {
          headers: {
            Authorization: `Bearer ${this.token}`
          },
          nome: this.name,
          description: this.desc
        })
        .then(resp => {
          if(resp.status === 201 || resp.status === 200 ) alert('grupo criado com sucesso !');
        })
        .catch(error => {
          alert(error.response)
        });
      }
    }
    }
</script>