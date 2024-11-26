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
  beneficiary : Address;
  totalToken : Int as coins;
  remainingToken : Int as coins;
  startTime: Int;
  vestingDuration: Int;
  lastClaimTime: Int;
  initialCliff: Int;
  releaseInterval: Int;
  phaseName: String;
  active: Bool;
  USDTToken : Int as coins;
}

struct TokenVestingInfo {
  beneficiary : Address;
  totalToken : Int as coins ;
  remainingToken : Int as coins ;
  startTime : Int ;
  vestingDuration : Int ;
  lastClaimTime : Int ;
  releaseInterval : Int ;
  initialCliff : Int ;
  phaseName : String ;
  active: Bool;
  USDTToken : Int as coins;
}

struct UserArrayData{
  data: map<Int,UserData>;
  size : Int;
}


struct RefferData {
  refferalAddress: Address;
  amount: Int;
  date: Int;
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

struct AllData{
  minimum: Int as coins;
  maximum: Int;
}

message BuyTokens{
  referrer: Address;
  tonAmount: Int as coins;
  usdtAmount: Int as coins;
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

message ClaimSingleToken {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimPrivateSaleTokens {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimMarketingeTokens {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimTeamTokens {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimAdvisorTokens {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message ClaimTreasuryTokens {
    index:Int;
    cenderadd:Address;
    senderadd:Address;
}

message WithdrawUsdt {
    cenderadd: Address;
}

message WithdrawBZZN {
    cenderadd: Address;
    amount: Int;
}

message ChangeTokenPrice {
    price: Int;
}

message ChangeSeedRoundTimeMessage {
    time: Int;
}

message ChangeReferralPercentageMessage {
    percentage: Int;
}

message MaximumUsdtAmountMessage {
    amount: Int;
}

message MinimumUsdtAmountMessage {
    amount: Int;
}

contract SamplePresale with Ownable, Deployable {
  const MinTonForStorage: Int = ton("0.5");
  totalUsdtAmount : Int = 0;
  seedRoundTime : Int = 0;
  presaleStatus : Bool = false;
  BZZNPriceInUSDT : Int = 250;
  referralPercentage : Int = 50;
  minimumUSDTAmount : Int = 1000000000;
  maximumUSDTAmount : Int = 100000000000;
  owner: Address;
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

  receive("start Presale"){
    require(sender() == self.owner,"You are not owner");
    self.seedRoundTime = now() + (30*24*60*60);
    self.presaleStatus = true;
  }

  receive("close Presale"){
    require(sender() == self.owner,"You are not owner");
    self.presaleStatus = false;
  }

  receive(msg: TokenNotification){
    require(now() < self.seedRoundTime, "Presale is over");
    require(self.presaleStatus, "Presale is not start yet");
    require( self.minimumUSDTAmount < msg.amount && msg.amount < self.maximumUSDTAmount, "Invalid USDT Amount");
    let TokenAmount : Int = (msg.amount  *1000) / self.BZZNPriceInUSDT;
    let gotButUnsure: UserArrayData? = self.SeedData.get(msg.from);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(0)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + TokenAmount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
    let gotButsure: UserArrayData = self.SeedData.get(msg.from)!!;
    let userInfo : UserData = UserData{
        beneficiary : msg.from,
        totalToken : TokenAmount,
        remainingToken : TokenAmount,
        startTime: now(),
        vestingDuration: now() + 630,
        lastClaimTime: now() + 90,
        initialCliff: 90,
        releaseInterval: 30,
        phaseName: seedData.name,
        active : true,
        USDTToken : msg.amount,
    };
    
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.SeedData.set(msg.from,gotButsure);
    } else {
      let newadd : Address = newAddress(0,0);
      let reffrel : Address = msg.forward_payload.loadAddress();
      if(reffrel != newadd){
        self.AddReferAddress(reffrel, TokenAmount,msg.from);
      }
      let getData: UserArrayData? = self.SeedData.get(msg.from);
      let x : map<Int,UserData> = emptyMap();
      let userInfo : UserData = UserData{
       beneficiary : msg.from,
        totalToken : TokenAmount,
        remainingToken : TokenAmount,
        startTime: now(),
        vestingDuration: now() + 630,
        lastClaimTime: now() + 90,
        initialCliff: 90,
        releaseInterval:  30,
        phaseName: seedData.name,
        active : true,
        USDTToken : msg.amount,
    };
    x.set(1,userInfo);
    let storeData : UserArrayData  = UserArrayData {
      data : x,
      size:1,
    };
    self.SeedData.set(msg.from,storeData);
    }
    self.totalUsdtAmount += msg.amount;
    seedData.totalSuppliedToken += TokenAmount;
    self.TokenData.set(0,seedData);
  }


  receive(msg: BuyTokens){
    let ctx:Context = context();
    require(now() < self.seedRoundTime, "Presale is over");
    require(self.presaleStatus, "Presale is not start yet");
    let TokenAmount : Int = (msg.usdtAmount *1000) /self.BZZNPriceInUSDT;
   let gotButUnsure: UserArrayData? = self.SeedData.get(sender());
   let seedData : TokenDistrubuteInfo = self.TokenData.get(0)!!;
   require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + TokenAmount,"Seed Token Supply is completed");
   if (gotButUnsure != null) {
   let gotButsure: UserArrayData = self.SeedData.get(sender())!!;
   let userInfo : UserData = UserData{
       beneficiary : sender(),
       totalToken : TokenAmount,
       remainingToken : TokenAmount,
       startTime: now(),
       vestingDuration: now() + 630,
       lastClaimTime: now() + 90,
       initialCliff: 90,
       releaseInterval: 30,
       phaseName: seedData.name,
       active : true,
       USDTToken : msg.usdtAmount,
   };
   
   gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.SeedData.set(sender(),gotButsure);
    } else {
      let newadd : Address = newAddress(0,0);
      if(msg.referrer != newadd){
        self.AddReferAddress(msg.referrer, TokenAmount,sender());
      }
      let getData: UserArrayData? = self.SeedData.get(sender());
      let x : map<Int,UserData> = emptyMap();
      let userInfo : UserData = UserData{
      beneficiary : sender(),
       totalToken : TokenAmount,
       remainingToken : TokenAmount,
       startTime: now(),
       vestingDuration: now() + 630,
       lastClaimTime: now() + 90,
       initialCliff: 90,
       releaseInterval:  30,
       phaseName: seedData.name,
       active : true,
       USDTToken : msg.usdtAmount,
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
   receive(msg: TokenExcesses){
  }

  receive(msg : PrivateSaleMessage){
    require(sender() == self.owner,"You are not owner");
    let ctx:Context = context();
    let gotButUnsure: PrivateSaleArrayData? = self.PrivateSaleData.get(msg.UserAddress);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(1)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: PrivateSaleArrayData = self.PrivateSaleData.get(msg.UserAddress)!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 750 ,
        lastClaimTime : now() + 90 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.PrivateSaleData.set(msg.UserAddress,gotButsure);
    } else {
      let getData: PrivateSaleArrayData? = self.PrivateSaleData.get(msg.UserAddress);
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 750 ,
        lastClaimTime : now() + 90 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    x.set(1,userInfo);
    let storeData : PrivateSaleArrayData  = PrivateSaleArrayData {
      data : x,
      size:1,
    };
    self.PrivateSaleData.set(msg.UserAddress,storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(1,seedData);
  }

  receive(msg : MarketingMessage){
    require(sender() == self.owner,"You are not owner");
    let ctx:Context = context();
    let gotButUnsure: MarketingArrayData? = self.MarketingData.get(msg.UserAddress);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(9)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: MarketingArrayData = self.MarketingData.get(msg.UserAddress)!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 570 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 30 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.MarketingData.set(msg.UserAddress,gotButsure);
    } else {
      let getData: MarketingArrayData? = self.MarketingData.get(msg.UserAddress);
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 570 ,
        lastClaimTime : now() + 30 ,
        releaseInterval : 30,
        initialCliff : 30 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    x.set(1,userInfo);
    let storeData : MarketingArrayData  = MarketingArrayData {
      data : x,
      size:1,
    };
    self.MarketingData.set(msg.UserAddress,storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(9,seedData);
  }

  receive(msg : TeamMessage){
    require(sender() == self.owner,"You are not owner");
    let ctx:Context = context();
    let gotButUnsure: TeamArrayData? = self.TeamData.get(msg.UserAddress);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(4)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: TeamArrayData = self.TeamData.get(msg.UserAddress)!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 1200 ,
        lastClaimTime : now() + 120 ,
        releaseInterval : 30,
        initialCliff : 120 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.TeamData.set(msg.UserAddress,gotButsure);
    } else {
      let getData: TeamArrayData? = self.TeamData.get(msg.UserAddress);
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 1200 ,
        lastClaimTime : now() + 120 ,
        releaseInterval : 30,
        initialCliff : 120 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    x.set(1,userInfo);
    let storeData : TeamArrayData  = TeamArrayData {
      data : x,
      size:1,
    };
    self.TeamData.set(msg.UserAddress,storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(4,seedData);
  }

  receive(msg : AdvisorMessage){
    require(sender() == self.owner,"You are not owner");
    let ctx:Context = context();
    let gotButUnsure: AdvisorArrayData? = self.AdvisorData.get(msg.UserAddress);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(5)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: AdvisorArrayData = self.AdvisorData.get(msg.UserAddress)!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 840 ,
        lastClaimTime : now() + 120 ,
        releaseInterval : 30,
        initialCliff : 120 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.AdvisorData.set(msg.UserAddress,gotButsure);
    } else {
      let getData: AdvisorArrayData? = self.AdvisorData.get(msg.UserAddress);
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 840 ,
        lastClaimTime : now() + 120 ,
        releaseInterval : 30,
        initialCliff : 120 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    x.set(1,userInfo);
    let storeData : AdvisorArrayData  = AdvisorArrayData {
      data : x,
      size:1,
    };
    self.AdvisorData.set(msg.UserAddress,storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(5,seedData);
  }

  receive(msg : TreasuryMessage){
    require(sender() == self.owner,"You are not owner");
    require(sender() == self.owner,"You are not owner");
    let ctx:Context = context();
    let gotButUnsure: TreasuryArrayData? = self.TreasuryData.get(msg.UserAddress);
    let seedData : TokenDistrubuteInfo = self.TokenData.get(10)!!;
    require(seedData.totalPhaseToken >= seedData.totalSuppliedToken + msg.amount,"Seed Token Supply is completed");
    if (gotButUnsure != null) {
      let gotButsure: TreasuryArrayData = self.TreasuryData.get(msg.UserAddress)!!;
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 810 ,
        lastClaimTime : now() + 90 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.TreasuryData.set(msg.UserAddress,gotButsure);
    } else {
      let getData: TreasuryArrayData? = self.TreasuryData.get(msg.UserAddress);
      let x : map<Int,TokenVestingInfo> = emptyMap();
      let userInfo : TokenVestingInfo = TokenVestingInfo{
        beneficiary : msg.UserAddress,
        totalToken : msg.amount ,
        remainingToken : msg.amount,
        startTime : now() ,
        vestingDuration : now() + 810 ,
        lastClaimTime : now() + 90 ,
        releaseInterval : 30,
        initialCliff : 90 ,
        phaseName : seedData.name,
        active: true,
        USDTToken : 0
    };
    x.set(1,userInfo);
    let storeData : TreasuryArrayData  = TreasuryArrayData {
      data : x,
      size:1,
    };
    self.TreasuryData.set(msg.UserAddress,storeData);
    }
    seedData.totalSuppliedToken += msg.amount;
    self.TokenData.set(10,seedData);
  }

  receive("withdraw safe") {
        require(sender() == self.owner, "Only owner is allowed to withdraw");
        send(SendParameters{
            to: sender(),
            bounce: true,
            value: myBalance() - self.MinTonForStorage,
            mode: SendRemainingValue + SendIgnoreErrors
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
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.active = false;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: UserArrayData = UserArrayData{
            data:x,
            size:size,
          };
          self.SeedData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
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

  receive(msg:ClaimPrivateSaleTokens){
      let privateSaleData : PrivateSaleArrayData  = self.PrivateSaleData.get(sender())!!;
      let size : Int =privateSaleData.size;
      let x : map<Int, TokenVestingInfo> =  privateSaleData.data;
      let cheker : TokenVestingInfo? =  privateSaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : TokenVestingInfo =  privateSaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: PrivateSaleArrayData = PrivateSaleArrayData{
            data:x,
            size:size,
          };
          self.PrivateSaleData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: PrivateSaleArrayData = PrivateSaleArrayData{
            data:x,
            size:size,
          };
          self.PrivateSaleData.set(sender(),newStruct);
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

  receive(msg:ClaimMarketingeTokens){
      let marketingSaleData : MarketingArrayData  = self.MarketingData.get(sender())!!;
      let size : Int =marketingSaleData.size;
      let x : map<Int, TokenVestingInfo> =  marketingSaleData.data;
      let cheker : TokenVestingInfo? =  marketingSaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : TokenVestingInfo =  marketingSaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: MarketingArrayData = MarketingArrayData{
            data:x,
            size:size,
          };
          self.MarketingData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: MarketingArrayData = MarketingArrayData{
            data:x,
            size:size,
          };
          self.MarketingData.set(sender(),newStruct);
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

  receive(msg: ClaimTeamTokens){
      let teamSaleData : TeamArrayData  = self.TeamData.get(sender())!!;
      let size : Int =teamSaleData.size;
      let x : map<Int, TokenVestingInfo> =  teamSaleData.data;
      let cheker : TokenVestingInfo? =  teamSaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : TokenVestingInfo =  teamSaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: TeamArrayData = TeamArrayData{
            data:x,
            size:size,
          };
          self.TeamData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: TeamArrayData = TeamArrayData{
            data:x,
            size:size,
          };
          self.TeamData.set(sender(),newStruct);
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

  receive(msg: ClaimAdvisorTokens){
      let advisorSaleData : AdvisorArrayData  = self.AdvisorData.get(sender())!!;
      let size : Int =advisorSaleData.size;
      let x : map<Int, TokenVestingInfo> =  advisorSaleData.data;
      let cheker : TokenVestingInfo? =  advisorSaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : TokenVestingInfo =  advisorSaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: AdvisorArrayData = AdvisorArrayData{
            data:x,
            size:size,
          };
          self.AdvisorData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: AdvisorArrayData = AdvisorArrayData{
            data:x,
            size:size,
          };
          self.AdvisorData.set(sender(),newStruct);
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

  receive(msg: ClaimTreasuryTokens){
      let tresurySaleData : TreasuryArrayData  = self.TreasuryData.get(sender())!!;
      let size : Int =tresurySaleData.size;
      let x : map<Int, TokenVestingInfo> =  tresurySaleData.data;
      let cheker : TokenVestingInfo? =  tresurySaleData.data.get(msg.index);
      require(cheker != null,"Index not found!");
      let value : TokenVestingInfo =  tresurySaleData.data.get(msg.index)!!;
      
      let amount: Int = 0;
      
      if (now() >= value.vestingDuration) {
          amount += value.remainingToken;
          value.lastClaimTime = value.vestingDuration;
          value.remainingToken = 0;
          x.set(msg.index,value);
          let newStruct: TreasuryArrayData = TreasuryArrayData{
            data:x,
            size:size,
          };
          self.TreasuryData.set(sender(),newStruct);
      }else {
          let totalClaim : Int = (now() - value.lastClaimTime) /
              value.releaseInterval;
          let seedData: TokenDistrubuteInfo = self.TokenData.get(0)!!;
          let tokenClaimed : Int = ((value.totalToken / 10000) * seedData.percentage) * totalClaim;
          amount += tokenClaimed;
          value.lastClaimTime += totalClaim * value.releaseInterval;
          value.remainingToken -= tokenClaimed;
          x.set(msg.index,value);
           let newStruct: TreasuryArrayData = TreasuryArrayData{
            data:x,
            size:size,
          };
          self.TreasuryData.set(sender(),newStruct);
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

  fun AddReferAddress(referrer: Address, amount: Int,from : Address) 
  {
      let amt:Int = (amount * self.referralPercentage) / 1000;
      require(self.checkReferrers.get(from) == null, "ALREADY_ADDED_REFERRER");
      self.checkReferrers.set(from,referrer); 

      let newData: RefferData = RefferData{
        refferalAddress: from,
        amount: amt,
        date: now(),
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
      require(
          now() > self.seedRoundTime,
          "PRIVATESALE_PERIOD_INCOMPLETE"
      );
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

  receive(msg: WithdrawUsdt){
    let ctx:Context = context();
    require(sender() == self.owner,"You are not owner");
    require(self.totalUsdtAmount > 0 ,"Contract does not have usdt");
    send(SendParameters{
        to: msg.cenderadd,
        value: 0,
        mode:  SendRemainingBalance,
        bounce: true,
        body: TokenTransfer{
            queryId:0,
            amount: self.totalUsdtAmount,
            destination: sender(),
            response_destination: sender(),
            custom_payload: null,
            forward_ton_amount: 1,
            forward_payload: "".asComment().beginParse(),
        }.toCell()
      });
      self.totalUsdtAmount = 0;
  }

  receive(msg: WithdrawBZZN){
    let ctx:Context = context();
    require(sender() == self.owner,"You are not owner");
    send(SendParameters{
        to: msg.cenderadd,
        value: 0,
        mode:  SendRemainingBalance,
        bounce: true,
        body: TokenTransfer{
            queryId:0,
            amount: msg.amount,
            destination: sender(),
            response_destination: sender(),
            custom_payload: null,
            forward_ton_amount: 1,
            forward_payload: "".asComment().beginParse(),
        }.toCell()
      });
      self.totalUsdtAmount = 0;
  }

  receive(msg : ChangeTokenPrice){
    require(sender() == self.owner,"You are not owner");
    self.BZZNPriceInUSDT = msg.price;
  }

  receive(msg : ChangeSeedRoundTimeMessage){
    require(sender() == self.owner,"You are not owner");
    self.seedRoundTime = msg.time;
  }

  receive(msg : ChangeReferralPercentageMessage){
    require(sender() == self.owner,"You are not owner");
    self.referralPercentage = msg.percentage;
  }

  receive(msg : MinimumUsdtAmountMessage){
    require(sender() == self.owner,"You are not owner");
    self.minimumUSDTAmount = msg.amount;
  }

  receive(msg : MaximumUsdtAmountMessage){
    require(sender() == self.owner,"You are not owner");
    self.maximumUSDTAmount = msg.amount;
  }

  get fun UsdtAmount(): Int{
    return self.totalUsdtAmount;
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

  get fun getAllSeedData(): map<Address, UserArrayData>{
    if(self.SeedData != null){
     return self.SeedData ;
    }
    else{
      return emptyMap();
    }
  }

  get fun getAllData() : AllData{
    let data: AllData = AllData{
      minimum: self.minimumUSDTAmount,
      maximum: self.maximumUSDTAmount
    };
    return data;
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
    if(self.TeamData.get(addr) != null){
      let data: TeamArrayData = self.TeamData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
    
  }

  get fun getAllAdvisorTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.AdvisorData.get(addr) != null){
      let data: AdvisorArrayData = self.AdvisorData.get(addr)!!;
      return data.data;
    }
    else{
      return emptyMap();
    }
  
  }

  get fun getAllTreasuryTokenData(addr:Address): map<Int,TokenVestingInfo>{
    if(self.TreasuryData.get(addr) != null){
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

  get fun getAllReferralDetails(referrerAddress: Address):  map<Int,RefferData> {
    if(self.refferInfo.get(referrerAddress) != null){
      let data: RefferDetails = self.refferInfo.get(referrerAddress)!!;
    return data.reffer;
    }
    else{
      return emptyMap();
    }
    
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

  get fun getPresaleStatus():Bool{
    return self.presaleStatus;
  }

  get fun getPresaleTime():Int{
    return self.seedRoundTime;
  }

  get fun BZZNPriceInUSD():Int{
    return self.BZZNPriceInUSDT;
  }

  get fun getReferralPercentage():Int{
    return self.referralPercentage;
  }

  get fun getMinimumUsdtAmount():Int{
    return self.minimumUSDTAmount;
  }

  get fun getMaximumUsdtAmount():Int{
    return self.maximumUSDTAmount;
  }
  
}