<template>
  <div id="core">
    <menu-platform></menu-platform>
    <div>
        <div class="w-75 ml-5">
            <div class="d-flex justify-content-between text-uppercase">
                <h6 class="text-left">
                    <!-- botones para elegir si mostrar series, peliculas o documentales -->
                    <button @click="loadData('serie')" class="btnNoBorder" >Series</button>  | 
                    <button @click="loadData('movie')" class="btnNoBorder" >Peliculas</button> |
                    <button @click="loadData('movie')" class="btnNoBorder" >Documentales</button>
                </h6>
                <div>
                    <h3>
                        <!-- mes actual con botones -->
                        <button class="btnNoBorder">
                            <i class="fas fa-caret-left"></i>
                        </button>
                        octubre 
                        <button class="btnNoBorder">
                            <i class="fas fa-caret-right"></i>
                        </button>
                    </h3>
                 </div>
            </div>
            <h3 class="text-left">Estrenos</h3>
            <div class="row">
            <card-movie v-for="data in moviesFound" :key="data.id" :valor="data.name"></card-movie>
            </div>
            <h3 class="text-left">Abandonos</h3>
            <div class="row">
            <card-movie v-for="data in moviesFound" :key="data.id" :valor="data.name"></card-movie>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "core",
    data () {
        return {
            moviesFound: []
        };
    },
    mounted () {
        this.loadData('serie');
    },
    methods: {
        loadData: function(typeSearch){
            this.moviesFound = [];

            this.data().forEach(item => {
                if(item.type==typeSearch){
                    this.moviesFound.push(item);
                }
            });
        },
        data: function(){
            let movies = [
                { id: 1, name: 'Elite', type: 'serie'},
                { id: 2, name: 'Sex Education', type: 'serie' },
                { id: 3, name: 'Stranger Things', type: 'serie' },
                { id: 4, name: 'Mindhunter', type: 'serie' },
                { id: 5, name: 'Black Mirror', type: 'serie' },
                { id: 6, name: 'Bright', type: 'movie' }
            ]

            return movies;
        }
    }
}
</script>

<style>
    .margin img{
        margin: 0 1em;
        padding: 0.5em;
    }

    .btnNoBorder{
        border: none !important;
        background-color: transparent;
    }

   
</style>