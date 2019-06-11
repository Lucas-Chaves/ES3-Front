<template>
    <div id='imc'>
        <h2>Índice de massa corporal (IMC)</h2>
        <input type="number" name="peso" v-model="nome" placeholder="Peso Atual">
        <input type="number" name="altura" v-model="nome" placeholder="Altura Atual"><br/>
        <button type="button" v-on:click="salvarImc">Salvar</button>
    </div>
</template>



<style>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
</style>