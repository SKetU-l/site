<template>
  <button class="px-5 py-3 rounded-lg transition-all duration-300" :class="styles">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  pill: {
    type: Boolean,
    default: true,
  },
  theme: {
    validator(value, props) {
      // The value must match one of these strings
      return ["outlined", "tonal", "filled"].includes(value);
    },
    default: "filled",
  },
});

const styles = reactive({
  pill: props.pill,
  outlined: props.theme == "outlined",
  tonal: props.theme == "tonal",
  filled: props.theme == "filled",
});
</script>

<style scoped>
.pill {
  @apply rounded-full;
}

.outlined {
  @apply outline outline-2 border-colorTextLight dark:border-colorTextDark;
  @apply bg-colorBackgroundDark dark:bg-colorBackgroundLight;
  @apply text-colorTextDark dark:text-colorTextLight;
  @apply hover:bg-colorBackgroundLight dark:hover:bg-colorBackgroundDark;
  @apply hover:text-colorBackgroundDark dark:hover:text-colorBackgroundLight;
  @apply hover:border-colorBackgroundDark dark:hover:border-colorBackgroundLight;
}
.tonal {
  @apply text-colorTextLight dark:text-colorTextDark;
  @apply bg-colorPrimaryLight dark:bg-colorPrimaryDark bg-opacity-30 dark:bg-opacity-30;
  @apply hover:bg-colorPrimaryLight dark:hover:bg-colorPrimaryDark;
  @apply hover:text-colorTextLight;
}
.filled {
  @apply bg-colorBackgroundDark dark:bg-colorBackgroundLight;
  @apply text-colorTextDark dark:text-colorTextLight;
  @apply hover:bg-opacity-30 dark:hover:bg-opacity-30;
  @apply hover:text-colorTextDark dark:hover:text-colorTextDark;
}
</style>