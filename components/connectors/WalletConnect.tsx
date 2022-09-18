import { hooks, walletConnect } from "../../connectors/walletConnect";
import { Accounts } from "../Accounts";
import { Card } from "../Card";
import { Chain } from "../Chain";
import { Connect } from "../Connect";
import { Status } from "../Status";
import { ethers } from "ethers";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
  useWeb3React
} = hooks;

export default function WalletConnectCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const createTx = () => {
    const signer = provider.getSigner();

    console.log("signer", signer);

    signer
      .sendTransaction({
        from: "0x8A92c4Ad5E98cb96d0D9dd740daDB7b7e1a6C2D8",
        to: "0xaba0472bfE9a0Cb44921e77D0857bA854bcE1c1C",
        value: ethers.utils.parseEther("0.001")
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <Card>
      <div>
        <b>WalletConnect</b>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: "1rem" }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: "1rem" }} />
      <Connect
        activate={() => walletConnect.activate()}
        deactivate={() => walletConnect.deactivate()}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
      <button onClick={createTx} disabled={!isActive}>
        tx
      </button>
    </Card>
  );
}
