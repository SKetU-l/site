<template>
  <div
    class="sticky md:absolute top-0 min-h-14 w-full px-4 py-2 flex justify-between items-center bg-colorBackgroundLight dark:bg-colorBackgroundDark z-10"
  >
    <a href="/" class="size-12flex group p-2 items-center">
      <Logo
        class="size-8 group-hover:fill-colorPrimaryLight transition-all duration-300"
      />
    </a>
    <!-- Mobile menu -->
    <div
      class="flex flex-row sm:hidden space-x-2 *:size-10 *:p-2 *:rounded-full"
    >
      <Icon
        name="mdi:email-outline"
        class="bg-colorPrimaryLight text-colorTextDark dark:text-colorTextLight"
      />
      <IconButton icon="ic:outline-menu" class="bg-white text-colorTextLight" />
    </div>
    <!-- Desktop menu -->
    <nav class="hidden sm:flex">
      <ul class="flex flex-row space-x-1">
        <li v-for="page in pages" class="px-2 py-1">
          <NuxtLink
            :style="{ fontFamily: 'Outfit, sans-serif', fontSize: '15.05px', fontWeight: 'bold', lineHight: '18.96px' }"
            class="transition-all duration-300 hover:text-colorPrimaryLight"
            :to="page.path"
          >
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Button theme="outlined" pill="false" class="hidden sm:flex" font="Outfit"
      >DOWNLOAD</Button
    >
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const pages = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "TEAM",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/",
  },
  {
    name: "SUPPORT",
    path: "/",
  },
  {
    name: "BLOG",
    path: "/",
  },
];

var isLargeScreen = ref(false);

onMounted(() => {
  window.addEventListener("resize", onWindowResize);
  onWindowResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", onWindowResize);
});
const onWindowResize = () => {
  isLargeScreen.value = window.innerWidth > 600;
};
</script>

<style></style>
