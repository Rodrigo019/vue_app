<template>
    
    <table class="table table-responsive table-hover">
        <thead>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Enable</th>
        </thead>
        <tbody>
            <tr 
                v-for="user in this.users" 
                :key="user.id"
            >
                <td>
                    <strong>{{user.id}}</strong>
                </td>
                <td>{{user.fname}}</td>
                <td>{{user.sname}}</td>
                <td>{{user.email}}</td>
                <td>
                    <span v-if="user.enable" class="badge bg-success">User enable</span>
                    <span v-if="!user.enable" class="badge bg-danger">User disabled</span>                    
                </td>
                <td>
                    <router-link class="btn btn-primary" :to="{ name: 'UsersCreate', params: { id: user.id } }">View</router-link>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import UserService from '@/services/userservice'
import User from '@/interfaces/user';

export default defineComponent({
    name: 'User',
    data() {
        return {
            users: [] as User[]
        };
    },
    async created() {
        try {
            this.users = await UserService.getAll();
        } catch (error) {
            console.log(error);
        }
    },

    selectRow(id: number) {
        console.log(id);
    }
})
</script>

<style>
tr {
    cursor: pointer;
}
</style>