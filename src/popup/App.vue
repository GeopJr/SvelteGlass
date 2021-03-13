<template>
  <div>
    <Title />
    <Card
      title="Framework"
      :name="data.frameworks[frameworkCheck].name"
      :url="data.frameworks[frameworkCheck].website"
      :image="frameworkCheck"
      :error="!usesSvelteCheck"
    />
  </div>
</template>

<script>
import FrameworkData from "@/assets/frameworks.json";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";

export default {
  name: "SvelteGlass",
  components: { Title, Card },
  data: () => ({
    info: {},
    data: {
      frameworks: FrameworkData,
    },
  }),
  mounted() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.storage.local.get([tabs[0].url], (res) => {
        this.info = Object.values(res)[0];
      });
    });
  },
  computed: {
    usesSvelteCheck() {
      return Object.prototype.hasOwnProperty.call(this.info, "svelte") ||
        Object.prototype.hasOwnProperty.call(this.info, "svelte")
        ? this.info["sapper"] || this.info["svelte"]
        : false;
    },
    frameworkCheck() {
      let framework = "svelte";
      if (this.info.sapper) {
        framework = "sapper";
      }
      return framework;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("../assets/Overpass.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

* {
  user-select: none;
}

body {
  min-width: 168px;
  min-height: 117px;
}

html,
body {
  background-color: #222;
  color: #ffffff;
  font-family: "Overpass";
  overflow: hidden;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
p,
span {
  pointer-events: none;
  user-select: none;
}

img {
  vertical-align: middle;
  display: inline-block;
}
</style>
