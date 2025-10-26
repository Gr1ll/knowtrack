import { mainnet, sepolia } from "wagmi/chains";
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiProvider, http, injected } from "wagmi";

const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export default function App() {
  return (
    <WagmiProvider config={config} reconnectOnMount={true}>
      <RainbowKitProvider initialChain={sepolia}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
