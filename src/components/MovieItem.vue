<template>
    <div>
        <div  class="movie" >
            <div class="movie-col-left">
                <img v-bind:src="movie.Poster"/>
            </div>
            <div class="movie-col-right">
                <div class="movie-title">
                    <h2>{{movie.Title}}</h2>
                    <span class="movie-rating">{{movie.Rated}}</span>
                </div>
            </div>
        </div>
        <!--movie.(movie attribute in json)-->
    </div>
</template>

<script>
    export default {
        props:['movie']
    }
</script>

<style>

</style>