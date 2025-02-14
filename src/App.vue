<script setup lang="ts">


import HelloWorld from './components/HelloWorld.vue'
import { createAppKit, useAppKit } from '@reown/appkit/vue'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { networks } from "./config"

// 1. Get projectId from https://cloud.reown.com
const projectId = 'ef4cb4310a5d2815bf0398a34fdfe2e6'

// 2. Create your application's metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // url must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 3. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks: networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

// 4. Use modal composable
const modal = useAppKit()
</script>

<template>
  <div>
    <appkit-button />
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
