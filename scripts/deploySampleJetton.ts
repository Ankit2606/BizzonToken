import { Address, comment, toNano } from '@ton/core';
import { SampleJetton } from '../wrappers/SampleJetton';
import { NetworkProvider } from '@ton/blueprint';
import { buildOnchainMetadata } from '../utils/jetton-helpers';
import {JettonDefaultWallet} from "../build/SampleJetton/tact_JettonDefaultWallet"

export async function run(provider: NetworkProvider) {
    const jettonParams = {
        name: "Abhishek",
        description: "Virtual Height is a premier mobile and web app development company based in Ahmedabad, India. Offering cutting-edge solutions, we specialize in transforming",
        symbol: "Abhi",
        image: "https://www.virtualheight.com/img/vh-main-small-white.png",
    };

    // Create content Cell
    let content = buildOnchainMetadata(jettonParams);

    // const sampleJetton = provider.open(await SampleJetton.fromInit(provider.sender().address as Address, content, 1000000000000000000n));

    const sampleJetton = provider.open(await SampleJetton.fromAddress(Address.parse("EQCnQmewXEhBOpAmZKITlNl4QaHMkaFIJqSNdJPfvwiR77er")));

    // await sampleJetton.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //     {
    //         $$type: 'Mint',
    //         amount: 100000000000000000n,
    //         receiver: provider.sender().address as Address
    //     }
    // );

    // await provider.waitForDeploy(sampleJetton.address);

    const jettonWalletContract = await provider.open(
        await JettonDefaultWallet.fromInit(
            Address.parse("EQCnQmewXEhBOpAmZKITlNl4QaHMkaFIJqSNdJPfvwiR77er"),
            Address.parse("0QCL20gS8GdNJy5hLuJjxwCFTL9kveyW3yiC4wqdosCT2Q0A")
        )
    );

    // await jettonWalletContract.send(
    //     provider.sender(),
    //     {
    //         value: toNano("1"),
    //         bounce: false,
    //     },
    //     {
    //         $$type: "TokenTransfer",
    //         queryId: BigInt(Math.floor(Date.now() / 1000)),
    //         amount: toNano("1"),
    //         destination: Address.parse("0QCL20gS8GdNJy5hLuJjxwCFTL9kveyW3yiC4wqdosCT2Q0A"),
    //         response_destination: Address.parse("EQBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4nhl"),
    //         custom_payload: comment("transfer jetton"),
    //         forward_ton_amount: toNano("0.1"),
    //         forward_payload: comment("forward_payload"),
    //     }
    // );

    console.log("-------------------------------------")

    const walletData = await jettonWalletContract.getGetWalletData();
    console.log(`jetton wallet owner: ${walletData.owner}`);
    console.log(`jetton wallet master: ${walletData.master}`);
    console.log(`jetton wallet balance: ${walletData.balance}`);
    console.log(`jetton wallet balance: ${walletData.walletCode}`);
}
