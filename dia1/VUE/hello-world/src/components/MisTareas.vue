<template>
  <div class="container">
      <h3>{{ subtitulo }}</h3>
    <!-- v-model: conecta campo de texto con la variable nuevaTarea -->
    <input
      type="text"
      class="form-control mt-5"
      v-model="nuevaTarea"
      v-on:keyup.enter="agregarTarea"
    />
    <button class="btn btn-success mt-2 w-100" v-on:click="agregarTarea">
      Agregar Tarea
    </button>

    <div class="mt-3" v-for="(item, index) of tareas" :key="item.id">
      <div
        v-bind:class="[item.estado ? 'alert-success' : 'alert-danger']"
        class="alert"
        role="alert"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>
            {{ item.nombre }}
          </div>
          <div>
            {{ item.estado }}
          </div>
          <div>
            <button class="btn btn-success" v-on:click="editarTarea(index)">
              OK
            </button>
            <button class="btn btn-danger" v-on:click="eliminarTarea(index)">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MisTareas",
  props: {
    // recibe cosas del principal app.vue
    subtitulo: String
  },
   //viven to[das las variables
    data()  {
        return {
        sesion: 5,
        profesores: {
            'nombre': 'Daniel',
            'Ciclo': '3'
        },

        nuevaTarea: '',
        tareas: [],
        //crear base de datos para guardar tareas
        }
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

