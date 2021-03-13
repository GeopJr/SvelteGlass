<template>
  <a
    :href="url"
    :style="anchorCheck"
    target="_blank"
    rel="noopener"
    class="card-link"
  >
    <div class="card">
      <div v-if="!error">
        <div class="card-title">{{ title }}</div>
        <div class="card-body">
          <img :src="getIcon" style="vertical-align: middle" />
          <span>{{ name }}</span>
        </div>
      </div>
      <div v-else>
        <div class="card-error">
          This website lacks<br />the power of
          <font style="color: #ff3e00ff">Svelte</font>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Title",
  props: ["url", "title", "image", "name", "error"],
  computed: {
    getIcon() {
      return chrome.extension.getURL("assets/" + this.image + ".png");
    },
    anchorCheck() {
      return this.error ? "pointer-events: none;user-select: none;" : "";
    },
  },
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
img {
  max-height: 32px;
  margin-right: 5px;
}
.card {
  border-color: #ff3e00;
  border-radius: 15px;
  border-style: solid;
  background-color: #ffffff;
  text-align: center;
  border-width: 5px;
  padding: 10px;
  font-weight: bold;
  white-space: nowrap;
  font-size: 1rem;
}

.card-title {
  color: #ff3e00;
  padding-bottom: 10px;
}

.card-body,
.card-error {
  color: #222;
}

.card-link {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
