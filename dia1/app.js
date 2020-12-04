const app = new Vue({
    el: '#app',
    //viven todas las variables
    data: {
        titulo: "Tareas con Vue",
        sesion: 5,
        profesores: {
            'nombre': 'Daniel',
            'Ciclo': '3'
        },

        nuevaTarea: '',
        tareas: [],
        //crear base de datos para guardar tareas

    },
    //metodos: logica de la aplicación
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            })
            //console.log(this.nuevaTarea);
            this.nuevaTarea= "";
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            console.log("editando...");
            this.tareas[index].estado = true
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            console.log("editando...");
            this.tareas.splice(index, 1);
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
    },

    computed: {

    },
    // ejecutar algo en un momento determinado del ciclo de vue
    beforeCreate(){

    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        if (datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    },
})