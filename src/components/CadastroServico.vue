<template>
    <div id='psservico'>
        
        <h2>CADASTRAR SERVIÇO</h2>
        <input type="text" name="nome" v-model="nome" placeholder="Nome do Servico" v-on:keyup.enter="salvarServico">
        <button type="button" v-on:click="salvarServico">Salvar</button>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState} from 'vuex';
export default {
    name:'servico',
    computed:mapState(['token']),
    data(){
        return {
            gd:'SERVICO',
            nome:'',
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
    },
    methods:{
        salvarServico: function() {
            axios.post('servico/save',
            {headers: {Accepted: 'application/json'},
              nome: this.nome.toUpperCase(),})
            .then(res => {
              if(res.status === 200) alert('servico salvado com sucesso');
              this.$router.push('/');
            })
            .catch(error => {
              if(error.response.status === 500) alert('Servico já cadastrado!');
            })

        }
    }
}
</script>
<style>

</style>
