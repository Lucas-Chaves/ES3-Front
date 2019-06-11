<template>
    <div id='Grupo'>
        <h2>Cadastro Alimentos</h2>
        <input type="text" name="nAlimento"   v-model="name" placeholder="Nome do Alimento">
        <input type="text" name="proteina"    v-model="prot" placeholder="Proteina">
        <input type="text" name="carboidrato" v-model="carb" placeholder="Carboidrato">
        <input type="text" name="vEnergetico" v-model="vener" placeholder="Valor Energetico" v-on:keyup.enter="salvarAlim">
        <div>
          <select v-model='grupo'>
            <option value="1">Tipo 1</option>
            <option value="2">Tipo 2</option>
            <option value="3">Tipo 3</option>
            <option value="4">Tipo 4</option>
            <option value="5">Tipo 5</option>
          </select>
        </div>
        <button type="button" v-on:click="salvarAlim">Salvar</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  computed:mapState(['token']),
  name: 'alimento',
  data() {
    return {
      grupo: '1',
      name: '',
      prot: '',
      carb: '',
      vener: '',
    }
  },
  methods: {
    salvarAlim: function(){
      const body = {
        grupoId: this.grupo, 
        nome: this.name, 
        proteina: this.prot, 
        carboidrato: this.carb, 
        energetico: this.vener
      };
      axios.post('/alimento',
        body,
        {
          headers: {Authorization: `Bearer ${this.token}`}
        },
      )
        .then(resp => {
          if(resp.status === 201 || resp.status === 200 ) alert('alimento criado com sucesso !');
        })
        .catch(error => {
          alert(error.response)
        });
      }
  }
}
</script>
