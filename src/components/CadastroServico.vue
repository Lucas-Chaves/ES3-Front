<template>
    <div id='psservico'>
        <h1>{{ gd }}</h1>
        <h1>Salvar Servico</h1>
        <input type="text" name="nome" v-model="nome" placeholder="Nome do Servico" v-on:keyup.enter="salvarServico">
        <button type="button" v-on:click="salvarServico">Salvar</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'servico',
    data(){
        return {
            gd:'SERVICO',
            nome:'',
        }
    },
    methods:{
        salvarServico: function() {
            axios.post('servico/save',
            {headers: {Accepted: 'application/json'},
              nome: this.nome.toUpperCase(),})
            .then(res => {
              if(res.status === 200) alert('servico salvado com sucesso');
            })
            .catch(error => {
              if(error.response.status === 500) alert('erro ao salvar servico');
            })

        }
    }
}
</script>
<style>
#psservico {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
