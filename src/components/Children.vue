<template>
  <div>{{ derivedCount }}</div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const props = defineProps({
  count: Number,
});

// 使用 ref 创建一个响应式状态来存储基于 props 的派生状态
const derivedCount = ref(props.count);

// watch(
//   () => props.count,
//   (newValue, oldValue) => {
//     derivedCount.value = newValue;
//   }
// );

watchEffect(() => {
  derivedCount.value = props.count;
  console.log(`Current props count: ${props.count}`);
});
</script>
