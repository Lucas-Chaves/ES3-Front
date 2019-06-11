<template>
    <div id='Grupo'>
        <h2>Cadastro Alimentos</h2>
        <input type="text" name="nAlimento" v-model="name" placeholder="Nome do Alimento">
        <input type="text" name="proteina" v-model="prot" placeholder="Proteina">
        <input type="text" name="carboidrato" v-model="carb" placeholder="Carboidrato">
        <input type="text" name="vEnergetico" v-model="vener" placeholder="Valor Energetico">
        <div>
          <select>
            <option value="1">Tipo 1</option>
            <option value="2">Tipo 2</option>
            <option value="3">Tipo 3</option>
            <option value="4">Tipo 4</option>
            <option value="5">Tipo 5</option>
          </select>
        </div>
        <button type="button" v-on:click="salvarGrupo">Salvar</button>
    </div>
</template>