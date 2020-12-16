<template>
    <div id="ConsultarProyecto">
        Nombre del proyecto: <input type="text" placeholder= "Proyecto" v-model="nombre_proyecto"/><br/>
        <body>
            <h2 align="center">{{nombre_proyecto}}</h2>
        <ul>
            <li>Descripción: <span>{{descripcion_proyecto}}</span></li>
            <li>Fases: <span>{{fases_proyecto}}</span></li>
            <li>Presupuesto: <span>{{presupuesto_plan}}</span></li>
            <li>Fecha inicial: <span>{{fecha_inicio_plan}}</span></li>
            <li>Fecha final: <span>{{fecha_final_plan}}</span></li>
            <li>Número de personas: <span>{{no_personal_requerido}}</span></li>
        </ul> 
        </body> 
        <button v-on:click="Consultar_Proyecto" >Consultar proyecto </button>
    </div>
</template> 

<script>
import axios from 'axios';
export default {
    name: 'ConsultarProyecto',
    data: function (){
        return {
            descripcion_proyecto: "",
            fases_proyecto: 0,
            presupuesto_plan: 0,
            fecha_inicio_plan: "",
            fecha_final_plan: "",
            no_personal_requerido: 0,
        }
    },
    Entrada: function (){
        return {
            nombre_proyecto: "",
        }
    },

    methods: {
        Consultar_Proyecto: function()
        {
            
            var dataIn = {
                nombre_proyecto: this.nombre_proyecto
            };

            empresa = this.$route.params.empresa
            let self = this

            axios.get("http://127.0.0.1:8000/proyectos/consultar/"+empresa, dataIn)
            .then((result) => {
                self.descripcion_proyecto = result.data.descripcion_proyecto
                self.fases_proyecto = result.data.fases_proyecto
                self.presupuesto_plan = result.data.presupuesto_plan
                self.fecha_inicio_plan = result.data.fecha_inicio_plan
                self.fecha_final_plan = result.data.fecha_final_plan
                self.no_personal_requerido = result.data.no_personal_requerido
            })  
            .catch((error) => {
                alert(error);
            });
        }

    }
}
</script>

<style>
    #ConsultarProyecto{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #000000;
    }
    #ConsultarProyecto h2{
        font-family:'Courier New', monospace;
        font-size: 50px;
        color: #000000;
    }
    #ConsultarProyecto span{
        font-family:'Courier New', monospace;
        color: rgb(7, 7, 7);
        font-weight: bold;
    }
</style>
