<template>
    <input 
        class="form-control" 
        type="text" 
        placeholder="Search" 
        aria-label="Search" 
        v-model="this.search" @keydown.enter="this.submitSearch"
    >    
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchResource',
    data() {
        return {
            search: ''
        };
    },
    methods: {
        submitSearch() {
            this.$router.push(`/${this.search}`);
        }
    }
});
</script>

<style>
.form-control {
    border-radius: 0;
}
</style>