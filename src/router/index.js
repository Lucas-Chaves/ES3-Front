import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login.vue';
import Cadastro from '@/components/CadastroFunc.vue'
import Servico from '@/components/CadastroServico.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/funcionario',
      name: 'cadastro de funcionario',
      component: Cadastro
    },
    {
      path:'/servico',
      name:'cadastro de servicos',
      component: Servico,
    }
  ],
});
