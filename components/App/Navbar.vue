<template>
  <div class="navbar">
    <a href="/" class="logo">RisingOS</a>
    <nav>
      <ul>
        <li v-for="page in pages">
          <a :href="page.path">{{ page.name }}</a>
        </li>
      </ul>
    </nav>
    <button
      class="bg-colorTextDark dark:bg-colorTextLight text-colorTextDark dark:text-colorTextLight"
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
