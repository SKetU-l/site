<template>
  <div
    class="min-h-14 w-full px-4 py-2 flex justify-between items-center bg-colorBackgroundLight dark:bg-colorBackgroundDark"
  >
    <a href="/" class="w-12 h-12 p-4 items-center"
      ><img src="/public/logo-dark.svg" alt="RisingOS-Logo"
    /></a>
    <nav>
      <ul class="flex flex-row space-x-1">
        <li
          v-for="page in pages"
          class="px-2 py-1 rounded-full hover:bg-colorPrimaryLight hover:bg-opacity-30 transition-all duration-200"
        >
          <NuxtLink class="hover:text-colorPrimaryLight hover:font-bold" :to="page.path">
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <button
      class="min-h-12 px-4 py-2 rounded-full bg-colorBackgroundDark dark:bg-colorBackgroundLight text-colorTextDark dark:text-colorTextLight"
    >
      Download
    </button>
  </div>
</template>
<script setup>
const pages = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "TEAM",
    path: "/team",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "SUPPORT",
    path: "/support",
  },
  {
    name: "BLOG",
    path: "/blog",
  },
];
</script>
