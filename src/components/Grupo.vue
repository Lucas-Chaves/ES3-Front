<template>
    <div id='Grupo'>
        <h2>Grupo de Alimentos</h2>
        <input type="text" name="nome" v-model="nome" placeholder="Nome do Grupo">
        <input type="text" name="description" v-model="nome" placeholder="Descrição do Grupo"><br/>
        <button type="button" v-on:click="salvarImc">Salvar</button>
    </div>
</template>