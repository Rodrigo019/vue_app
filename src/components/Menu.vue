<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item" v-for="(menu,index) in this.menus" :key="index">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link :to="menu.url">{{ menu.name }}</router-link>
            </a>              
          </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import MenuService from '@/services/menuservice'
import Menu from '@/interfaces/menu';


export default defineComponent({
    name: 'Menu',
    data() {
        return {
            menus: [] as Menu[]
        };
    },
    async created() {
        try {
            //var response = await MenuService.getAll();
            //this.menus = response;
            this.menus = [
                {
                    name: 'Home',
                    icon: '',
                    url: '/'
                },
                {
                    name: 'About',
                    icon: '',
                    url: '/about'
                }
            ];
        } catch (error) {
            console.log(error);
        }
    }
})
</script>