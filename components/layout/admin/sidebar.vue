<template>
    <div class="fixed top-0 left-0 z-20 px-3 pt-[6%] h-screen bg-darkColor flex flex-col items-start text-white">
        <NuxtLink to="/admin" class="text-2xl  font-medium mb-3 px-2 py-2 text-white" exact-active-class="text-darkColor">Dashboard</NuxtLink>
        <NuxtLink to="/admin/users" class="text-2xl  font-medium mb-3 px-2 py-2 text-white" exact-active-class="text-darkColor">Users</NuxtLink>
        <NuxtLink to="/admin/challenges" class="text-2xl font-medium mb-3 px-2 py-2">Challenges</NuxtLink>
    </div>
</template>