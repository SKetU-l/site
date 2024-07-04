<template>
  <div
    class="min-h-14 w-full px-4 py-2 flex justify-between items-center bg-colorBackgroundLight dark:bg-colorBackgroundDark"
  >
    <a href="/" class="w-12 h-12 p-4 items-center"
      ><img
        src="/public/logo-dark.svg"
        class="text-colorPrimaryLight logo"
        alt="RisingOS-Logo"
    /></a>
    <!-- Mobile menu -->
    <div class="flex flex-row sm:hidden space-x-2">
      <IconButton icon="/mail.svg" class="bg-colorPrimaryLight text-colorTextLight" />
      <IconButton
        icon="ic:outline-menu"
        class="bg-colorBackgroundLight text-colorTextLight"
      />
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
    <Button theme="outlined" pill="false" class="hidden sm:flex">Download</Button>
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
var isLargeScreen = ref(false);

onMounted(() => {
  window.addEventListener("resize", onWindowResize);
  onWindowResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", onWindowResize);
});
const onWindowResize = () => {
  isLargeScreen = window.innerWidth > 600;
};
</script>

<style>
.logo:hover {
  @apply bg-colorPrimaryLight;
  transition: all 0.3s ease-in-out;
}
</style>