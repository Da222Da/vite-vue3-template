<template>
  {{ store.count }}
  <button @click="$increment">+1</button>
</template>

<script setup>
import { watch } from "vue";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const { $increment } = store;
store.$subscribe((mutation, state) => {
  console.log("mutation, state::: ", state.count);
});
</script>
