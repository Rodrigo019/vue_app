<template>
    <input 
        class="form-control form-control-dark w-100" 
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