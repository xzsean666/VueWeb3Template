import type { AppKitNetwork } from "@reown/appkit/networks";
import { astar } from "@reown/appkit/networks";

const isProd = import.meta.env.VITE_NETWORK === "prod";

export const projectId =
  import.meta.env.VITE_PROJECT_ID || "a0645741ad54b2ad5e74c29a22049256";
if (!projectId) {
  throw new Error("VITE_PROJECT_ID is not set");
}
export type NetworkConfig = AppKitNetwork & { title: string };

const prodNetworks: [NetworkConfig, ...NetworkConfig[]] = [
  {
    ...astar,
    title: "Astar",
  },
  {
    id: 1868,
    name: "soneium",
    title: "Soneium",
    nativeCurrency: {
      decimals: 18,
      name: "soneium",
      symbol: "ETH",
    },
    rpcUrls: {
      default: {
        http: ["https://soneium.drpc.org", "https://rpc.soneium.org"],
      },
    },
    blockExplorers: {
      default: {
        name: "Soneium",
        url: "https://soneium.blockscout.com",
      },
    },
    testnet: true,
  },
];

export const devNetworks: [NetworkConfig, ...NetworkConfig[]] = [
  {
    id: 81,
    name: "Shibuya Testnet",
    title: "Shibuya",
    nativeCurrency: {
      symbol: "SBY",
      decimals: 18,
      name: "Shibuya",
    },
    rpcUrls: {
      default: {
        // http: ['https://shibuya.public.blastapi.io', 'https://evm.shibuya.astar.network'],
        http: [
          "https://rpc.startale.com/shibuya?apikey=f8aVd1dvtPtSMrGvy5QlNihdk2QDw3XV",
          "https://evm.shibuya.astar.network",
        ],
      },
    },
    blockExplorers: {
      default: {
        name: "Minato Testnet",
        url: "https://blockscout.com/shibuya",
      },
    },
    testnet: true,
  },
  {
    id: 1946,
    name: "Minato Smart Chain Testnet",
    title: "Minato",
    nativeCurrency: {
      decimals: 18,
      name: "minato",
      symbol: "ETH",
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.minato.soneium.org",
          "https://soneium-minato.g.alchemy.com/v2/kleSEnxyk2NnDB-zvi6-X2z8AktVH_03",
        ],
      },
    },
    blockExplorers: {
      default: {
        name: "Minato Testnet",
        url: "https://explorer-testnet.soneium.org",
      },
    },
    testnet: true,
  },
];

export const networks = isProd ? prodNetworks : devNetworks;
