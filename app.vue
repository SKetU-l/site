<template>
  <App>
    <header class="left-0 top-0 right-0 fixed">
      <Navbar />
    </header>
    <main class="mt-16">
      <NuxtPage />
    </main>
  </App>
</template>

<script setup></script>
<style>
body {
  font-family: sans-serif;
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorTextLight dark:text-colorTextDark;
}
</style>
