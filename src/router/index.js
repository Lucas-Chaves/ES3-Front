import Vue from 'vue';
import Router from 'vue-router';
import ListaHorario from '@/components/ListaHorario.vue';
import Login from '@/components/Login.vue';
import Cadastro from '@/components/CadastroFunc.vue';
import Servico from '@/components/CadastroServico.vue';
import Agenda from '@/components/Agenda.vue';
import Imc from '@/components/Imc.vue';
import Alimentos from '@/components/Alimentos.vue';
import Grupo from '@/components/Grupo.vue';
import Usuario from '@/components/Usuario.vue';
import Receita from '@/components/Receita.vue';
import Ingredientes from '@/components/Ingredientes.vue';
import Combinacao from '@/components/Combinacao.vue';


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
      path: '/Usuario',
      name: 'tela do usuario',
      component: Usuario,
    },
    {
      path: '/receita',
      name: 'receitas',
      component: Receita,
    },
    {
      path: '/Ingredientes',
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
