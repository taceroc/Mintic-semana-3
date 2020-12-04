Vue.component('MisTareas',{
    template:

    `<div>
    <h1 class="text-center">{{titulo}}<span> día {{sesion}}</span></h1>
    <!-- <p>
        {{profesores.nombre}}
        <span> - Cilo: </span>{{profesores.Ciclo}}
    </p> -->

    <!-- v-model: conecta campo de texto con la variable nuevaTarea -->
    <input type="text" class="form-control mt-5" v-model="nuevaTarea" 
    v-on:keyup.enter="agregarTarea">
    <button class="btn btn-success mt-2 w-100" v-on:click="agregarTarea">
        Agregar Tarea</button>
   
   
   <div class="mt-3" v-for="(item, index) of tareas" :key="item.id">

        <div v-bind:class="[item.estado ? 'alert-success': 'alert-danger']"
                class="alert" role="alert">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    {{ item.nombre }}
                </div>  
                <div>
                    {{ item.estado }}
                </div>
                <div>
                    <button class="btn btn-success" v-on:click="editarTarea(index)">OK</button>
                    <button class="btn btn-danger" v-on:click="eliminarTarea(index)">-</button>
                </div>  
            </div>
        </div>

      <!-- <pre> {{ $data }}</pre> -->
   </div>
    <!-- mostrar el objeto de data -->

</div>`

});