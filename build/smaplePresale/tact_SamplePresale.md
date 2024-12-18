# TACT Compilation Report
Contract: SamplePresale
BOC Size: 15147 bytes

# Types
Total Types: 53

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## JettonWalletData
TLB: `_ balance:int257 owner:address master:address walletCode:^cell = JettonWalletData`
Signature: `JettonWalletData{balance:int257,owner:address,master:address,walletCode:^cell}`

## TokenTransfer
TLB: `token_transfer#0f8a7ea5 queryId:uint64 amount:coins destination:address response_destination:address custom_payload:Maybe ^cell forward_ton_amount:coins forward_payload:remainder<slice> = TokenTransfer`
Signature: `TokenTransfer{queryId:uint64,amount:coins,destination:address,response_destination:address,custom_payload:Maybe ^cell,forward_ton_amount:coins,forward_payload:remainder<slice>}`

## TokenTransferInternal
TLB: `token_transfer_internal#178d4519 queryId:uint64 amount:coins from:address response_destination:address forward_ton_amount:coins forward_payload:remainder<slice> = TokenTransferInternal`
Signature: `TokenTransferInternal{queryId:uint64,amount:coins,from:address,response_destination:address,forward_ton_amount:coins,forward_payload:remainder<slice>}`

## TokenNotification
TLB: `token_notification#7362d09c queryId:uint64 amount:coins from:address forward_payload:remainder<slice> = TokenNotification`
Signature: `TokenNotification{queryId:uint64,amount:coins,from:address,forward_payload:remainder<slice>}`

## TokenBurn
TLB: `token_burn#595f07bc queryId:uint64 amount:coins owner:address response_destination:address = TokenBurn`
Signature: `TokenBurn{queryId:uint64,amount:coins,owner:address,response_destination:address}`

## TokenBurnNotification
TLB: `token_burn_notification#7bdd97de queryId:uint64 amount:coins owner:address response_destination:Maybe address = TokenBurnNotification`
Signature: `TokenBurnNotification{queryId:uint64,amount:coins,owner:address,response_destination:Maybe address}`

## TokenExcesses
TLB: `token_excesses#d53276db queryId:uint64 = TokenExcesses`
Signature: `TokenExcesses{queryId:uint64}`

## TokenUpdateContent
TLB: `token_update_content#af1ca26a content:^cell = TokenUpdateContent`
Signature: `TokenUpdateContent{content:^cell}`

## TokenDistributeInfo
TLB: `_ name:^string tokenDistrubutedPercentage:int257 totalPhaseToken:coins percentage:int257 totalSuppliedToken:coins = TokenDistributeInfo`
Signature: `TokenDistributeInfo{name:^string,tokenDistrubutedPercentage:int257,totalPhaseToken:coins,percentage:int257,totalSuppliedToken:coins}`

## UserData
TLB: `_ beneficiary:address totalToken:coins remainingToken:coins startTime:int257 vestingDuration:int257 lastClaimTime:int257 initialCliff:int257 releaseInterval:int257 phaseName:^string active:bool USDTToken:coins = UserData`
Signature: `UserData{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,initialCliff:int257,releaseInterval:int257,phaseName:^string,active:bool,USDTToken:coins}`

## TokenVestingInfo
TLB: `_ beneficiary:address totalToken:coins remainingToken:coins startTime:int257 vestingDuration:int257 lastClaimTime:int257 releaseInterval:int257 initialCliff:int257 phaseName:^string active:bool USDTToken:coins = TokenVestingInfo`
Signature: `TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}`

## UserArrayData
TLB: `_ data:dict<int, ^UserData{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,initialCliff:int257,releaseInterval:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = UserArrayData`
Signature: `UserArrayData{data:dict<int, ^UserData{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,initialCliff:int257,releaseInterval:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## RefferData
TLB: `_ refferalAddress:address amount:int257 date:int257 claim:bool = RefferData`
Signature: `RefferData{refferalAddress:address,amount:int257,date:int257,claim:bool}`

## RefferDetails
TLB: `_ reffer:dict<int, ^RefferData{refferalAddress:address,amount:int257,date:int257,claim:bool}> size:int257 = RefferDetails`
Signature: `RefferDetails{reffer:dict<int, ^RefferData{refferalAddress:address,amount:int257,date:int257,claim:bool}>,size:int257}`

## PrivateSaleArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = PrivateSaleArrayData`
Signature: `PrivateSaleArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## MarketingArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = MarketingArrayData`
Signature: `MarketingArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## TeamArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = TeamArrayData`
Signature: `TeamArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## AdvisorArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = AdvisorArrayData`
Signature: `AdvisorArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## TreasuryArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}> size:int257 = TreasuryArrayData`
Signature: `TreasuryArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,totalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string,active:bool,USDTToken:coins}>,size:int257}`

