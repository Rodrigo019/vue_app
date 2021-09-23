<template>
    <form v-if="!this.ususerNotFounder">
        <div v-if="this.id > 0" class="row">
            <div class="col-2">
                <strong><h3># {{this.id}}</h3></strong>
            </div>
        </div>
        <span v-if="this.id > 0 && this.user.enable" class="badge bg-success">User enable</span>
        <span v-if="this.id > 0 && !this.user.enable" class="badge bg-danger">User disabled</span>
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
    <div class="row" v-if="this.id > 0">
        <div class="col-2 mt-2">
            <UserMenusModal :userId="this.user.id" />
        </div>
    </div>
    <div v-if="this.userNotFound">
        userNotFound
    </div>
    
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import UserService from '@/services/userservice'
import User from '@/interfaces/user';
import UserMenusModal from '@/components/UserMenusModal.vue' 

export default defineComponent({
    name: 'UserCreate',
    components: {
        UserMenusModal
    },
    data() {
        return {
            id: 0,
            user: undefined as any,
            userNotFound: false as boolean
        }
    },
    async created() {
        const id = this.$route.params['id'].toString();
        this.id = Number.parseInt(id);
        console.log(this.id);
        if (this.id > 0) {
            try {
                const response = await this.getUser();
                this.user = response as User;
            } catch (error) {
                console.log(error);
                this.userNotFound = true;
            }
        } else {
            this.user = {}
        }
    },
    methods: {
        async getUser() {
            try {
                const response = await UserService.get(this.id);
                return response;                
            } catch (error) {
                console.log(error);
            }
        }
    }
})
</script>