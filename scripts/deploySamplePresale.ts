import { Address, comment, toNano } from '@ton/core';
// import { SampleJetton } from '../wrappers/SampleJetton';
import { NetworkProvider } from '@ton/blueprint';
import {SamplePresale} from "../build/smaplePresale/tact_SamplePresale"
import { SampleJetton } from '../wrappers/tact_SampleJetton';
// import { buildOnchainMetadata } from '../utils/jetton-helpers';
// import {JettonDefaultWallet} from "../build/SampleJetton/tact_JettonDefaultWallet"

export async function run(provider: NetworkProvider) {
    // const jettonParams = {
    //     name: "Abhishek",
    //     description: "Virtual Height is a premier mobile and web app development company based in Ahmedabad, India. Offering cutting-edge solutions, we specialize in transforming",
    //     symbol: "Abhi",
    //     image: "https://www.virtualheight.com/img/vh-main-small-white.png",
    // };

    // Create content Cell
    // let content = buildOnchainMetadata(jettonParams);

    // const samplePresale = provider.open(await SamplePresale.fromInit());
    const samplePresale = provider.open(await SamplePresale.fromAddress(
      Address.parse("EQDj_bE4uzKaMmg3ZFWhaHSK2iS0bS482WvvKDbFRTo10g0A")
    ));

    // await samplePresale.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //     {
    //         $$type: 'Deploy',
    //         queryId: 0n
    //     }
    // );

    // await provider.waitForDeploy(samplePresale.address);

    // await samplePresale.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.5'),
    //     },
    //     {
    //         $$type: 'BuyTokens',
    //         Amount: 100n,
    //         masterAddress: Address.parse("0QBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4p4q") as Address,
    //         userAddress: Address.parse("0QBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4p4q") as Address,
    //     }
    // );

    // const tx =  await samplePresale.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //      'withdraw safe',
    // );


    // for (let i = 0n; i < 10n; i++) {
    //  const walletData = await samplePresale.getGetTokenInfo(i);
    //  console.log(walletData);
    // }
    const walletDatas1 = await samplePresale.getGetData( Address.parse("0QBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4p4q") as Address,1n);
     console.log(walletDatas1);

     const walletDatas = await samplePresale.getGetData( Address.parse("0QBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4p4q") as Address,2n);
     console.log(walletDatas);

    //  const balance = await samplePresale.getBalance();
    //  console.log(balance);

    // const sampleJetton = provider.open(await SampleJetton.fromAddress(Address.parse("EQCnQmewXEhBOpAmZKITlNl4QaHMkaFIJqSNdJPfvwiR77er")));

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
    // // );

    // const callerToken = provider.open(Caller22.fromAddress(Address.parse("EQAuGAFHQgr9oyXwOFeCTxxW_Bgy5PJYvfnoad4aK-Yt428x")));
    
    const sampleJetton = provider.open(SampleJetton.fromAddress(Address.parse("kQDPaqVHTSDzv1GMvIUS9agdoDy_TVZ2qraVDF6fKR7y_JTq")));
    const contwalladd = await sampleJetton.getGetWalletAddress(Address.parse("EQDj_bE4uzKaMmg3ZFWhaHSK2iS0bS482WvvKDbFRTo10g0A"));
    console.log(contwalladd);
    
    await samplePresale.send(
        provider.sender(),

        {
            value: toNano(0.05),
        },  
        {
            $$type: 'ClaimTokens',
            amount:10n,
            cenderadd:contwalladd,
            senderadd:Address.parse("0QBony_meSMNl6w6cMQpEvW9dQbvy-AwJFKDJeA5CydJ4p4q"),
        }
    );
    // await provider.waitForDeploy(sampleJetton.address);

    // const jettonWalletContract = await provider.open(
    //     await JettonDefaultWallet.fromInit(
    //         Address.parse("EQCnQmewXEhBOpAmZKITlNl4QaHMkaFIJqSNdJPfvwiR77er"),
    //         Address.parse("0QCL20gS8GdNJy5hLuJjxwCFTL9kveyW3yiC4wqdosCT2Q0A")
    //     )
    // );

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

    // console.log("-------------------------------------")

    // const walletData = await jettonWalletContract.getGetWalletData();
    // console.log(`jetton wallet owner: ${walletData.owner}`);
    // console.log(`jetton wallet master: ${walletData.master}`);
    // console.log(`jetton wallet balance: ${walletData.balance}`);
    // console.log(`jetton wallet balance: ${walletData.walletCode}`);
}