## AllData
TLB: `_ USDTAmount:coins balance:^string presaleStatus:bool privatesaleStatus:bool presaleTime:int257 BZZNPriceInUSD:int257 referralPercentage:int257 minimumBuyPrice:coins maximumBuyPrice:coins tokenData:dict<int, ^TokenDistributeInfo{name:^string,tokenDistrubutedPercentage:int257,totalPhaseToken:coins,percentage:int257,totalSuppliedToken:coins}> activeRoundIndex:int257 = AllData`
Signature: `AllData{USDTAmount:coins,balance:^string,presaleStatus:bool,privatesaleStatus:bool,presaleTime:int257,BZZNPriceInUSD:int257,referralPercentage:int257,minimumBuyPrice:coins,maximumBuyPrice:coins,tokenData:dict<int, ^TokenDistributeInfo{name:^string,tokenDistrubutedPercentage:int257,totalPhaseToken:coins,percentage:int257,totalSuppliedToken:coins}>,activeRoundIndex:int257}`

## DynamicRoundInfo
TLB: `_ roundIndex:int257 startTime:int257 endTime:int257 price:int257 totalToken:coins remainingToken:coins active:bool = DynamicRoundInfo`
Signature: `DynamicRoundInfo{roundIndex:int257,startTime:int257,endTime:int257,price:int257,totalToken:coins,remainingToken:coins,active:bool}`

## BuyTokens
TLB: `buy_tokens#d6faa0a4 referrer:address tonAmount:coins usdtAmount:coins buyType:int257 = BuyTokens`
Signature: `BuyTokens{referrer:address,tonAmount:coins,usdtAmount:coins,buyType:int257}`

## ClaimReferralTokens
TLB: `claim_referral_tokens#76a9753f cenderadd:address = ClaimReferralTokens`
Signature: `ClaimReferralTokens{cenderadd:address}`

## PrivateSaleMessage
TLB: `private_sale_message#9c65dad8 amount:int257 UserAddress:address = PrivateSaleMessage`
Signature: `PrivateSaleMessage{amount:int257,UserAddress:address}`

## MarketingMessage
TLB: `marketing_message#5e97c4a3 amount:int257 UserAddress:address = MarketingMessage`
Signature: `MarketingMessage{amount:int257,UserAddress:address}`

## TeamMessage
TLB: `team_message#d6257545 amount:int257 UserAddress:address = TeamMessage`
Signature: `TeamMessage{amount:int257,UserAddress:address}`

## AdvisorMessage
TLB: `advisor_message#1e6127b4 amount:int257 UserAddress:address = AdvisorMessage`
Signature: `AdvisorMessage{amount:int257,UserAddress:address}`

## TreasuryMessage
TLB: `treasury_message#fa93f8ed amount:int257 UserAddress:address = TreasuryMessage`
Signature: `TreasuryMessage{amount:int257,UserAddress:address}`

## ClaimSingleToken
TLB: `claim_single_token#9d9fc853 index:int257 cenderadd:address senderadd:address = ClaimSingleToken`
Signature: `ClaimSingleToken{index:int257,cenderadd:address,senderadd:address}`

## ClaimPrivateSaleTokens
TLB: `claim_private_sale_tokens#107d24eb index:int257 cenderadd:address senderadd:address = ClaimPrivateSaleTokens`
Signature: `ClaimPrivateSaleTokens{index:int257,cenderadd:address,senderadd:address}`

## ClaimMarketingeTokens
TLB: `claim_marketinge_tokens#1dec6ced index:int257 cenderadd:address senderadd:address = ClaimMarketingeTokens`
Signature: `ClaimMarketingeTokens{index:int257,cenderadd:address,senderadd:address}`

## ClaimTeamTokens
TLB: `claim_team_tokens#b07b0498 index:int257 cenderadd:address senderadd:address = ClaimTeamTokens`
Signature: `ClaimTeamTokens{index:int257,cenderadd:address,senderadd:address}`

