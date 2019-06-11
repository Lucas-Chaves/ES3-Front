<template>
    <div id='Grupo'>
        <h2>Cadastro Alimentos</h2>
        <input type="text" name="nAlimento" v-model="name" placeholder="Nome do Alimento">
        <input type="text" name="proteina" v-model="name" placeholder="Nome do Grupo">
        <input type="text" name="carboidrato" v-model="name" placeholder="Nome do Grupo">
        <input type="text" name="vEnergetico" v-model="name" placeholder="Nome do Grupo">
        <input type="text" name="description" v-model="desc" placeholder="Descrição do Grupo" v-on:keyup.enter="salvarGrupo"><br/>
        <button type="button" v-on:click="salvarGrupo">Salvar</button>
    </div>