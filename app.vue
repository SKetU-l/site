<template>
  <App>
    <header class="sicky left-0 top-0 right-0">
      <Navbar />
    </header>

    <NuxtPage />
  </App>
</template>

<script setup></script>
<style>
body {
  font-family: sans-serif;
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorTextLight dark:text-colorTextDark;
}
</style>
