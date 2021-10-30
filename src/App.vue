<template>
  <div id="nav" class="p-8">
    <router-link active-class="text-green-600" class="font-bold text-gray-800" to="/">Home</router-link> |
    <router-link active-class="text-green-600" class="font-bold text-gray-800 active:text-green-600" to="/about">About</router-link>
  </div>
  <router-view/>
</template>
