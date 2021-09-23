import { createRouter, createWebHistory } from 'vue-router'
import contactsLibrary from './Pages/ContactsLibrary.vue'
import contactInfo from './Pages/ContactInfo.vue'
import editContact from './Pages/EditContact.vue'
import addtContact from './Pages/AddContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/contacts" },
        { path: "/contacts", component: contactsLibrary },
        { path: "/contacts/:id", component: contactInfo,props:true },
        { path: '/contacts/:id/edit', component: editContact,props:true },
        { path: '/add', component: addtContact }
    ]
})


export default router