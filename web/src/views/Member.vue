<template>
    <div>
        <div v-for="person in people" :key="person.id">{{person.peopleName}}</div>
    </div>
</template>

<script>
    export default {
        name: "Members",
        data(){
            return{
                active: 'member',
                people:[]
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('people/list')
                this.people = res.data
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style scoped>

</style>