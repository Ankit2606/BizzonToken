# TACT Compilation Report
Contract: SamplePresale
BOC Size: 10072 bytes

# Types
Total Types: 37

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

## TokenDistrubuteInfo
TLB: `_ name:^string tokenDistrubutedPercentage:int257 totalPhaseToken:coins percentage:int257 totalSuppliedToken:coins = TokenDistrubuteInfo`
Signature: `TokenDistrubuteInfo{name:^string,tokenDistrubutedPercentage:int257,totalPhaseToken:coins,percentage:int257,totalSuppliedToken:coins}`

## UserData
TLB: `_ UserAddress:address TotalToken:coins RemainingToken:coins StartTime:int257 VestingDuration:int257 LastClaimTime:int257 CliffTime:int257 ReleaseInterval:int257 PhaseName:^string Active:bool TonToken:coins = UserData`
Signature: `UserData{UserAddress:address,TotalToken:coins,RemainingToken:coins,StartTime:int257,VestingDuration:int257,LastClaimTime:int257,CliffTime:int257,ReleaseInterval:int257,PhaseName:^string,Active:bool,TonToken:coins}`

## TokenVestingInfo
TLB: `_ beneficiary:address TotalToken:coins remainingToken:coins startTime:int257 vestingDuration:int257 lastClaimTime:int257 releaseInterval:int257 initialCliff:int257 phaseName:^string = TokenVestingInfo`
Signature: `TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}`

## UserArrayData
TLB: `_ data:dict<int, ^UserData{UserAddress:address,TotalToken:coins,RemainingToken:coins,StartTime:int257,VestingDuration:int257,LastClaimTime:int257,CliffTime:int257,ReleaseInterval:int257,PhaseName:^string,Active:bool,TonToken:coins}> size:int257 = UserArrayData`
Signature: `UserArrayData{data:dict<int, ^UserData{UserAddress:address,TotalToken:coins,RemainingToken:coins,StartTime:int257,VestingDuration:int257,LastClaimTime:int257,CliffTime:int257,ReleaseInterval:int257,PhaseName:^string,Active:bool,TonToken:coins}>,size:int257}`

## PrivateSaleArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}> size:int257 = PrivateSaleArrayData`
Signature: `PrivateSaleArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}>,size:int257}`

## MarketingArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}> size:int257 = MarketingArrayData`
Signature: `MarketingArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}>,size:int257}`

## TeamArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}> size:int257 = TeamArrayData`
Signature: `TeamArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}>,size:int257}`

## AdvisorArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}> size:int257 = AdvisorArrayData`
Signature: `AdvisorArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}>,size:int257}`

## TreasuryArrayData
TLB: `_ data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}> size:int257 = TreasuryArrayData`
Signature: `TreasuryArrayData{data:dict<int, ^TokenVestingInfo{beneficiary:address,TotalToken:coins,remainingToken:coins,startTime:int257,vestingDuration:int257,lastClaimTime:int257,releaseInterval:int257,initialCliff:int257,phaseName:^string}>,size:int257}`

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

## ClaimTokens
TLB: `claim_tokens#052de464 amount:int257 cenderadd:address senderadd:address = ClaimTokens`
Signature: `ClaimTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimPrivateSaleTokens
TLB: `claim_private_sale_tokens#e05cba04 amount:int257 cenderadd:address senderadd:address = ClaimPrivateSaleTokens`
Signature: `ClaimPrivateSaleTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimMarketingeTokens
TLB: `claim_marketinge_tokens#e06accbb amount:int257 cenderadd:address senderadd:address = ClaimMarketingeTokens`
Signature: `ClaimMarketingeTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimTeamTokens
TLB: `claim_team_tokens#c8e628b9 amount:int257 cenderadd:address senderadd:address = ClaimTeamTokens`
Signature: `ClaimTeamTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimAdvisorTokens
TLB: `claim_advisor_tokens#fc729521 amount:int257 cenderadd:address senderadd:address = ClaimAdvisorTokens`
Signature: `ClaimAdvisorTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimTreasuryTokens
TLB: `claim_treasury_tokens#1f73bf94 amount:int257 cenderadd:address senderadd:address = ClaimTreasuryTokens`
Signature: `ClaimTreasuryTokens{amount:int257,cenderadd:address,senderadd:address}`

## ClaimSingleToken
TLB: `claim_single_token#9d9fc853 index:int257 cenderadd:address senderadd:address = ClaimSingleToken`
Signature: `ClaimSingleToken{index:int257,cenderadd:address,senderadd:address}`

# Get Methods
Total Get Methods: 10

## getData
Argument: addr
Argument: num

## balance

## getAllSeedTokenData
Argument: addr

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

## getTokonomicsData

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
15509: Only deployer is allowed to withdraw
35441: Seed Token Supply is completed
43297: Index not found!
44418: You have not sufficient Token