import dynamic from "next/dynamic";

const MetaMaskCard = dynamic(
  () => import("../components/connectors/MetaMask"),
  { ssr: false }
);
const WalletConnectCard = dynamic(
  () => import("../components/connectors/WalletConnect"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div
        style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
      >
        <MetaMaskCard />
        <WalletConnectCard />
      </div>
    </>
  );
}
