<template>
    <div class="row">
        <div class="col-12">
            <h1><strong>{{this.message}}</strong></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <router-link :to="{ name: this.urlBack }">Back</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageNotFound',
    props: {
        urlBack: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    }
})
</script>

