<template>
    
    <div>
        {{}}
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import UserService from '@/services/userservice'
import User from '@/interfaces/user';

export default defineComponent({
    name: 'User',
    props: {
        
    },
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
    }
})
</script>