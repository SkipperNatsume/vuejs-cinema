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
                <div class="movie-sessions">
                    <div v-for="session in filteredSession(sessions)" class="session-time-wrapper">
                        <div class="session-time">{{formatSessionTime(session.time)}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!--movie.(movie attribute in json)-->
    </div>
</template>

<script>
    import times from '../util/times';
    export default {
        props: ['movie', 'sessions', 'day', 'time'],
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format('h:mm A');
            },
            sessionPassesTimeFilter(session) {
                if (!this.day.isSame(this.$moment(session.time), 'day')) {
                    return false;
                }
                else if (this.time.length === 0 || this.time.length === 2) {
                    return true;
                } else if (this.time[0] === times.AFTER_8PM) {
                    return this.$moment(session.time).hour() >= 20;
                } else {
                    return this.$moment(session.time).hour() < 20;
                }
            },
            filteredSession(sessions) {
                return sessions.filter(this.sessionPassesTimeFilter);
            }
        }
    }
</script>

<style>

</style>