## ClaimAdvisorTokens
TLB: `claim_advisor_tokens#082a491c index:int257 cenderadd:address senderadd:address = ClaimAdvisorTokens`
Signature: `ClaimAdvisorTokens{index:int257,cenderadd:address,senderadd:address}`

## ClaimTreasuryTokens
TLB: `claim_treasury_tokens#2b0d7ffd index:int257 cenderadd:address senderadd:address = ClaimTreasuryTokens`
Signature: `ClaimTreasuryTokens{index:int257,cenderadd:address,senderadd:address}`

## WithdrawUsdt
TLB: `withdraw_usdt#d69f6004 cenderadd:address = WithdrawUsdt`
Signature: `WithdrawUsdt{cenderadd:address}`

## WithdrawUsdtWithNumber
TLB: `withdraw_usdt_with_number#051d549a cenderadd:address amount:int257 = WithdrawUsdtWithNumber`
Signature: `WithdrawUsdtWithNumber{cenderadd:address,amount:int257}`

## WithdrawBZZN
TLB: `withdraw_bzzn#82ed1338 cenderadd:address amount:int257 = WithdrawBZZN`
Signature: `WithdrawBZZN{cenderadd:address,amount:int257}`

## ChangeTokenPrice
TLB: `change_token_price#85337528 price:int257 = ChangeTokenPrice`
Signature: `ChangeTokenPrice{price:int257}`

## ChangeSeedRoundTimeMessage
TLB: `change_seed_round_time_message#a8f8cbf9 time:int257 = ChangeSeedRoundTimeMessage`
Signature: `ChangeSeedRoundTimeMessage{time:int257}`

## ChangeReferralPercentageMessage
TLB: `change_referral_percentage_message#f5256101 percentage:int257 = ChangeReferralPercentageMessage`
Signature: `ChangeReferralPercentageMessage{percentage:int257}`

## MaximumUsdtAmountMessage
TLB: `maximum_usdt_amount_message#bb004af8 amount:int257 = MaximumUsdtAmountMessage`
Signature: `MaximumUsdtAmountMessage{amount:int257}`

## MinimumUsdtAmountMessage
TLB: `minimum_usdt_amount_message#5c420d4c amount:int257 = MinimumUsdtAmountMessage`
Signature: `MinimumUsdtAmountMessage{amount:int257}`

## CreateDynamicRoundMessage
TLB: `create_dynamic_round_message#514313eb startTime:int257 endTime:int257 price:int257 totalToken:coins = CreateDynamicRoundMessage`
Signature: `CreateDynamicRoundMessage{startTime:int257,endTime:int257,price:int257,totalToken:coins}`

## UpdateDynamicRoundMessage
TLB: `update_dynamic_round_message#76c144f1 roundIndex:int257 startTime:int257 endTime:int257 price:int257 totalToken:coins = UpdateDynamicRoundMessage`
Signature: `UpdateDynamicRoundMessage{roundIndex:int257,startTime:int257,endTime:int257,price:int257,totalToken:coins}`

## StartDynamicRoundMessage
TLB: `start_dynamic_round_message#4b7897ed roundIndex:int257 = StartDynamicRoundMessage`
Signature: `StartDynamicRoundMessage{roundIndex:int257}`

# Get Methods
Total Get Methods: 13

## getData
Argument: addr
Argument: num

## getAllSeedTokenData
Argument: addr

## getAllSeedData

## getAllData

## getAllPrivateTokenData
Argument: addr

## getAllMarketingTokenData
Argument: addr

## getAllTeamTokenData
Argument: addr

## getAllAdvisorTokenData
Argument: addr

## getAllTreasuryTokenData
Argument: addr

## getAllReferralDetails
Argument: referrerAddress

## getReferrer
Argument: userAddress

## getDynamicRoundData

## owner

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
1275: Presale is not start yet
7212: Invalid Token
10278: Invalid Round Index
12033: Invalid Time
12812: Invalid Price
23478: Presale is not over Yet
27921: Only owner is allowed to withdraw
30183: NO_REFERRAL_TOKENS_AVAILABLE
32633: Presale is over
35441: Seed Token Supply is completed
36571: SEEDROUND_PERIOD_INCOMPLETE
38387: Contract does not have usdt
43297: Index not found!
44418: You have not sufficient Token
46387: not have any refferals
48332: Invalid USDT Amount
54634: You are not owner
60511: ALREADY_ADDED_REFERRER
63386: privatesale is not start yet
63810: Privatesale Token Supply is completed