<template>
    <div id='Usuario'>
        <h2>Cadastro de Usuario</h2>
        <input type="email" name="user" v-model="nome" placeholder="E-mail">
        <input type="password" name="pass" v-model="nome" placeholder="Senha"><br/>
        <button type="button" v-on:click="salvarImc">Salvar</button>
    </div>
</template>