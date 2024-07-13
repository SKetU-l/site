<template>
  <div
    class="min-h-14 w-full px-4 py-2 flex justify-between items-center bg-colorBackgroundLight dark:bg-colorBackgroundDark"
  >
    <a
      href="/"
      class="w-12 h-12 p-4 items-center relative"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img
        :src="logoDark"
        class="text-colorPrimaryLight logo absolute"
        alt="RisingOS-Logo"
        :style="{ opacity: hover ? 0 : 1 }"
      />
      <img
        :src="logoDarkHover"
        class="text-colorPrimaryLight logo absolute"
        alt="RisingOS-Logo"
        :style="{ opacity: hover ? 1 : 0 }"
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
            class="transition-all duration-200 hover:text-colorPrimaryLight"
            :to="page.path"
          >
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Button theme="outlined" pill="false" class="hidden sm:flex"
      >Download</Button
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

const hover = ref(false);
const logoDark = "/logo-dark.svg";
const logoDarkHover = "/logo-dark-hover.svg";

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

<style>
.logo {
  transition: opacity 0.3s ease-in-out;
}
</style>
