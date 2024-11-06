import "@stdlib/ownable";
import "@stdlib/deploy";
import "./messages.tact";

struct TokenDistrubuteInfo {
  name: String;
  tokenDistrubutedPercentage : Int;
  totalPhaseToken: Int as coins;
  percentage: Int;
  totalSuppliedToken: Int as coins;
}

struct UserData{
  UserAddress : Address;
  TotalToken : Int as coins;
  RemainingToken : Int as coins;
  StartTime: Int;
  VestingDuration: Int;
  LastClaimTime: Int;
  CliffTime: Int;
  ReleaseInterval: Int;
  PhaseName: String;
  Active: Bool;
  TonToken : Int as coins;
}

struct TokenVestingInfo {
  beneficiary : Address;
  TotalToken : Int as coins ;
  remainingToken : Int as coins ;
  startTime : Int ;
  vestingDuration : Int ;
  lastClaimTime : Int ;
  releaseInterval : Int ;
  initialCliff : Int ;
  phaseName : String ;
}

struct UserArrayData{
  data: map<Int,UserData>;
  size : Int;
}


struct RefferData {
  refferalAddress: Address;
  amount: Int;
  claim: Bool;
}

struct RefferDetails{
  reffer: map<Int,RefferData>;
  size : Int;
}

struct PrivateSaleArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

struct MarketingArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

struct TeamArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

struct AdvisorArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

struct TreasuryArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

message BuyTokens{
  referrer: Address;
  usdt: Int as coins;
}

message AddReferAddress{
  referrer : Address;
}

message ClaimReferralTokens{
  cenderadd : Address;
}

message PrivateSaleMessage{
  amount : Int;
  UserAddress : Address;
}

message MarketingMessage{
  amount : Int;
  UserAddress : Address;
}

message TeamMessage{
  amount : Int;
  UserAddress : Address;
}

message AdvisorMessage{
  amount : Int;
  UserAddress : Address;
}

message TreasuryMessage{
  amount : Int;
  UserAddress : Address;
}

message ClaimTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimSingleToken {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimPrivateSaleTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimMarketingeTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimTeamTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimAdvisorTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimTreasuryTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}

