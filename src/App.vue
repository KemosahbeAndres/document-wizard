<script setup>
import {
  BApp,
  BAvatar,
  BCol,
  BContainer,
  BDropdown, BDropdownDivider, BDropdownHeader,
  BDropdownItem, BNav,
  BNavbar,
  BNavbarBrand, BNavItem,
  BRow,
} from 'bootstrap-vue-next'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRouter()

const showNavbar = computed(() => {
  if (!route.meta) {
    return true
  }
  return !route.meta.hideNavbar
})
</script>

<template>
  <BApp>
    <BContainer fluid v-if="showNavbar">
      <BRow fluid>
        <BCol cols="12" class="text-center border-4">
          <BNavbar class="my-2">
            <BNavbarBrand>Document Wizard Generator</BNavbarBrand>
            <BDropdown variant="link" no-caret class="user-dropdown">
              <template #button-content>
                <BAvatar variant="primary" src="https://placekitten.com/300/300"></BAvatar>
              </template>
              <BDropdownHeader>Usuario: Administrator</BDropdownHeader>
              <BDropdownItem>Perfil</BDropdownItem>
              <BDropdownItem>Ajustes</BDropdownItem>
              <BDropdownDivider />
              <BDropdownItem>Cerrar Sesión</BDropdownItem>
            </BDropdown>
          </BNavbar>
        </BCol>
      </BRow>
      <BRow fluid>
        <BCol cols="2">
          <BNav vertical>
            <BNavItem active to="/">Dashboard

            </BNavItem>
            <BNavItem to="/documentos">Documentos</BNavItem>
            <BNavItem to="/organizacion">Organización</BNavItem>
            <BNavItem to="plantillas">Plantillas</BNavItem>
          </BNav>
        </BCol>
        <BCol>
          <router-view />
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid v-else>
      <BRow fluid>
        <h1>Login</h1>
      </BRow>
    </BContainer>
  </BApp>
</template>

<style scoped>
nav, .nav {
  background-color: #f4f4f4 !important;
  border-radius: .4em;
}
</style>
