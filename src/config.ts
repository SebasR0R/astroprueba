export type Ruta = {
    path: string;
    nombre: string;
};

export const rutas: Ruta[] = [
    {
        path:"/",
        nombre:"inicio"
    },
    {
        path:"/secundario",
        nombre:"secundario"
    },
    {
        path:"/formulario",
        nombre:"formulario"
    }   
]