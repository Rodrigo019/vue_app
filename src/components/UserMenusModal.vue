<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show user menus
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">User menus</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-responsive table-hover">
                    <thead>
                        <th>
                            Name
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="menu in this.menus" :key="menu.name">
                            <td>{{menu.name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import Menu from '@/interfaces/menu'
import User from '@/interfaces/user'
import UserService from '@/services/userservice'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserMenusModal',
    props: {
        userId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            menus: [] as Menu[] | undefined
        }
    },
    async created() {
        try {
            const response = await this.getUser();
            this.menus = response?.menus;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async getUser() {
            try {
                const response = await UserService.get(this.userId);
                return response;                
            } catch (error) {
                console.log(error);
            }
        }
    }
})
</script>