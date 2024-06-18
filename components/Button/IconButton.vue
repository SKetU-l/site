<template>
  <button
    v-if="props.icon"
    class="flex cursor-pointer noSelect jsutify-center p-2 rounded-full bg-colorBackground text-colorOnBackground hover:bg-colorOnBackground hover:text-colorBackground"
  >
    <Icon class="m-auto" :name="props.icon" size="24px" />
  </button>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>