contract SamplePresale with Ownable, Deployable {

  const MinTonForStorage: Int = ton("0.1");
  const REFERRAL_VALUE : Int = 1;
  
  TonVal : Int = 100;
  owner: Address;
  TonBalance : Int as coins;
  TokenData: map<Int, TokenDistrubuteInfo>;
  SeedData: map<Address, UserArrayData>;
  PrivateSaleData: map<Address, PrivateSaleArrayData>;
  MarketingData: map<Address, MarketingArrayData>;
  TeamData: map<Address, TeamArrayData>;
  AdvisorData: map<Address, AdvisorArrayData>;
  TreasuryData: map<Address, TreasuryArrayData>;
  checkReferrers: map<Address, Address>;
  refferInfo: map<Address, RefferDetails>;

  init(){
    self.owner = sender();
    self.TonBalance = 0;

    self.TokenData.set(0,
      TokenDistrubuteInfo{
        name: "Seed Round Financing",
        tokenDistrubutedPercentage : 3,
        totalPhaseToken: ton("2668500"),
        percentage: 555,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(1,
      TokenDistrubuteInfo{
        name: "Private Sale Round Financing",
        tokenDistrubutedPercentage :11,
        totalPhaseToken: ton("9784500"),
        percentage: 455,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(2,
      TokenDistrubuteInfo{
        name: "Public Sale",
       tokenDistrubutedPercentage : 3,
        totalPhaseToken: ton("2668500"),
        percentage: 0,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(3,
      TokenDistrubuteInfo{
        name: "Ecosystem and Community",
        tokenDistrubutedPercentage : 15,
        totalPhaseToken: ton("13342500"),
        percentage: 0,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(4,
      TokenDistrubuteInfo{
        name: "Team tokens",
       tokenDistrubutedPercentage : 21,
        totalPhaseToken: ton("18679500"),
        percentage: 278,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(5,
      TokenDistrubuteInfo{
        name: "Advisors and consultancy",
       tokenDistrubutedPercentage : 3,
        totalPhaseToken: ton("2668500"),
        percentage: 417,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(6,
      TokenDistrubuteInfo{
        name: "Staking Rewards",
     tokenDistrubutedPercentage : 6,
        totalPhaseToken: ton("5337000"),
        percentage: 0,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(7,
      TokenDistrubuteInfo{
        name: "Cross-Economy System",
        tokenDistrubutedPercentage : 10,
        totalPhaseToken: ton("8895000"),
        percentage: 0,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(8,
      TokenDistrubuteInfo{
        name: "Liquidity",
        tokenDistrubutedPercentage : 10,
        totalPhaseToken: ton("8895000"),
        percentage: 0,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(9,
      TokenDistrubuteInfo{
        name: "Marketing",
       tokenDistrubutedPercentage : 5,
        totalPhaseToken: ton("4447500"),
        percentage: 555,
        totalSuppliedToken: 0
      }
    );
    self.TokenData.set(10,
      TokenDistrubuteInfo{
        name: "Treasury Reserves",
        tokenDistrubutedPercentage : 13,
        totalPhaseToken: ton("11563500"),
        percentage: 417,
        totalSuppliedToken: 0
      }
    );
  }

  receive(msg: BuyTokens){
    let ctx:Context = context();
    let fee:Int  = ctx.readForwardFee();
    let TokenAmount : Int = (ctx.value - fee) * self.TonVal;
    let gotButUnsure: UserArrayData? = self.SeedData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(0)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + TokenAmount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
    let gotButsure: UserArrayData = self.SeedData.get(sender())!!;
    let userInfo : UserData = UserData{
        UserAddress : sender(),
        TotalToken : TokenAmount,
        RemainingToken : TokenAmount,
        StartTime: now(),
        VestingDuration: now() + 300,
        LastClaimTime: now() + 30,
        CliffTime: 90,
        ReleaseInterval: 30,
        PhaseName: seedData.name,
        Active : true,
        TonToken : ctx.value,
    };
    
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.SeedData.set(sender(),gotButsure);
    } else {
      let newadd : Address = newAddress(0,0);
      if(msg.referrer != newadd){
        self.AddReferAddress(msg.referrer, msg.usdt);
      }
      let getData: UserArrayData? = self.SeedData.get(sender());
      let x : map<Int,UserData> = emptyMap();
      let userInfo : UserData = UserData{
       UserAddress : sender(),
        TotalToken : TokenAmount,
        RemainingToken : TokenAmount,
        StartTime: now(),
        VestingDuration: now() + 300,
        LastClaimTime: now() + 30,
        CliffTime: 90,
        ReleaseInterval:  30,
        PhaseName: seedData.name,
        Active : true,
        TonToken : ctx.value,
    };
    x.set(1,userInfo);
    let storeData : UserArrayData  = UserArrayData {
      data : x,
      size:1,
    };
    self.SeedData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += TokenAmount;
    self.TokenData.set(0,seedData);
  }

  receive(msg : PrivateSaleMessage){
    let ctx:Context = context();
    let gotButUnsure: PrivateSaleArrayData? = self.PrivateSaleData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(1)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: PrivateSaleArrayData = self.PrivateSaleData.get(sender())!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.PrivateSaleData.set(sender(),gotButsure);
    } else {
      let getData: PrivateSaleArrayData? = self.PrivateSaleData.get(sender());
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    x.set(1,userInfo);
    let storeData : PrivateSaleArrayData  = PrivateSaleArrayData {
      data : x,
      size:1,
    };
    self.PrivateSaleData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(1,seedData);
  }

  receive(msg : MarketingMessage){
    let ctx:Context = context();
    let gotButUnsure: MarketingArrayData? = self.MarketingData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(9)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: MarketingArrayData = self.MarketingData.get(sender())!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.MarketingData.set(sender(),gotButsure);
    } else {
      let getData: MarketingArrayData? = self.MarketingData.get(sender());
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    x.set(1,userInfo);
    let storeData : MarketingArrayData  = MarketingArrayData {
      data : x,
      size:1,
    };
    self.MarketingData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(9,seedData);
  }

  receive(msg : TeamMessage){
    let ctx:Context = context();
    let gotButUnsure: TeamArrayData? = self.TeamData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(4)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: TeamArrayData = self.TeamData.get(sender())!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.TeamData.set(sender(),gotButsure);
    } else {
      let getData: TeamArrayData? = self.TeamData.get(sender());
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    x.set(1,userInfo);
    let storeData : TeamArrayData  = TeamArrayData {
      data : x,
      size:1,
    };
    self.TeamData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(4,seedData);
  }

  receive(msg : AdvisorMessage){
    let ctx:Context = context();
    let gotButUnsure: AdvisorArrayData? = self.AdvisorData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(5)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: AdvisorArrayData = self.AdvisorData.get(sender())!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.AdvisorData.set(sender(),gotButsure);
    } else {
      let getData: AdvisorArrayData? = self.AdvisorData.get(sender());
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    x.set(1,userInfo);
    let storeData : AdvisorArrayData  = AdvisorArrayData {
      data : x,
      size:1,
    };
    self.AdvisorData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(5,seedData);
  }

  receive(msg : TreasuryMessage){
    let ctx:Context = context();
    let gotButUnsure: TreasuryArrayData? = self.TreasuryData.get(sender());
    let seedData : TokenDistrubuteInfo = self.TokenData.get(10)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: TreasuryArrayData = self.TreasuryData.get(sender())!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.TreasuryData.set(sender(),gotButsure);
    } else {
      let getData: TreasuryArrayData? = self.TreasuryData.get(sender());
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        TotalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 300 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
    };
    x.set(1,userInfo);
    let storeData : TreasuryArrayData  = TreasuryArrayData {
      data : x,
      size:1,
    };
    self.TreasuryData.set(sender(),storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(10,seedData);
  }

  receive("withdraw safe") {
        require(sender() == self.owner, "Only deployer is allowed to withdraw");
        send(SendParameters{
            to: sender(),
            bounce: true,
            value: myBalance() - self.MinTonForStorage,
            mode: SendRemainingValue + SendIgnoreErrors
        });
  }

  receive(msg:ClaimTokens){
      let presaleData : UserArrayData = self.SeedData.get(sender())!!;
      let size:Int =presaleData.size;
      let x:map<Int,UserData> =  presaleData.data;
      let amount: Int = 0;
      foreach(key, value in x){
          if (now() >= value.VestingDuration) {
            amount += value.RemainingToken;
            value.Active = false;
            value.LastClaimTime = value.VestingDuration;
            value.RemainingToken = 0;
            x.set(key,value);
            let newStruct: UserArrayData = UserArrayData{
              data:x,
              size:size,
            };
            self.SeedData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.LastClaimTime) /
                value.ReleaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.LastClaimTime += totalClaim * value.ReleaseInterval;
            value.RemainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: UserArrayData = UserArrayData{
              data:x,
              size:size,
            };
            self.SeedData.set(sender(),newStruct);
        }
      }
        require(amount != 0,"You have not sufficient Token");
         send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
            });
  } 

  receive(msg:ClaimSingleToken){
      let presaleData : UserArrayData = self.SeedData.get(sender())!!;
      let size : Int =presaleData.size;
      let x : map<Int,UserData> =  presaleData.data;
      let cheker : UserData? =  presaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : UserData =  presaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.VestingDuration) {
          amount += value.RemainingToken;
          value.Active = false;
          value.LastClaimTime = value.VestingDuration;
          value.RemainingToken = 0;
          x.set(msg.index,value);
          let newStruct: UserArrayData = UserArrayData{
            data:x,
            size:size,
          };
          self.SeedData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.LastClaimTime) /
              value.ReleaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.LastClaimTime += totalClaim * value.ReleaseInterval;
          value.RemainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: UserArrayData = UserArrayData{
            data:x,
            size:size,
          };
          self.SeedData.set(sender(),newStruct);
      }
      
      require(amount != 0,"You have not sufficient Token");
      send(SendParameters{
              to: msg.cenderadd,
              value: 0,
              mode:  SendRemainingBalance,
              bounce: true,
              body: TokenTransfer{
                  queryId:0,
                  amount: amount,
                  destination: msg.senderadd,
                  response_destination: msg.senderadd,
                  custom_payload: null,
                  forward_ton_amount: 1,
                  forward_payload: "".asComment().beginParse(),
              }.toCell()
      });
  } 

  receive(msg : ClaimPrivateSaleTokens) {
    let privatesaleData : PrivateSaleArrayData = self.PrivateSaleData.get(sender())!!;
    let size:Int =privatesaleData.size;
    let x:map<Int,TokenVestingInfo> =  privatesaleData.data;
    let amount: Int = 0;
    foreach(key, value in x){
        if (now() >= value.vestingDuration) {
            amount += value.remainingToken;
            value.lastClaimTime = value.vestingDuration;
            value.remainingToken = 0;
            x.set(key,value);
            let newStruct: PrivateSaleArrayData = PrivateSaleArrayData{
              data:x,
              size:size,
            };
            self.PrivateSaleData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.lastClaimTime) /
                value.releaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(1)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.lastClaimTime += totalClaim * value.releaseInterval;
            value.remainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: PrivateSaleArrayData = PrivateSaleArrayData{
              data:x,
              size:size,
            };
            self.PrivateSaleData.set(sender(),newStruct);
        }
        require(amount == 0,"You have not sufficient Token");
      }
         send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
            });
  }

  receive(msg : ClaimMarketingeTokens) {
    let marketingData : MarketingArrayData = self.MarketingData.get(sender())!!;
    let size:Int = marketingData.size;
    let x:map<Int,TokenVestingInfo> =  marketingData.data;
    let amount: Int = 0;
    foreach(key, value in x){
        if (now() >= value.vestingDuration) {
            amount += value.remainingToken;
            value.lastClaimTime = value.vestingDuration;
            value.remainingToken = 0;
            x.set(key,value);
            let newStruct: MarketingArrayData = MarketingArrayData{
              data:x,
              size:size,
            };
            self.MarketingData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.lastClaimTime) /
                value.releaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(9)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.lastClaimTime += totalClaim * value.releaseInterval;
            value.remainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: MarketingArrayData = MarketingArrayData{
              data:x,
              size:size,
            };
            self.MarketingData.set(sender(),newStruct);
        }
        require(amount == 0,"You have not sufficient Token");
      }
         send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
            });
  }

  receive(msg : ClaimTeamTokens) {
    let teamDataInfo : TeamArrayData = self.TeamData.get(sender())!!;
    let size:Int = teamDataInfo.size;
    let x:map<Int,TokenVestingInfo> =  teamDataInfo.data;
    let amount: Int = 0;
    foreach(key, value in x){
        if (now() >= value.vestingDuration) {
            amount += value.remainingToken;
            value.lastClaimTime = value.vestingDuration;
            value.remainingToken = 0;
            x.set(key,value);
            let newStruct: TeamArrayData = TeamArrayData{
              data:x,
              size:size,
            };
            self.TeamData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.lastClaimTime) /
                value.releaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(4)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.lastClaimTime += totalClaim * value.releaseInterval;
            value.remainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: TeamArrayData = TeamArrayData{
              data:x,
              size:size,
            };
            self.TeamData.set(sender(),newStruct);
        }
        require(amount == 0,"You have not sufficient Token");
      }
         send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
            });
  }

  receive(msg : ClaimAdvisorTokens) {
    let teamDataInfo : AdvisorArrayData = self.AdvisorData.get(sender())!!;
    let size:Int = teamDataInfo.size;
    let x:map<Int,TokenVestingInfo> =  teamDataInfo.data;
    let amount: Int = 0;
    foreach(key, value in x){
        if (now() >= value.vestingDuration) {
            amount += value.remainingToken;
            value.lastClaimTime = value.vestingDuration;
            value.remainingToken = 0;
            x.set(key,value);
            let newStruct: AdvisorArrayData = AdvisorArrayData{
              data:x,
              size:size,
            };
            self.AdvisorData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.lastClaimTime) /
                value.releaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(5)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.lastClaimTime += totalClaim * value.releaseInterval;
            value.remainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: AdvisorArrayData = AdvisorArrayData{
              data:x,
              size:size,
            };
            self.AdvisorData.set(sender(),newStruct);
        }
        require(amount == 0,"You have not sufficient Token");
      }
        send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
        });
  }

  receive(msg : ClaimTreasuryTokens) {
    let teamDataInfo : TreasuryArrayData = self.TreasuryData.get(sender())!!;
    let size:Int = teamDataInfo.size;
    let x:map<Int,TokenVestingInfo> =  teamDataInfo.data;
    let amount: Int = 0;
    foreach(key, value in x){
        if (now() >= value.vestingDuration) {
            amount += value.remainingToken;
            value.lastClaimTime = value.vestingDuration;
            value.remainingToken = 0;
            x.set(key,value);
            let newStruct: TreasuryArrayData = TreasuryArrayData{
              data:x,
              size:size,
            };
            self.TreasuryData.set(sender(),newStruct);
        }else {
            let totalClaim : Int = (now() - value.lastClaimTime) /
                value.releaseInterval;
            let seedData: TokenDistrubuteInfo = self.TokenData.get(10)!!;
            let tokenClaimed : Int = ((value.TotalToken / 10000) * seedData.percentage) * totalClaim;
            amount += tokenClaimed;
            value.lastClaimTime += totalClaim * value.releaseInterval;
            value.remainingToken -= tokenClaimed;
            x.set(key,value);
             let newStruct: TreasuryArrayData = TreasuryArrayData{
              data:x,
              size:size,
            };
            self.TreasuryData.set(sender(),newStruct);
        }
        require(amount == 0,"You have not sufficient Token");
      }
        send(SendParameters{
                to: msg.cenderadd,
                value: 0,
                mode:  SendRemainingBalance,
                bounce: true,
                body: TokenTransfer{
                    queryId:0,
                    amount: amount,
                    destination: msg.senderadd,
                    response_destination: msg.senderadd,
                    custom_payload: null,
                    forward_ton_amount: 1,
                    forward_payload: "".asComment().beginParse(),
                }.toCell()
        });
  }

  fun AddReferAddress(referrer: Address, amount: Int) //addReferAddress(address referrer) private {
  {
      let ne: Address = newAddress(0,0);
      let amt:Int = (amount * 5) / 100;
      require(referrer != ne, "INVALID_ADDRESS");
      require(sender() != referrer, "REFERRER_CANNOT_BE_A_REFERRAL");
      require(self.checkReferrers.get(sender()) == null, "ALREADY_ADDED_REFERRER");
      self.checkReferrers.set(sender(),referrer); 

      let newData: RefferData = RefferData{
        refferalAddress: sender(),
        amount: amt,
        claim: false,
      };

      let refferdatacopy: RefferDetails? = self.refferInfo.get(referrer);

      if(refferdatacopy != null){
        let refferdatas: map<Int,RefferData> = self.refferInfo.get(referrer)!!.reffer;
        let size: Int = self.refferInfo.get(referrer)!!.size;
        refferdatas.set(size+1,newData);
        let newRefferDetail: RefferDetails = RefferDetails{
          reffer: refferdatas,
          size : size+1,
        };
        self.refferInfo.set(referrer,newRefferDetail);
      }
      else{
        let x: map<Int,RefferData> = emptyMap();
        x.set(1,newData);
        let newRefferDetail: RefferDetails = RefferDetails{
          reffer: x,
          size : 1,
        };
        self.refferInfo.set(referrer,newRefferDetail);
      }
  }

  receive(msg: ClaimReferralTokens){
      // require(
      //     new() > _privateSalePhaseTime[2],
      //     "PRIVATESALE_PERIOD_INCOMPLETE"
      // );
      let usercopy: RefferDetails? = self.refferInfo.get(sender());
      require(usercopy != null,"not have any refferals");
      let user: RefferDetails = self.refferInfo.get(sender())!!;
      
      let totalToken:Int = 0;
      let x: map<Int,RefferData> =  user.reffer;
      foreach(key, value in x){
        if (value.claim) {}
        else{
          totalToken += value.amount;
          value.claim = true;
        }
        x.set(key,value);
      }
      user.reffer = x;
      self.refferInfo.set(sender(),user);
      require(totalToken != 0, "NO_REFERRAL_TOKENS_AVAILABLE");
      send(SendParameters{
        to: msg.cenderadd,
        value: 0,
        mode:  SendRemainingBalance,
        bounce: true,
        body: TokenTransfer{
            queryId:0,
            amount: totalToken,
            destination: sender(),
            response_destination: sender(),
            custom_payload: null,
            forward_ton_amount: 1,
            forward_payload: "".asComment().beginParse(),
        }.toCell()
      });
     
  }
    
  get fun getData(addr: Address,num: Int):UserData?{
    let data: UserArrayData = self.SeedData.get(addr)!!;
    return data.data.get(num);
  }

  get fun balance(): String {
        return myBalance().toCoinsString();
  }

  get fun getAllSeedTokenData(addr:Address): map<Int,UserData>{
    if(self.SeedData.get(addr) != null){
      let data: UserArrayData = self.SeedData.get(addr)!!;
      return data.data;  
    }
    else{
      return emptyMap();
    }
    
  }

  get fun getAllPrivateTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.PrivateSaleData.get(addr) != null){
      let data: PrivateSaleArrayData = self.PrivateSaleData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
  }

  get fun getAllMarketingTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.MarketingData.get(addr) != null){
      let data: MarketingArrayData = self.MarketingData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
    
  }

  get fun getAllTeamTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.MarketingData.get(addr) != null){
      let data: TeamArrayData = self.TeamData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
    
  }

  get fun getAllAdvisorTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.MarketingData.get(addr) != null){
      let data: AdvisorArrayData = self.AdvisorData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
  
  }

  get fun getAllTreasuryTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.MarketingData.get(addr) != null){
      let data: TreasuryArrayData = self.TreasuryData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
    
  }

  get fun getTokonomicsData(): map<Int, TokenDistrubuteInfo>{
    return self.TokenData;
  }

  
  get fun getAllReferralDetails(referrerAddress: Address):  map<Int,RefferData> 
  {
    let data: RefferDetails = self.refferInfo.get(referrerAddress)!!;
    return data.reffer;
  }

  get fun getReferrer(userAddress: Address):Address
  {
    let add: Address? = self.checkReferrers.get(userAddress);
    if(add!=null){
      let radd: Address = self.checkReferrers.get(userAddress)!!;
      return radd;
    }
    else{
      return newAddress(0,0);
    }
    
  }

}