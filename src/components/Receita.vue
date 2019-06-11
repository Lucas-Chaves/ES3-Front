<template>
<div>
  <h2>Receita</h2>
  <div>
    <table>
      <tr>
        <th>Ingredient</th>
      </tr>
    </table> 
  </div>
</div>
  
</template>
<script>
    import AlimentsClient from '../api/AlimentsClient';
    import RecipesClient from '../api/RecipesClient';
    import { mapState } from 'vuex'
    export default {
      name:'imc',
      computed:mapState(['token']),
      created() {
        this.getAllAliments();
      },
      data() {
          return {
            ingredient_1: "",
            ingredient_2: "",
            ingredient_3: "",
          }
      },
      methods: {
        getAllAliments: async function() {
          await AlimentsClient.getAll();
        },
        saveRecipe: async function() {
          const body = {};
      
          await RecipesClient.create(body);
        }
      }
    }
  </script>
