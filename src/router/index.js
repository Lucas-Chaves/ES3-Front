import Vue from 'vue';
import Router from 'vue-router';
import ListaHorario from '@/components/ListaHorario';
import Login from '@/components/Login';
import Cadastro from '@/components/CadastroFunc';
import Servico from '@/components/CadastroServico';
import Agenda from '@/components/Agenda';
import Imc from '@/components/Imc';
import Alimentos from '@/components/Alimentos';
import Grupo from '@/components/Grupo';
import Usuario from '@/components/Usuario';
import Receita from '@/components/Receita';
import Ingredientes from '@/components/Ingredientes';
import Combinacao from '@/components/Combinacao';


import { mapState } from 'vuex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/listahorario',
      name: 'lista horario',
      component: ListaHorario,
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/funcionario',
      name: 'cadastro de funcionario',
      component: Cadastro,
    },
    {
      path: '/servico',
      name: 'cadastro de servicos',
      component: Servico,
    },
    {
      path: '/agenda',
      name: 'agendamento de horario',
      component: Agenda,
    },
    {
      path: '/imc',
      name: 'imc do usuario',
      component: Imc,
    },
    {
      path: '/alimentos',
      name: 'alimentos',
      component: Alimentos,
    },
    {
      path: '/grupo',
      name: 'grupo de alimentos',
      component: Grupo,
    },
    {
      path: '/imc',
      name: 'imc do usuario',
      component: Imc,
    },
    {
      path: '/usuario',
      name: 'tela do usuario',
      component: Usuario,
    },
    {
      path: '/receita',
      name: 'receitas',
      component: Receita,
    },
    {
      path: '/ingredientes',
      name: 'ingredientes de alimentos',
      component: Ingredientes,
    },
    {
      path: '/combinacao',
      name: 'combinacao de alimentos',
      component: Combinacao,
    },
  ],
});
