import Vue from 'vue';
import Router from 'vue-router';
import ListaHorario from '@/components/ListaHorario.vue';
import Login from '@/components/Login.vue';
import Cadastro from '@/components/CadastroFunc.vue';
import Servico from '@/components/CadastroServico.vue';
import Agenda from '@/components/Agenda.vue';
Vue.use(Router);
import {mapState} from 'vuex';

export default new Router({
  routes: [
    {
      path: '/listahorario',
      name: 'lista horario',
      component: ListaHorario,
    },
    {
      path:'/',
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
    },
    {
      path:'/agenda',
      name:'agendamento de horario',
      component: Agenda,
    }

  ],
});
