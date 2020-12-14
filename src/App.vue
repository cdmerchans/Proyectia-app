<template>
  <div id="app">
    <div class="header">
        <h1>Proyectia</h1>
        <nav>
          <button v-on:click="init"> Empresa </button> 
          <button v-on:click="getProyecto" > Crear proyecto</button> 
          <button v-on:click="readProyecto" > Consultar </button>
          <button v-on:click="putProyecto" > Actualizar </button>
          <button v-if="is_auth" >Cerrar Sesión</button>
        </nav>
    </div>
    <div class="main-component">
    </div>
    <div class="footer"> 
      <h2>G2M2E3</h2>
    </div>
  </div>
</template>

<script>
  export default { 
    name: 'App',
    components: {},
    data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false 
      }
    },  
    methods: {
    },
    beforeCreate: function(){ 
      localStorage.setItem('current_username', 'camilo24') 
      localStorage.setItem('isAuth', true)
    } 
  }
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px; 
    background-color: #3493a3 ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between; align-items: center;
  }
  .header h1{ 
    width: 20%;
    text-align: center;
  }
  .header nav { 
    height: 100%; 
    width: 45%;
    display: flex; 
    justify-content: space-around; 
    align-items: center;
    font-size: 20px; 
  }
  .header nav button{
    color: #E5E7E9; 
    background: #307986 ; 
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{ 
    color: #283747; 
    background: #E5E7E9; 
    border: 1px solid #E5E7E9;
  }
  .main-component{ 
    height: 75vh;
    margin: 0%;
    padding: 0%; 
    background-image: url('https://www.flaticon.es/premium-icon/icons/svg/1078/1078454.svg');
    background-repeat: no-repeat;
    background-position: center; 
    opacity:.1
  }
  .footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px; 
  background-color: #3493a3; 
  color: #E5E7E9;
  }
  .footer h2{ 
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    opacity:.3
  }
</style>
