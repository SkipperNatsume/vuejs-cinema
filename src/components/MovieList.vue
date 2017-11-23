<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{movie.title}}</div>
    </div>
</template>

<script>
    import genres from '../util/genres';

    export default {
        data: function () {
            return {
                movies: [
                    {
                        title: 'Mov1',
                        genre: genres.COMEDY
                    },
                    {
                        title: 'Mov2',
                        genre: genres.CRIME
                    },
                    {
                        title: 'Mov3',
                        genre: genres.FANTASY
                    }
                ]
            };
        },
        props: ['genre', 'time'],
        methods: {
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true
                } else {
                    return this.genre.find(genre => movie.genre === genre); //this.genre refer to the genre array in root component
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);

            }
        }
    }
</script>

<style>

</style>