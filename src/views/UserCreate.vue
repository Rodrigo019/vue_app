<template>

    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
        </li>
    </ul>

    <form>
        <div v-if="this.id > 0" class="row">
            <div class="col-2">
                <strong><h3># {{this.id}}</h3></strong>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="form-group mt-2">
                <label for="fname">First Name</label>
                <input 
                    type="text" 
                    name="fname" 
                    id="fname" 
                    class="form-control" 
                    placeholder="First Name" 
                    aria-describedby="fname"
                    v-model="this.user.fname">
                </div>
            </div>
            <div class="col-4">
                <div class="form-group mt-2">
                <label for="">Surname</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="sname" 
                    id="sname" 
                    aria-describedby="helpId" 
                    placeholder="Surname"
                    v-model="this.user.sname">
                </div>                
            </div>
            <div class="col-4">
                <div class="form-group mt-2">
                <label for="email">E-mail</label>
                <input 
                    type="email" 
                    class="form-control" 
                    name="email" 
                    id="email" 
                    aria-describedby="email" placeholder=""
                    v-model="this.user.email">
                </div>                
            </div>
        </div>

    </form>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import UserService from '@/services/userservice'
import User from '@/interfaces/user';

export default defineComponent({
    name: 'UserCreate',
    data() {
        return {
            id: 0,
            user: undefined as any
        }
    },
    async created() {
        const id = this.$route.params['id'].toString();
        this.id = Number.parseInt(id);

        if (this.id > 0) {
            const response = await this.getUser();
            this.user = response as User;
        } else {
            this.user = {}
        }
    },
    methods: {
        async getUser() {
            const response = await UserService.get(this.id);
            return response;
        }
    }
})
</script>