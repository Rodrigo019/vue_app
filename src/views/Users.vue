<template>
    
    <table class="table table-responsive table-hover">
        <thead>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
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
                    <button class="btn btn-sm btn-primary">View</button>
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