import compras from "../components/Compras.vue";
import ventas from "../components/Ventas.vue";
import invetario from "../components/Inventario.vue";

export const routes =[
    {path: '/'},
    {path: '/compras', component : compras},
    {path: '/ventas', component : ventas},
    {path: '/inventario', component : invetario}
]