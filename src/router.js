import vueRouter from 'vue-router'
import ConsultarProyecto from './components/ConsultarProyecto'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        {
            path: '/proyectos/consultar/:empresa',
            name: "consulta",
            component: ConsultarProyecto
        },
        {
            path: '/proyectos/crear/:empresa',
            name: "consulta",
            component: ConsultarProyecto
        },
    ]
})
export default router