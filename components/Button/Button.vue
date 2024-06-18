<template>
  <button class="px-4 py-2 transition-all duration-300" :class="styles">
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
  @apply outline outline-1 border-colorOutlineLight dark:border-colorOutlineDark hover:bg-colorBackgroundDark dark:hover:bg-colorBackgroundLight hover:text-colorTextDark dark:hover:text-colorTextLight;
}
.tonal {
  @apply text-colorTextLight dark:text-colorTextDark bg-colorPrimaryLight dark:bg-colorPrimaryDark bg-opacity-30 dark:bg-opacity-30 hover:bg-colorPrimaryLight dark:hover:bg-colorPrimaryDark hover:text-colorTextLight;
}
.filled {
  @apply bg-colorBackgroundDark dark:bg-colorBackgroundLight text-colorTextDark dark:text-colorTextLight;
}
</style>
