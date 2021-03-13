<template>
  <div class="title">
    <img src="@/assets/icon-32.png" />
    <span><font style="color: #ff3e00ff">Svelte</font>Glass</span>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
.title {
  margin-bottom: 15px;
  text-align: center;
}
span {
  font-weight: bold;
  white-space: nowrap;
  font-size: 1.2rem;
}
</style>
