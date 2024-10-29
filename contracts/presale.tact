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

struct PrivateSaleArrayData{
  data: map<Int,TokenVestingInfo>;
  size : Int;
}

message PrivateSaleMessage{
  amount : Int;
  UserAddress : Address;
}

message ClaimTokens {
    amount:Int;
    cenderadd:Address;
    senderadd:Address;
}


contract SamplePresale with Ownable, Deployable {
  const MinTonForStorage: Int = ton("0.1");
  TokenData: map<Int, TokenDistrubuteInfo>;
  TonVal : Int = 100;
  owner: Address;
  TonBalance : Int as coins;
  SeedData: map<Address, UserArrayData>;
  PrivateSaleData: map<Address, PrivateSaleArrayData>;
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

   receive("Buy Tokens"){
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
        ReleaseInterval: now() + 30,
        PhaseName: seedData.name,
        Active : true,
        TonToken : ctx.value,
    };
    
    gotButsure.data.set(gotButsure.size + 1,userInfo);
    gotButsure.size = gotButsure.size + 1;
    self.SeedData.set(sender(),gotButsure);
  } else {
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
        ReleaseInterval: now() + 30,
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

  receive(msg: PrivateSaleMessage){
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
  self.TokenData.set(0,seedData);
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

  get fun getData(addr:Address,num:Int):UserData?{
    let data: UserArrayData = self.SeedData.get(addr)!!;
    return data.data.get(num);
  }

  get fun getTokenInfo(index: Int): TokenDistrubuteInfo? {
    return self.TokenData.get(index);
  }

  get fun balance(): String {
        return myBalance().toCoinsString();
    }
}