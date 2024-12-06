import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    master: Address;
    walletCode: Cell;
}

export function storeJettonWalletData(src: JettonWalletData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.balance, 257);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.master);
        b_0.storeRef(src.walletCode);
    };
}

export function loadJettonWalletData(slice: Slice) {
    let sc_0 = slice;
    let _balance = sc_0.loadIntBig(257);
    let _owner = sc_0.loadAddress();
    let _master = sc_0.loadAddress();
    let _walletCode = sc_0.loadRef();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function loadTupleJettonWalletData(source: TupleReader) {
    let _balance = source.readBigNumber();
    let _owner = source.readAddress();
    let _master = source.readAddress();
    let _walletCode = source.readCell();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function storeTupleJettonWalletData(source: JettonWalletData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.master);
    builder.writeCell(source.walletCode);
    return builder.build();
}

function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeJettonWalletData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonWalletData(src.loadRef().beginParse());
        }
    }
}

export type TokenTransfer = {
    $$type: 'TokenTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_ton_amount: bigint;
    forward_payload: Cell;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransfer(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _destination = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, response_destination: _response_destination, custom_payload: _custom_payload, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransfer(source: TokenTransfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenTransfer(): DictionaryValue<TokenTransfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransfer(src.loadRef().beginParse());
        }
    }
}

export type TokenTransferInternal = {
    $$type: 'TokenTransferInternal';
    queryId: bigint;
    amount: bigint;
    from: Address;
    response_destination: Address;
    forward_ton_amount: bigint;
    forward_payload: Cell;
}

export function storeTokenTransferInternal(src: TokenTransferInternal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(395134233, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeAddress(src.response_destination);
        b_0.storeCoins(src.forward_ton_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenTransferInternal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 395134233) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _forward_ton_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, response_destination: _response_destination, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function loadTupleTokenTransferInternal(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _response_destination = source.readAddress();
    let _forward_ton_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, response_destination: _response_destination, forward_ton_amount: _forward_ton_amount, forward_payload: _forward_payload };
}

function storeTupleTokenTransferInternal(source: TokenTransferInternal) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeAddress(source.response_destination);
    builder.writeNumber(source.forward_ton_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenTransferInternal(): DictionaryValue<TokenTransferInternal> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenTransferInternal(src)).endCell());
        },
        parse: (src) => {
            return loadTokenTransferInternal(src.loadRef().beginParse());
        }
    }
}

export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    from: Address;
    forward_payload: Cell;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTokenNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function loadTupleTokenNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _from = source.readAddress();
    let _forward_payload = source.readCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forward_payload: _forward_payload };
}

function storeTupleTokenNotification(source: TokenNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.from);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTokenNotification(): DictionaryValue<TokenNotification> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenNotification(src.loadRef().beginParse());
        }
    }
}

export type TokenBurn = {
    $$type: 'TokenBurn';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    response_destination: Address;
}

export function storeTokenBurn(src: TokenBurn) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1499400124, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.response_destination);
    };
}

export function loadTokenBurn(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1499400124) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function loadTupleTokenBurn(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _owner = source.readAddress();
    let _response_destination = source.readAddress();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function storeTupleTokenBurn(source: TokenBurn) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.response_destination);
    return builder.build();
}

function dictValueParserTokenBurn(): DictionaryValue<TokenBurn> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenBurn(src)).endCell());
        },
        parse: (src) => {
            return loadTokenBurn(src.loadRef().beginParse());
        }
    }
}

export type TokenBurnNotification = {
    $$type: 'TokenBurnNotification';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    response_destination: Address | null;
}

export function storeTokenBurnNotification(src: TokenBurnNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2078119902, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.response_destination);
    };
}

export function loadTokenBurnNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2078119902) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadMaybeAddress();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function loadTupleTokenBurnNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _amount = source.readBigNumber();
    let _owner = source.readAddress();
    let _response_destination = source.readAddressOpt();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, response_destination: _response_destination };
}

function storeTupleTokenBurnNotification(source: TokenBurnNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.response_destination);
    return builder.build();
}

function dictValueParserTokenBurnNotification(): DictionaryValue<TokenBurnNotification> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenBurnNotification(src)).endCell());
        },
        parse: (src) => {
            return loadTokenBurnNotification(src.loadRef().beginParse());
        }
    }
}

export type TokenExcesses = {
    $$type: 'TokenExcesses';
    queryId: bigint;
}

export function storeTokenExcesses(src: TokenExcesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadTokenExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function loadTupleTokenExcesses(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function storeTupleTokenExcesses(source: TokenExcesses) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserTokenExcesses(): DictionaryValue<TokenExcesses> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadTokenExcesses(src.loadRef().beginParse());
        }
    }
}

export type TokenUpdateContent = {
    $$type: 'TokenUpdateContent';
    content: Cell;
}

export function storeTokenUpdateContent(src: TokenUpdateContent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2937889386, 32);
        b_0.storeRef(src.content);
    };
}

export function loadTokenUpdateContent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2937889386) { throw Error('Invalid prefix'); }
    let _content = sc_0.loadRef();
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function loadTupleTokenUpdateContent(source: TupleReader) {
    let _content = source.readCell();
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function storeTupleTokenUpdateContent(source: TokenUpdateContent) {
    let builder = new TupleBuilder();
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserTokenUpdateContent(): DictionaryValue<TokenUpdateContent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenUpdateContent(src)).endCell());
        },
        parse: (src) => {
            return loadTokenUpdateContent(src.loadRef().beginParse());
        }
    }
}

export type TokenDistributeInfo = {
    $$type: 'TokenDistributeInfo';
    name: string;
    tokenDistrubutedPercentage: bigint;
    totalPhaseToken: bigint;
    percentage: bigint;
    totalSuppliedToken: bigint;
}

export function storeTokenDistributeInfo(src: TokenDistributeInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
        b_0.storeInt(src.tokenDistrubutedPercentage, 257);
        b_0.storeCoins(src.totalPhaseToken);
        b_0.storeInt(src.percentage, 257);
        b_0.storeCoins(src.totalSuppliedToken);
    };
}

export function loadTokenDistributeInfo(slice: Slice) {
    let sc_0 = slice;
    let _name = sc_0.loadStringRefTail();
    let _tokenDistrubutedPercentage = sc_0.loadIntBig(257);
    let _totalPhaseToken = sc_0.loadCoins();
    let _percentage = sc_0.loadIntBig(257);
    let _totalSuppliedToken = sc_0.loadCoins();
    return { $$type: 'TokenDistributeInfo' as const, name: _name, tokenDistrubutedPercentage: _tokenDistrubutedPercentage, totalPhaseToken: _totalPhaseToken, percentage: _percentage, totalSuppliedToken: _totalSuppliedToken };
}

function loadTupleTokenDistributeInfo(source: TupleReader) {
    let _name = source.readString();
    let _tokenDistrubutedPercentage = source.readBigNumber();
    let _totalPhaseToken = source.readBigNumber();
    let _percentage = source.readBigNumber();
    let _totalSuppliedToken = source.readBigNumber();
    return { $$type: 'TokenDistributeInfo' as const, name: _name, tokenDistrubutedPercentage: _tokenDistrubutedPercentage, totalPhaseToken: _totalPhaseToken, percentage: _percentage, totalSuppliedToken: _totalSuppliedToken };
}

function storeTupleTokenDistributeInfo(source: TokenDistributeInfo) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeNumber(source.tokenDistrubutedPercentage);
    builder.writeNumber(source.totalPhaseToken);
    builder.writeNumber(source.percentage);
    builder.writeNumber(source.totalSuppliedToken);
    return builder.build();
}

function dictValueParserTokenDistributeInfo(): DictionaryValue<TokenDistributeInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenDistributeInfo(src)).endCell());
        },
        parse: (src) => {
            return loadTokenDistributeInfo(src.loadRef().beginParse());
        }
    }
}

export type UserData = {
    $$type: 'UserData';
    beneficiary: Address;
    totalToken: bigint;
    remainingToken: bigint;
    startTime: bigint;
    vestingDuration: bigint;
    lastClaimTime: bigint;
    initialCliff: bigint;
    releaseInterval: bigint;
    phaseName: string;
    active: boolean;
    USDTToken: bigint;
}

export function storeUserData(src: UserData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.beneficiary);
        b_0.storeCoins(src.totalToken);
        b_0.storeCoins(src.remainingToken);
        b_0.storeInt(src.startTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.vestingDuration, 257);
        b_1.storeInt(src.lastClaimTime, 257);
        b_1.storeInt(src.initialCliff, 257);
        let b_2 = new Builder();
        b_2.storeInt(src.releaseInterval, 257);
        b_2.storeStringRefTail(src.phaseName);
        b_2.storeBit(src.active);
        b_2.storeCoins(src.USDTToken);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadUserData(slice: Slice) {
    let sc_0 = slice;
    let _beneficiary = sc_0.loadAddress();
    let _totalToken = sc_0.loadCoins();
    let _remainingToken = sc_0.loadCoins();
    let _startTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _vestingDuration = sc_1.loadIntBig(257);
    let _lastClaimTime = sc_1.loadIntBig(257);
    let _initialCliff = sc_1.loadIntBig(257);
    let sc_2 = sc_1.loadRef().beginParse();
    let _releaseInterval = sc_2.loadIntBig(257);
    let _phaseName = sc_2.loadStringRefTail();
    let _active = sc_2.loadBit();
    let _USDTToken = sc_2.loadCoins();
    return { $$type: 'UserData' as const, beneficiary: _beneficiary, totalToken: _totalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, initialCliff: _initialCliff, releaseInterval: _releaseInterval, phaseName: _phaseName, active: _active, USDTToken: _USDTToken };
}

function loadTupleUserData(source: TupleReader) {
    let _beneficiary = source.readAddress();
    let _totalToken = source.readBigNumber();
    let _remainingToken = source.readBigNumber();
    let _startTime = source.readBigNumber();
    let _vestingDuration = source.readBigNumber();
    let _lastClaimTime = source.readBigNumber();
    let _initialCliff = source.readBigNumber();
    let _releaseInterval = source.readBigNumber();
    let _phaseName = source.readString();
    let _active = source.readBoolean();
    let _USDTToken = source.readBigNumber();
    return { $$type: 'UserData' as const, beneficiary: _beneficiary, totalToken: _totalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, initialCliff: _initialCliff, releaseInterval: _releaseInterval, phaseName: _phaseName, active: _active, USDTToken: _USDTToken };
}

function storeTupleUserData(source: UserData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.beneficiary);
    builder.writeNumber(source.totalToken);
    builder.writeNumber(source.remainingToken);
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.vestingDuration);
    builder.writeNumber(source.lastClaimTime);
    builder.writeNumber(source.initialCliff);
    builder.writeNumber(source.releaseInterval);
    builder.writeString(source.phaseName);
    builder.writeBoolean(source.active);
    builder.writeNumber(source.USDTToken);
    return builder.build();
}

function dictValueParserUserData(): DictionaryValue<UserData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUserData(src)).endCell());
        },
        parse: (src) => {
            return loadUserData(src.loadRef().beginParse());
        }
    }
}

export type TokenVestingInfo = {
    $$type: 'TokenVestingInfo';
    beneficiary: Address;
    totalToken: bigint;
    remainingToken: bigint;
    startTime: bigint;
    vestingDuration: bigint;
    lastClaimTime: bigint;
    releaseInterval: bigint;
    initialCliff: bigint;
    phaseName: string;
    active: boolean;
    USDTToken: bigint;
}

export function storeTokenVestingInfo(src: TokenVestingInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.beneficiary);
        b_0.storeCoins(src.totalToken);
        b_0.storeCoins(src.remainingToken);
        b_0.storeInt(src.startTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.vestingDuration, 257);
        b_1.storeInt(src.lastClaimTime, 257);
        b_1.storeInt(src.releaseInterval, 257);
        let b_2 = new Builder();
        b_2.storeInt(src.initialCliff, 257);
        b_2.storeStringRefTail(src.phaseName);
        b_2.storeBit(src.active);
        b_2.storeCoins(src.USDTToken);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadTokenVestingInfo(slice: Slice) {
    let sc_0 = slice;
    let _beneficiary = sc_0.loadAddress();
    let _totalToken = sc_0.loadCoins();
    let _remainingToken = sc_0.loadCoins();
    let _startTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _vestingDuration = sc_1.loadIntBig(257);
    let _lastClaimTime = sc_1.loadIntBig(257);
    let _releaseInterval = sc_1.loadIntBig(257);
    let sc_2 = sc_1.loadRef().beginParse();
    let _initialCliff = sc_2.loadIntBig(257);
    let _phaseName = sc_2.loadStringRefTail();
    let _active = sc_2.loadBit();
    let _USDTToken = sc_2.loadCoins();
    return { $$type: 'TokenVestingInfo' as const, beneficiary: _beneficiary, totalToken: _totalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, releaseInterval: _releaseInterval, initialCliff: _initialCliff, phaseName: _phaseName, active: _active, USDTToken: _USDTToken };
}

function loadTupleTokenVestingInfo(source: TupleReader) {
    let _beneficiary = source.readAddress();
    let _totalToken = source.readBigNumber();
    let _remainingToken = source.readBigNumber();
    let _startTime = source.readBigNumber();
    let _vestingDuration = source.readBigNumber();
    let _lastClaimTime = source.readBigNumber();
    let _releaseInterval = source.readBigNumber();
    let _initialCliff = source.readBigNumber();
    let _phaseName = source.readString();
    let _active = source.readBoolean();
    let _USDTToken = source.readBigNumber();
    return { $$type: 'TokenVestingInfo' as const, beneficiary: _beneficiary, totalToken: _totalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, releaseInterval: _releaseInterval, initialCliff: _initialCliff, phaseName: _phaseName, active: _active, USDTToken: _USDTToken };
}

function storeTupleTokenVestingInfo(source: TokenVestingInfo) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.beneficiary);
    builder.writeNumber(source.totalToken);
    builder.writeNumber(source.remainingToken);
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.vestingDuration);
    builder.writeNumber(source.lastClaimTime);
    builder.writeNumber(source.releaseInterval);
    builder.writeNumber(source.initialCliff);
    builder.writeString(source.phaseName);
    builder.writeBoolean(source.active);
    builder.writeNumber(source.USDTToken);
    return builder.build();
}

function dictValueParserTokenVestingInfo(): DictionaryValue<TokenVestingInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenVestingInfo(src)).endCell());
        },
        parse: (src) => {
            return loadTokenVestingInfo(src.loadRef().beginParse());
        }
    }
}

export type UserArrayData = {
    $$type: 'UserArrayData';
    data: Dictionary<bigint, UserData>;
    size: bigint;
}

export function storeUserArrayData(src: UserArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserUserData());
        b_0.storeInt(src.size, 257);
    };
}

export function loadUserArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserUserData(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'UserArrayData' as const, data: _data, size: _size };
}

function loadTupleUserArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserUserData(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'UserArrayData' as const, data: _data, size: _size };
}

function storeTupleUserArrayData(source: UserArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserUserData()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserUserArrayData(): DictionaryValue<UserArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUserArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadUserArrayData(src.loadRef().beginParse());
        }
    }
}

export type RefferData = {
    $$type: 'RefferData';
    refferalAddress: Address;
    amount: bigint;
    date: bigint;
    claim: boolean;
}

export function storeRefferData(src: RefferData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.refferalAddress);
        b_0.storeInt(src.amount, 257);
        b_0.storeInt(src.date, 257);
        b_0.storeBit(src.claim);
    };
}

export function loadRefferData(slice: Slice) {
    let sc_0 = slice;
    let _refferalAddress = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    let _date = sc_0.loadIntBig(257);
    let _claim = sc_0.loadBit();
    return { $$type: 'RefferData' as const, refferalAddress: _refferalAddress, amount: _amount, date: _date, claim: _claim };
}

function loadTupleRefferData(source: TupleReader) {
    let _refferalAddress = source.readAddress();
    let _amount = source.readBigNumber();
    let _date = source.readBigNumber();
    let _claim = source.readBoolean();
    return { $$type: 'RefferData' as const, refferalAddress: _refferalAddress, amount: _amount, date: _date, claim: _claim };
}

function storeTupleRefferData(source: RefferData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.refferalAddress);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.date);
    builder.writeBoolean(source.claim);
    return builder.build();
}

function dictValueParserRefferData(): DictionaryValue<RefferData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRefferData(src)).endCell());
        },
        parse: (src) => {
            return loadRefferData(src.loadRef().beginParse());
        }
    }
}

export type RefferDetails = {
    $$type: 'RefferDetails';
    reffer: Dictionary<bigint, RefferData>;
    size: bigint;
}

export function storeRefferDetails(src: RefferDetails) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.reffer, Dictionary.Keys.BigInt(257), dictValueParserRefferData());
        b_0.storeInt(src.size, 257);
    };
}

export function loadRefferDetails(slice: Slice) {
    let sc_0 = slice;
    let _reffer = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserRefferData(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'RefferDetails' as const, reffer: _reffer, size: _size };
}

function loadTupleRefferDetails(source: TupleReader) {
    let _reffer = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserRefferData(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'RefferDetails' as const, reffer: _reffer, size: _size };
}

function storeTupleRefferDetails(source: RefferDetails) {
    let builder = new TupleBuilder();
    builder.writeCell(source.reffer.size > 0 ? beginCell().storeDictDirect(source.reffer, Dictionary.Keys.BigInt(257), dictValueParserRefferData()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserRefferDetails(): DictionaryValue<RefferDetails> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRefferDetails(src)).endCell());
        },
        parse: (src) => {
            return loadRefferDetails(src.loadRef().beginParse());
        }
    }
}

export type PrivateSaleArrayData = {
    $$type: 'PrivateSaleArrayData';
    data: Dictionary<bigint, TokenVestingInfo>;
    size: bigint;
}

export function storePrivateSaleArrayData(src: PrivateSaleArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo());
        b_0.storeInt(src.size, 257);
    };
}

export function loadPrivateSaleArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'PrivateSaleArrayData' as const, data: _data, size: _size };
}

function loadTuplePrivateSaleArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'PrivateSaleArrayData' as const, data: _data, size: _size };
}

function storeTuplePrivateSaleArrayData(source: PrivateSaleArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserPrivateSaleArrayData(): DictionaryValue<PrivateSaleArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storePrivateSaleArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadPrivateSaleArrayData(src.loadRef().beginParse());
        }
    }
}

export type MarketingArrayData = {
    $$type: 'MarketingArrayData';
    data: Dictionary<bigint, TokenVestingInfo>;
    size: bigint;
}

export function storeMarketingArrayData(src: MarketingArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo());
        b_0.storeInt(src.size, 257);
    };
}

export function loadMarketingArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'MarketingArrayData' as const, data: _data, size: _size };
}

function loadTupleMarketingArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'MarketingArrayData' as const, data: _data, size: _size };
}

function storeTupleMarketingArrayData(source: MarketingArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserMarketingArrayData(): DictionaryValue<MarketingArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMarketingArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadMarketingArrayData(src.loadRef().beginParse());
        }
    }
}

export type TeamArrayData = {
    $$type: 'TeamArrayData';
    data: Dictionary<bigint, TokenVestingInfo>;
    size: bigint;
}

export function storeTeamArrayData(src: TeamArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo());
        b_0.storeInt(src.size, 257);
    };
}

export function loadTeamArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'TeamArrayData' as const, data: _data, size: _size };
}

function loadTupleTeamArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'TeamArrayData' as const, data: _data, size: _size };
}

function storeTupleTeamArrayData(source: TeamArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserTeamArrayData(): DictionaryValue<TeamArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTeamArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadTeamArrayData(src.loadRef().beginParse());
        }
    }
}

export type AdvisorArrayData = {
    $$type: 'AdvisorArrayData';
    data: Dictionary<bigint, TokenVestingInfo>;
    size: bigint;
}

export function storeAdvisorArrayData(src: AdvisorArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo());
        b_0.storeInt(src.size, 257);
    };
}

export function loadAdvisorArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'AdvisorArrayData' as const, data: _data, size: _size };
}

function loadTupleAdvisorArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'AdvisorArrayData' as const, data: _data, size: _size };
}

function storeTupleAdvisorArrayData(source: AdvisorArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserAdvisorArrayData(): DictionaryValue<AdvisorArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAdvisorArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadAdvisorArrayData(src.loadRef().beginParse());
        }
    }
}

export type TreasuryArrayData = {
    $$type: 'TreasuryArrayData';
    data: Dictionary<bigint, TokenVestingInfo>;
    size: bigint;
}

export function storeTreasuryArrayData(src: TreasuryArrayData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeDict(src.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo());
        b_0.storeInt(src.size, 257);
    };
}

export function loadTreasuryArrayData(slice: Slice) {
    let sc_0 = slice;
    let _data = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), sc_0);
    let _size = sc_0.loadIntBig(257);
    return { $$type: 'TreasuryArrayData' as const, data: _data, size: _size };
}

function loadTupleTreasuryArrayData(source: TupleReader) {
    let _data = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
    let _size = source.readBigNumber();
    return { $$type: 'TreasuryArrayData' as const, data: _data, size: _size };
}

function storeTupleTreasuryArrayData(source: TreasuryArrayData) {
    let builder = new TupleBuilder();
    builder.writeCell(source.data.size > 0 ? beginCell().storeDictDirect(source.data, Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo()).endCell() : null);
    builder.writeNumber(source.size);
    return builder.build();
}

function dictValueParserTreasuryArrayData(): DictionaryValue<TreasuryArrayData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTreasuryArrayData(src)).endCell());
        },
        parse: (src) => {
            return loadTreasuryArrayData(src.loadRef().beginParse());
        }
    }
}

export type AllData = {
    $$type: 'AllData';
    USDTAmount: bigint;
    balance: string;
    presaleStatus: boolean;
    privatesaleStatus: boolean;
    presaleTime: bigint;
    BZZNPriceInUSD: bigint;
    referralPercentage: bigint;
    minimumBuyPrice: bigint;
    maximumBuyPrice: bigint;
    tokenData: Dictionary<bigint, TokenDistributeInfo>;
    activeRoundIndex: bigint;
}

export function storeAllData(src: AllData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.USDTAmount);
        b_0.storeStringRefTail(src.balance);
        b_0.storeBit(src.presaleStatus);
        b_0.storeBit(src.privatesaleStatus);
        b_0.storeInt(src.presaleTime, 257);
        b_0.storeInt(src.BZZNPriceInUSD, 257);
        b_0.storeInt(src.referralPercentage, 257);
        b_0.storeCoins(src.minimumBuyPrice);
        let b_1 = new Builder();
        b_1.storeCoins(src.maximumBuyPrice);
        b_1.storeDict(src.tokenData, Dictionary.Keys.BigInt(257), dictValueParserTokenDistributeInfo());
        b_1.storeInt(src.activeRoundIndex, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadAllData(slice: Slice) {
    let sc_0 = slice;
    let _USDTAmount = sc_0.loadCoins();
    let _balance = sc_0.loadStringRefTail();
    let _presaleStatus = sc_0.loadBit();
    let _privatesaleStatus = sc_0.loadBit();
    let _presaleTime = sc_0.loadIntBig(257);
    let _BZZNPriceInUSD = sc_0.loadIntBig(257);
    let _referralPercentage = sc_0.loadIntBig(257);
    let _minimumBuyPrice = sc_0.loadCoins();
    let sc_1 = sc_0.loadRef().beginParse();
    let _maximumBuyPrice = sc_1.loadCoins();
    let _tokenData = Dictionary.load(Dictionary.Keys.BigInt(257), dictValueParserTokenDistributeInfo(), sc_1);
    let _activeRoundIndex = sc_1.loadIntBig(257);
    return { $$type: 'AllData' as const, USDTAmount: _USDTAmount, balance: _balance, presaleStatus: _presaleStatus, privatesaleStatus: _privatesaleStatus, presaleTime: _presaleTime, BZZNPriceInUSD: _BZZNPriceInUSD, referralPercentage: _referralPercentage, minimumBuyPrice: _minimumBuyPrice, maximumBuyPrice: _maximumBuyPrice, tokenData: _tokenData, activeRoundIndex: _activeRoundIndex };
}

function loadTupleAllData(source: TupleReader) {
    let _USDTAmount = source.readBigNumber();
    let _balance = source.readString();
    let _presaleStatus = source.readBoolean();
    let _privatesaleStatus = source.readBoolean();
    let _presaleTime = source.readBigNumber();
    let _BZZNPriceInUSD = source.readBigNumber();
    let _referralPercentage = source.readBigNumber();
    let _minimumBuyPrice = source.readBigNumber();
    let _maximumBuyPrice = source.readBigNumber();
    let _tokenData = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenDistributeInfo(), source.readCellOpt());
    let _activeRoundIndex = source.readBigNumber();
    return { $$type: 'AllData' as const, USDTAmount: _USDTAmount, balance: _balance, presaleStatus: _presaleStatus, privatesaleStatus: _privatesaleStatus, presaleTime: _presaleTime, BZZNPriceInUSD: _BZZNPriceInUSD, referralPercentage: _referralPercentage, minimumBuyPrice: _minimumBuyPrice, maximumBuyPrice: _maximumBuyPrice, tokenData: _tokenData, activeRoundIndex: _activeRoundIndex };
}

function storeTupleAllData(source: AllData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.USDTAmount);
    builder.writeString(source.balance);
    builder.writeBoolean(source.presaleStatus);
    builder.writeBoolean(source.privatesaleStatus);
    builder.writeNumber(source.presaleTime);
    builder.writeNumber(source.BZZNPriceInUSD);
    builder.writeNumber(source.referralPercentage);
    builder.writeNumber(source.minimumBuyPrice);
    builder.writeNumber(source.maximumBuyPrice);
    builder.writeCell(source.tokenData.size > 0 ? beginCell().storeDictDirect(source.tokenData, Dictionary.Keys.BigInt(257), dictValueParserTokenDistributeInfo()).endCell() : null);
    builder.writeNumber(source.activeRoundIndex);
    return builder.build();
}

function dictValueParserAllData(): DictionaryValue<AllData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAllData(src)).endCell());
        },
        parse: (src) => {
            return loadAllData(src.loadRef().beginParse());
        }
    }
}

export type DynamicRoundInfo = {
    $$type: 'DynamicRoundInfo';
    roundIndex: bigint;
    startTime: bigint;
    endTime: bigint;
    price: bigint;
    totalToken: bigint;
    remainingToken: bigint;
    active: boolean;
}

export function storeDynamicRoundInfo(src: DynamicRoundInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.roundIndex, 257);
        b_0.storeInt(src.startTime, 257);
        b_0.storeInt(src.endTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.price, 257);
        b_1.storeCoins(src.totalToken);
        b_1.storeCoins(src.remainingToken);
        b_1.storeBit(src.active);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadDynamicRoundInfo(slice: Slice) {
    let sc_0 = slice;
    let _roundIndex = sc_0.loadIntBig(257);
    let _startTime = sc_0.loadIntBig(257);
    let _endTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _price = sc_1.loadIntBig(257);
    let _totalToken = sc_1.loadCoins();
    let _remainingToken = sc_1.loadCoins();
    let _active = sc_1.loadBit();
    return { $$type: 'DynamicRoundInfo' as const, roundIndex: _roundIndex, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken, remainingToken: _remainingToken, active: _active };
}

function loadTupleDynamicRoundInfo(source: TupleReader) {
    let _roundIndex = source.readBigNumber();
    let _startTime = source.readBigNumber();
    let _endTime = source.readBigNumber();
    let _price = source.readBigNumber();
    let _totalToken = source.readBigNumber();
    let _remainingToken = source.readBigNumber();
    let _active = source.readBoolean();
    return { $$type: 'DynamicRoundInfo' as const, roundIndex: _roundIndex, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken, remainingToken: _remainingToken, active: _active };
}

function storeTupleDynamicRoundInfo(source: DynamicRoundInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.roundIndex);
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.endTime);
    builder.writeNumber(source.price);
    builder.writeNumber(source.totalToken);
    builder.writeNumber(source.remainingToken);
    builder.writeBoolean(source.active);
    return builder.build();
}

function dictValueParserDynamicRoundInfo(): DictionaryValue<DynamicRoundInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDynamicRoundInfo(src)).endCell());
        },
        parse: (src) => {
            return loadDynamicRoundInfo(src.loadRef().beginParse());
        }
    }
}

export type BuyTokens = {
    $$type: 'BuyTokens';
    referrer: Address;
    tonAmount: bigint;
    usdtAmount: bigint;
    buyType: bigint;
}

export function storeBuyTokens(src: BuyTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3606749348, 32);
        b_0.storeAddress(src.referrer);
        b_0.storeCoins(src.tonAmount);
        b_0.storeCoins(src.usdtAmount);
        b_0.storeInt(src.buyType, 257);
    };
}

export function loadBuyTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3606749348) { throw Error('Invalid prefix'); }
    let _referrer = sc_0.loadAddress();
    let _tonAmount = sc_0.loadCoins();
    let _usdtAmount = sc_0.loadCoins();
    let _buyType = sc_0.loadIntBig(257);
    return { $$type: 'BuyTokens' as const, referrer: _referrer, tonAmount: _tonAmount, usdtAmount: _usdtAmount, buyType: _buyType };
}

function loadTupleBuyTokens(source: TupleReader) {
    let _referrer = source.readAddress();
    let _tonAmount = source.readBigNumber();
    let _usdtAmount = source.readBigNumber();
    let _buyType = source.readBigNumber();
    return { $$type: 'BuyTokens' as const, referrer: _referrer, tonAmount: _tonAmount, usdtAmount: _usdtAmount, buyType: _buyType };
}

function storeTupleBuyTokens(source: BuyTokens) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.referrer);
    builder.writeNumber(source.tonAmount);
    builder.writeNumber(source.usdtAmount);
    builder.writeNumber(source.buyType);
    return builder.build();
}

function dictValueParserBuyTokens(): DictionaryValue<BuyTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeBuyTokens(src)).endCell());
        },
        parse: (src) => {
            return loadBuyTokens(src.loadRef().beginParse());
        }
    }
}

export type ClaimReferralTokens = {
    $$type: 'ClaimReferralTokens';
    cenderadd: Address;
}

export function storeClaimReferralTokens(src: ClaimReferralTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1990817087, 32);
        b_0.storeAddress(src.cenderadd);
    };
}

export function loadClaimReferralTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1990817087) { throw Error('Invalid prefix'); }
    let _cenderadd = sc_0.loadAddress();
    return { $$type: 'ClaimReferralTokens' as const, cenderadd: _cenderadd };
}

function loadTupleClaimReferralTokens(source: TupleReader) {
    let _cenderadd = source.readAddress();
    return { $$type: 'ClaimReferralTokens' as const, cenderadd: _cenderadd };
}

function storeTupleClaimReferralTokens(source: ClaimReferralTokens) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.cenderadd);
    return builder.build();
}

function dictValueParserClaimReferralTokens(): DictionaryValue<ClaimReferralTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimReferralTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimReferralTokens(src.loadRef().beginParse());
        }
    }
}

export type PrivateSaleMessage = {
    $$type: 'PrivateSaleMessage';
    amount: bigint;
    UserAddress: Address;
}

export function storePrivateSaleMessage(src: PrivateSaleMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2623920856, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.UserAddress);
    };
}

export function loadPrivateSaleMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2623920856) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _UserAddress = sc_0.loadAddress();
    return { $$type: 'PrivateSaleMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function loadTuplePrivateSaleMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _UserAddress = source.readAddress();
    return { $$type: 'PrivateSaleMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function storeTuplePrivateSaleMessage(source: PrivateSaleMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.UserAddress);
    return builder.build();
}

function dictValueParserPrivateSaleMessage(): DictionaryValue<PrivateSaleMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storePrivateSaleMessage(src)).endCell());
        },
        parse: (src) => {
            return loadPrivateSaleMessage(src.loadRef().beginParse());
        }
    }
}

export type MarketingMessage = {
    $$type: 'MarketingMessage';
    amount: bigint;
    UserAddress: Address;
}

export function storeMarketingMessage(src: MarketingMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1587004579, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.UserAddress);
    };
}

export function loadMarketingMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1587004579) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _UserAddress = sc_0.loadAddress();
    return { $$type: 'MarketingMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function loadTupleMarketingMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _UserAddress = source.readAddress();
    return { $$type: 'MarketingMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function storeTupleMarketingMessage(source: MarketingMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.UserAddress);
    return builder.build();
}

function dictValueParserMarketingMessage(): DictionaryValue<MarketingMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMarketingMessage(src)).endCell());
        },
        parse: (src) => {
            return loadMarketingMessage(src.loadRef().beginParse());
        }
    }
}

export type TeamMessage = {
    $$type: 'TeamMessage';
    amount: bigint;
    UserAddress: Address;
}

export function storeTeamMessage(src: TeamMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3592779077, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.UserAddress);
    };
}

export function loadTeamMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3592779077) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _UserAddress = sc_0.loadAddress();
    return { $$type: 'TeamMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function loadTupleTeamMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _UserAddress = source.readAddress();
    return { $$type: 'TeamMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function storeTupleTeamMessage(source: TeamMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.UserAddress);
    return builder.build();
}

function dictValueParserTeamMessage(): DictionaryValue<TeamMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTeamMessage(src)).endCell());
        },
        parse: (src) => {
            return loadTeamMessage(src.loadRef().beginParse());
        }
    }
}

export type AdvisorMessage = {
    $$type: 'AdvisorMessage';
    amount: bigint;
    UserAddress: Address;
}

export function storeAdvisorMessage(src: AdvisorMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(509683636, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.UserAddress);
    };
}

export function loadAdvisorMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 509683636) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _UserAddress = sc_0.loadAddress();
    return { $$type: 'AdvisorMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function loadTupleAdvisorMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _UserAddress = source.readAddress();
    return { $$type: 'AdvisorMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function storeTupleAdvisorMessage(source: AdvisorMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.UserAddress);
    return builder.build();
}

function dictValueParserAdvisorMessage(): DictionaryValue<AdvisorMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAdvisorMessage(src)).endCell());
        },
        parse: (src) => {
            return loadAdvisorMessage(src.loadRef().beginParse());
        }
    }
}

export type TreasuryMessage = {
    $$type: 'TreasuryMessage';
    amount: bigint;
    UserAddress: Address;
}

export function storeTreasuryMessage(src: TreasuryMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4204001517, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.UserAddress);
    };
}

export function loadTreasuryMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4204001517) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _UserAddress = sc_0.loadAddress();
    return { $$type: 'TreasuryMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function loadTupleTreasuryMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _UserAddress = source.readAddress();
    return { $$type: 'TreasuryMessage' as const, amount: _amount, UserAddress: _UserAddress };
}

function storeTupleTreasuryMessage(source: TreasuryMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.UserAddress);
    return builder.build();
}

function dictValueParserTreasuryMessage(): DictionaryValue<TreasuryMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTreasuryMessage(src)).endCell());
        },
        parse: (src) => {
            return loadTreasuryMessage(src.loadRef().beginParse());
        }
    }
}

export type ClaimSingleToken = {
    $$type: 'ClaimSingleToken';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimSingleToken(src: ClaimSingleToken) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2644494419, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimSingleToken(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2644494419) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimSingleToken' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimSingleToken(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimSingleToken' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimSingleToken(source: ClaimSingleToken) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimSingleToken(): DictionaryValue<ClaimSingleToken> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimSingleToken(src)).endCell());
        },
        parse: (src) => {
            return loadClaimSingleToken(src.loadRef().beginParse());
        }
    }
}

export type ClaimPrivateSaleTokens = {
    $$type: 'ClaimPrivateSaleTokens';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimPrivateSaleTokens(src: ClaimPrivateSaleTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(276636907, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimPrivateSaleTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 276636907) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimPrivateSaleTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimPrivateSaleTokens(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimPrivateSaleTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimPrivateSaleTokens(source: ClaimPrivateSaleTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimPrivateSaleTokens(): DictionaryValue<ClaimPrivateSaleTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimPrivateSaleTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimPrivateSaleTokens(src.loadRef().beginParse());
        }
    }
}

export type ClaimMarketingeTokens = {
    $$type: 'ClaimMarketingeTokens';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimMarketingeTokens(src: ClaimMarketingeTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(502033645, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimMarketingeTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 502033645) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimMarketingeTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimMarketingeTokens(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimMarketingeTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimMarketingeTokens(source: ClaimMarketingeTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimMarketingeTokens(): DictionaryValue<ClaimMarketingeTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimMarketingeTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimMarketingeTokens(src.loadRef().beginParse());
        }
    }
}

export type ClaimTeamTokens = {
    $$type: 'ClaimTeamTokens';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimTeamTokens(src: ClaimTeamTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2960852120, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimTeamTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2960852120) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimTeamTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimTeamTokens(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimTeamTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimTeamTokens(source: ClaimTeamTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimTeamTokens(): DictionaryValue<ClaimTeamTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimTeamTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimTeamTokens(src.loadRef().beginParse());
        }
    }
}

export type ClaimAdvisorTokens = {
    $$type: 'ClaimAdvisorTokens';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimAdvisorTokens(src: ClaimAdvisorTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(136988956, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimAdvisorTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 136988956) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimAdvisorTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimAdvisorTokens(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimAdvisorTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimAdvisorTokens(source: ClaimAdvisorTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimAdvisorTokens(): DictionaryValue<ClaimAdvisorTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimAdvisorTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimAdvisorTokens(src.loadRef().beginParse());
        }
    }
}

export type ClaimTreasuryTokens = {
    $$type: 'ClaimTreasuryTokens';
    index: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimTreasuryTokens(src: ClaimTreasuryTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(722305021, 32);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimTreasuryTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 722305021) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimTreasuryTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimTreasuryTokens(source: TupleReader) {
    let _index = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimTreasuryTokens' as const, index: _index, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimTreasuryTokens(source: ClaimTreasuryTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimTreasuryTokens(): DictionaryValue<ClaimTreasuryTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimTreasuryTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimTreasuryTokens(src.loadRef().beginParse());
        }
    }
}

export type WithdrawUsdt = {
    $$type: 'WithdrawUsdt';
    cenderadd: Address;
}

export function storeWithdrawUsdt(src: WithdrawUsdt) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3600769028, 32);
        b_0.storeAddress(src.cenderadd);
    };
}

export function loadWithdrawUsdt(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3600769028) { throw Error('Invalid prefix'); }
    let _cenderadd = sc_0.loadAddress();
    return { $$type: 'WithdrawUsdt' as const, cenderadd: _cenderadd };
}

function loadTupleWithdrawUsdt(source: TupleReader) {
    let _cenderadd = source.readAddress();
    return { $$type: 'WithdrawUsdt' as const, cenderadd: _cenderadd };
}

function storeTupleWithdrawUsdt(source: WithdrawUsdt) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.cenderadd);
    return builder.build();
}

function dictValueParserWithdrawUsdt(): DictionaryValue<WithdrawUsdt> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdrawUsdt(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawUsdt(src.loadRef().beginParse());
        }
    }
}

export type WithdrawUsdtWithNumber = {
    $$type: 'WithdrawUsdtWithNumber';
    cenderadd: Address;
    amount: bigint;
}

export function storeWithdrawUsdtWithNumber(src: WithdrawUsdtWithNumber) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(85808282, 32);
        b_0.storeAddress(src.cenderadd);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadWithdrawUsdtWithNumber(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 85808282) { throw Error('Invalid prefix'); }
    let _cenderadd = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'WithdrawUsdtWithNumber' as const, cenderadd: _cenderadd, amount: _amount };
}

function loadTupleWithdrawUsdtWithNumber(source: TupleReader) {
    let _cenderadd = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'WithdrawUsdtWithNumber' as const, cenderadd: _cenderadd, amount: _amount };
}

function storeTupleWithdrawUsdtWithNumber(source: WithdrawUsdtWithNumber) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.cenderadd);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdrawUsdtWithNumber(): DictionaryValue<WithdrawUsdtWithNumber> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdrawUsdtWithNumber(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawUsdtWithNumber(src.loadRef().beginParse());
        }
    }
}

export type WithdrawBZZN = {
    $$type: 'WithdrawBZZN';
    cenderadd: Address;
    amount: bigint;
}

export function storeWithdrawBZZN(src: WithdrawBZZN) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2196575032, 32);
        b_0.storeAddress(src.cenderadd);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadWithdrawBZZN(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2196575032) { throw Error('Invalid prefix'); }
    let _cenderadd = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'WithdrawBZZN' as const, cenderadd: _cenderadd, amount: _amount };
}

function loadTupleWithdrawBZZN(source: TupleReader) {
    let _cenderadd = source.readAddress();
    let _amount = source.readBigNumber();
    return { $$type: 'WithdrawBZZN' as const, cenderadd: _cenderadd, amount: _amount };
}

function storeTupleWithdrawBZZN(source: WithdrawBZZN) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.cenderadd);
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdrawBZZN(): DictionaryValue<WithdrawBZZN> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdrawBZZN(src)).endCell());
        },
        parse: (src) => {
            return loadWithdrawBZZN(src.loadRef().beginParse());
        }
    }
}

export type ChangeTokenPrice = {
    $$type: 'ChangeTokenPrice';
    price: bigint;
}

export function storeChangeTokenPrice(src: ChangeTokenPrice) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2234742056, 32);
        b_0.storeInt(src.price, 257);
    };
}

export function loadChangeTokenPrice(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2234742056) { throw Error('Invalid prefix'); }
    let _price = sc_0.loadIntBig(257);
    return { $$type: 'ChangeTokenPrice' as const, price: _price };
}

function loadTupleChangeTokenPrice(source: TupleReader) {
    let _price = source.readBigNumber();
    return { $$type: 'ChangeTokenPrice' as const, price: _price };
}

function storeTupleChangeTokenPrice(source: ChangeTokenPrice) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.price);
    return builder.build();
}

function dictValueParserChangeTokenPrice(): DictionaryValue<ChangeTokenPrice> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeTokenPrice(src)).endCell());
        },
        parse: (src) => {
            return loadChangeTokenPrice(src.loadRef().beginParse());
        }
    }
}

export type ChangeSeedRoundTimeMessage = {
    $$type: 'ChangeSeedRoundTimeMessage';
    time: bigint;
}

export function storeChangeSeedRoundTimeMessage(src: ChangeSeedRoundTimeMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2834877433, 32);
        b_0.storeInt(src.time, 257);
    };
}

export function loadChangeSeedRoundTimeMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2834877433) { throw Error('Invalid prefix'); }
    let _time = sc_0.loadIntBig(257);
    return { $$type: 'ChangeSeedRoundTimeMessage' as const, time: _time };
}

function loadTupleChangeSeedRoundTimeMessage(source: TupleReader) {
    let _time = source.readBigNumber();
    return { $$type: 'ChangeSeedRoundTimeMessage' as const, time: _time };
}

function storeTupleChangeSeedRoundTimeMessage(source: ChangeSeedRoundTimeMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.time);
    return builder.build();
}

function dictValueParserChangeSeedRoundTimeMessage(): DictionaryValue<ChangeSeedRoundTimeMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeSeedRoundTimeMessage(src)).endCell());
        },
        parse: (src) => {
            return loadChangeSeedRoundTimeMessage(src.loadRef().beginParse());
        }
    }
}

export type ChangeReferralPercentageMessage = {
    $$type: 'ChangeReferralPercentageMessage';
    percentage: bigint;
}

export function storeChangeReferralPercentageMessage(src: ChangeReferralPercentageMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4112867585, 32);
        b_0.storeInt(src.percentage, 257);
    };
}

export function loadChangeReferralPercentageMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4112867585) { throw Error('Invalid prefix'); }
    let _percentage = sc_0.loadIntBig(257);
    return { $$type: 'ChangeReferralPercentageMessage' as const, percentage: _percentage };
}

function loadTupleChangeReferralPercentageMessage(source: TupleReader) {
    let _percentage = source.readBigNumber();
    return { $$type: 'ChangeReferralPercentageMessage' as const, percentage: _percentage };
}

function storeTupleChangeReferralPercentageMessage(source: ChangeReferralPercentageMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.percentage);
    return builder.build();
}

function dictValueParserChangeReferralPercentageMessage(): DictionaryValue<ChangeReferralPercentageMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeReferralPercentageMessage(src)).endCell());
        },
        parse: (src) => {
            return loadChangeReferralPercentageMessage(src.loadRef().beginParse());
        }
    }
}

export type MaximumUsdtAmountMessage = {
    $$type: 'MaximumUsdtAmountMessage';
    amount: bigint;
}

export function storeMaximumUsdtAmountMessage(src: MaximumUsdtAmountMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3137358584, 32);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadMaximumUsdtAmountMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3137358584) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'MaximumUsdtAmountMessage' as const, amount: _amount };
}

function loadTupleMaximumUsdtAmountMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'MaximumUsdtAmountMessage' as const, amount: _amount };
}

function storeTupleMaximumUsdtAmountMessage(source: MaximumUsdtAmountMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserMaximumUsdtAmountMessage(): DictionaryValue<MaximumUsdtAmountMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMaximumUsdtAmountMessage(src)).endCell());
        },
        parse: (src) => {
            return loadMaximumUsdtAmountMessage(src.loadRef().beginParse());
        }
    }
}

export type MinimumUsdtAmountMessage = {
    $$type: 'MinimumUsdtAmountMessage';
    amount: bigint;
}

export function storeMinimumUsdtAmountMessage(src: MinimumUsdtAmountMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1547832652, 32);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadMinimumUsdtAmountMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1547832652) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'MinimumUsdtAmountMessage' as const, amount: _amount };
}

function loadTupleMinimumUsdtAmountMessage(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'MinimumUsdtAmountMessage' as const, amount: _amount };
}

function storeTupleMinimumUsdtAmountMessage(source: MinimumUsdtAmountMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserMinimumUsdtAmountMessage(): DictionaryValue<MinimumUsdtAmountMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMinimumUsdtAmountMessage(src)).endCell());
        },
        parse: (src) => {
            return loadMinimumUsdtAmountMessage(src.loadRef().beginParse());
        }
    }
}

export type CreateDynamicRoundMessage = {
    $$type: 'CreateDynamicRoundMessage';
    startTime: bigint;
    endTime: bigint;
    price: bigint;
    totalToken: bigint;
}

export function storeCreateDynamicRoundMessage(src: CreateDynamicRoundMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1363350507, 32);
        b_0.storeInt(src.startTime, 257);
        b_0.storeInt(src.endTime, 257);
        b_0.storeInt(src.price, 257);
        b_0.storeCoins(src.totalToken);
    };
}

export function loadCreateDynamicRoundMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1363350507) { throw Error('Invalid prefix'); }
    let _startTime = sc_0.loadIntBig(257);
    let _endTime = sc_0.loadIntBig(257);
    let _price = sc_0.loadIntBig(257);
    let _totalToken = sc_0.loadCoins();
    return { $$type: 'CreateDynamicRoundMessage' as const, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken };
}

function loadTupleCreateDynamicRoundMessage(source: TupleReader) {
    let _startTime = source.readBigNumber();
    let _endTime = source.readBigNumber();
    let _price = source.readBigNumber();
    let _totalToken = source.readBigNumber();
    return { $$type: 'CreateDynamicRoundMessage' as const, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken };
}

function storeTupleCreateDynamicRoundMessage(source: CreateDynamicRoundMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.endTime);
    builder.writeNumber(source.price);
    builder.writeNumber(source.totalToken);
    return builder.build();
}

function dictValueParserCreateDynamicRoundMessage(): DictionaryValue<CreateDynamicRoundMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCreateDynamicRoundMessage(src)).endCell());
        },
        parse: (src) => {
            return loadCreateDynamicRoundMessage(src.loadRef().beginParse());
        }
    }
}

export type UpdateDynamicRoundMessage = {
    $$type: 'UpdateDynamicRoundMessage';
    roundIndex: bigint;
    startTime: bigint;
    endTime: bigint;
    price: bigint;
    totalToken: bigint;
}

export function storeUpdateDynamicRoundMessage(src: UpdateDynamicRoundMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1992377585, 32);
        b_0.storeInt(src.roundIndex, 257);
        b_0.storeInt(src.startTime, 257);
        b_0.storeInt(src.endTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.price, 257);
        b_1.storeCoins(src.totalToken);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadUpdateDynamicRoundMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1992377585) { throw Error('Invalid prefix'); }
    let _roundIndex = sc_0.loadIntBig(257);
    let _startTime = sc_0.loadIntBig(257);
    let _endTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _price = sc_1.loadIntBig(257);
    let _totalToken = sc_1.loadCoins();
    return { $$type: 'UpdateDynamicRoundMessage' as const, roundIndex: _roundIndex, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken };
}

function loadTupleUpdateDynamicRoundMessage(source: TupleReader) {
    let _roundIndex = source.readBigNumber();
    let _startTime = source.readBigNumber();
    let _endTime = source.readBigNumber();
    let _price = source.readBigNumber();
    let _totalToken = source.readBigNumber();
    return { $$type: 'UpdateDynamicRoundMessage' as const, roundIndex: _roundIndex, startTime: _startTime, endTime: _endTime, price: _price, totalToken: _totalToken };
}

function storeTupleUpdateDynamicRoundMessage(source: UpdateDynamicRoundMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.roundIndex);
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.endTime);
    builder.writeNumber(source.price);
    builder.writeNumber(source.totalToken);
    return builder.build();
}

function dictValueParserUpdateDynamicRoundMessage(): DictionaryValue<UpdateDynamicRoundMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUpdateDynamicRoundMessage(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateDynamicRoundMessage(src.loadRef().beginParse());
        }
    }
}

export type StartDynamicRoundMessage = {
    $$type: 'StartDynamicRoundMessage';
    roundIndex: bigint;
}

export function storeStartDynamicRoundMessage(src: StartDynamicRoundMessage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1266194413, 32);
        b_0.storeInt(src.roundIndex, 257);
    };
}

export function loadStartDynamicRoundMessage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1266194413) { throw Error('Invalid prefix'); }
    let _roundIndex = sc_0.loadIntBig(257);
    return { $$type: 'StartDynamicRoundMessage' as const, roundIndex: _roundIndex };
}

function loadTupleStartDynamicRoundMessage(source: TupleReader) {
    let _roundIndex = source.readBigNumber();
    return { $$type: 'StartDynamicRoundMessage' as const, roundIndex: _roundIndex };
}

function storeTupleStartDynamicRoundMessage(source: StartDynamicRoundMessage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.roundIndex);
    return builder.build();
}

function dictValueParserStartDynamicRoundMessage(): DictionaryValue<StartDynamicRoundMessage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStartDynamicRoundMessage(src)).endCell());
        },
        parse: (src) => {
            return loadStartDynamicRoundMessage(src.loadRef().beginParse());
        }
    }
}

 type SamplePresale_init_args = {
    $$type: 'SamplePresale_init_args';
}

function initSamplePresale_init_args(src: SamplePresale_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function SamplePresale_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initSamplePresale_init_args({ $$type: 'SamplePresale_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const SamplePresale_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    1275: { message: `Presale is not start yet` },
    7212: { message: `Invalid Token` },
    10278: { message: `Invalid Round Index` },
    12033: { message: `Invalid Time` },
    12812: { message: `Invalid Price` },
    23478: { message: `Presale is not over Yet` },
    27921: { message: `Only owner is allowed to withdraw` },
    30183: { message: `NO_REFERRAL_TOKENS_AVAILABLE` },
    32633: { message: `Presale is over` },
    35441: { message: `Seed Token Supply is completed` },
    36571: { message: `SEEDROUND_PERIOD_INCOMPLETE` },
    38387: { message: `Contract does not have usdt` },
    43297: { message: `Index not found!` },
    44418: { message: `You have not sufficient Token` },
    46387: { message: `not have any refferals` },
    48332: { message: `Invalid USDT Amount` },
    54634: { message: `You are not owner` },
    60511: { message: `ALREADY_ADDED_REFERRER` },
    63386: { message: `privatesale is not start yet` },
    63810: { message: `Privatesale Token Supply is completed` },
}

const SamplePresale_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonWalletData","header":null,"fields":[{"name":"balance","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"master","type":{"kind":"simple","type":"address","optional":false}},{"name":"walletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"TokenTransfer","header":260734629,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenTransferInternal","header":395134233,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_ton_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenNotification","header":1935855772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"from","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"TokenBurn","header":1499400124,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TokenBurnNotification","header":2078119902,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"TokenExcesses","header":3576854235,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"TokenUpdateContent","header":2937889386,"fields":[{"name":"content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"TokenDistributeInfo","header":null,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"tokenDistrubutedPercentage","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalPhaseToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"percentage","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalSuppliedToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UserData","header":null,"fields":[{"name":"beneficiary","type":{"kind":"simple","type":"address","optional":false}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"vestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"lastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initialCliff","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"releaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"phaseName","type":{"kind":"simple","type":"string","optional":false}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"USDTToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TokenVestingInfo","header":null,"fields":[{"name":"beneficiary","type":{"kind":"simple","type":"address","optional":false}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"vestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"lastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"releaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initialCliff","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"phaseName","type":{"kind":"simple","type":"string","optional":false}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"USDTToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UserArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"RefferData","header":null,"fields":[{"name":"refferalAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"date","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"claim","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"RefferDetails","header":null,"fields":[{"name":"reffer","type":{"kind":"dict","key":"int","value":"RefferData","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"PrivateSaleArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MarketingArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TeamArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"AdvisorArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TreasuryArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"AllData","header":null,"fields":[{"name":"USDTAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"balance","type":{"kind":"simple","type":"string","optional":false}},{"name":"presaleStatus","type":{"kind":"simple","type":"bool","optional":false}},{"name":"privatesaleStatus","type":{"kind":"simple","type":"bool","optional":false}},{"name":"presaleTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"BZZNPriceInUSD","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"referralPercentage","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"minimumBuyPrice","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"maximumBuyPrice","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"tokenData","type":{"kind":"dict","key":"int","value":"TokenDistributeInfo","valueFormat":"ref"}},{"name":"activeRoundIndex","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"DynamicRoundInfo","header":null,"fields":[{"name":"roundIndex","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"endTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"BuyTokens","header":3606749348,"fields":[{"name":"referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"tonAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"usdtAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"buyType","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ClaimReferralTokens","header":1990817087,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"PrivateSaleMessage","header":2623920856,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"MarketingMessage","header":1587004579,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TeamMessage","header":3592779077,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AdvisorMessage","header":509683636,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TreasuryMessage","header":4204001517,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimSingleToken","header":2644494419,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimPrivateSaleTokens","header":276636907,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimMarketingeTokens","header":502033645,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTeamTokens","header":2960852120,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimAdvisorTokens","header":136988956,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTreasuryTokens","header":722305021,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"WithdrawUsdt","header":3600769028,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"WithdrawUsdtWithNumber","header":85808282,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"WithdrawBZZN","header":2196575032,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ChangeTokenPrice","header":2234742056,"fields":[{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ChangeSeedRoundTimeMessage","header":2834877433,"fields":[{"name":"time","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ChangeReferralPercentageMessage","header":4112867585,"fields":[{"name":"percentage","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MaximumUsdtAmountMessage","header":3137358584,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MinimumUsdtAmountMessage","header":1547832652,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"CreateDynamicRoundMessage","header":1363350507,"fields":[{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"endTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UpdateDynamicRoundMessage","header":1992377585,"fields":[{"name":"roundIndex","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"endTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"price","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"StartDynamicRoundMessage","header":1266194413,"fields":[{"name":"roundIndex","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
]

const SamplePresale_getters: ABIGetter[] = [
    {"name":"getData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"num","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"UserData","optional":true}},
    {"name":"getAllSeedTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},
    {"name":"getAllSeedData","arguments":[],"returnType":{"kind":"dict","key":"address","value":"UserArrayData","valueFormat":"ref"}},
    {"name":"getAllData","arguments":[],"returnType":{"kind":"simple","type":"AllData","optional":false}},
    {"name":"getAllPrivateTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllMarketingTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTeamTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllAdvisorTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTreasuryTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllReferralDetails","arguments":[{"name":"referrerAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"RefferData","valueFormat":"ref"}},
    {"name":"getReferrer","arguments":[{"name":"userAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"getDynamicRoundData","arguments":[],"returnType":{"kind":"dict","key":"int","value":"DynamicRoundInfo","valueFormat":"ref"}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const SamplePresale_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"start Presale"}},
    {"receiver":"internal","message":{"kind":"text","text":"close Presale"}},
    {"receiver":"internal","message":{"kind":"typed","type":"CreateDynamicRoundMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"UpdateDynamicRoundMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"StartDynamicRoundMessage"}},
    {"receiver":"internal","message":{"kind":"text","text":"End Dynamic Round"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TokenNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"BuyTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TokenExcesses"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MarketingMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TeamMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"AdvisorMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TreasuryMessage"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimSingleToken"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimMarketingeTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTeamTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimAdvisorTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTreasuryTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimReferralTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"WithdrawUsdt"}},
    {"receiver":"internal","message":{"kind":"typed","type":"WithdrawUsdtWithNumber"}},
    {"receiver":"internal","message":{"kind":"typed","type":"WithdrawBZZN"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeTokenPrice"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeSeedRoundTimeMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeReferralPercentageMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MinimumUsdtAmountMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MaximumUsdtAmountMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class SamplePresale implements Contract {
    
    static async init() {
        return await SamplePresale_init();
    }
    
    static async fromInit() {
        const init = await SamplePresale_init();
        const address = contractAddress(0, init);
        return new SamplePresale(address, init);
    }
    
    static fromAddress(address: Address) {
        return new SamplePresale(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  SamplePresale_types,
        getters: SamplePresale_getters,
        receivers: SamplePresale_receivers,
        errors: SamplePresale_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: 'start Presale' | 'close Presale' | CreateDynamicRoundMessage | UpdateDynamicRoundMessage | StartDynamicRoundMessage | 'End Dynamic Round' | TokenNotification | BuyTokens | TokenExcesses | MarketingMessage | TeamMessage | AdvisorMessage | TreasuryMessage | 'withdraw safe' | ClaimSingleToken | ClaimMarketingeTokens | ClaimTeamTokens | ClaimAdvisorTokens | ClaimTreasuryTokens | ClaimReferralTokens | WithdrawUsdt | WithdrawUsdtWithNumber | WithdrawBZZN | ChangeTokenPrice | ChangeSeedRoundTimeMessage | ChangeReferralPercentageMessage | MinimumUsdtAmountMessage | MaximumUsdtAmountMessage | Deploy) {
        
        let body: Cell | null = null;
        if (message === 'start Presale') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'close Presale') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateDynamicRoundMessage') {
            body = beginCell().store(storeCreateDynamicRoundMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UpdateDynamicRoundMessage') {
            body = beginCell().store(storeUpdateDynamicRoundMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'StartDynamicRoundMessage') {
            body = beginCell().store(storeStartDynamicRoundMessage(message)).endCell();
        }
        if (message === 'End Dynamic Round') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenNotification') {
            body = beginCell().store(storeTokenNotification(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'BuyTokens') {
            body = beginCell().store(storeBuyTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenExcesses') {
            body = beginCell().store(storeTokenExcesses(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MarketingMessage') {
            body = beginCell().store(storeMarketingMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TeamMessage') {
            body = beginCell().store(storeTeamMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AdvisorMessage') {
            body = beginCell().store(storeAdvisorMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TreasuryMessage') {
            body = beginCell().store(storeTreasuryMessage(message)).endCell();
        }
        if (message === 'withdraw safe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimSingleToken') {
            body = beginCell().store(storeClaimSingleToken(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimMarketingeTokens') {
            body = beginCell().store(storeClaimMarketingeTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimTeamTokens') {
            body = beginCell().store(storeClaimTeamTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimAdvisorTokens') {
            body = beginCell().store(storeClaimAdvisorTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimTreasuryTokens') {
            body = beginCell().store(storeClaimTreasuryTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimReferralTokens') {
            body = beginCell().store(storeClaimReferralTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'WithdrawUsdt') {
            body = beginCell().store(storeWithdrawUsdt(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'WithdrawUsdtWithNumber') {
            body = beginCell().store(storeWithdrawUsdtWithNumber(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'WithdrawBZZN') {
            body = beginCell().store(storeWithdrawBZZN(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeTokenPrice') {
            body = beginCell().store(storeChangeTokenPrice(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeSeedRoundTimeMessage') {
            body = beginCell().store(storeChangeSeedRoundTimeMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeReferralPercentageMessage') {
            body = beginCell().store(storeChangeReferralPercentageMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MinimumUsdtAmountMessage') {
            body = beginCell().store(storeMinimumUsdtAmountMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MaximumUsdtAmountMessage') {
            body = beginCell().store(storeMaximumUsdtAmountMessage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetData(provider: ContractProvider, addr: Address, num: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        builder.writeNumber(num);
        let source = (await provider.get('getData', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleUserData(result_p) : null;
        return result;
    }
    
    async getGetAllSeedTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllSeedTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserUserData(), source.readCellOpt());
        return result;
    }
    
    async getGetAllSeedData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getAllSeedData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserUserArrayData(), source.readCellOpt());
        return result;
    }
    
    async getGetAllData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getAllData', builder.build())).stack;
        const result = loadTupleAllData(source);
        return result;
    }
    
    async getGetAllPrivateTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllPrivateTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
        return result;
    }
    
    async getGetAllMarketingTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllMarketingTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
        return result;
    }
    
    async getGetAllTeamTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllTeamTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
        return result;
    }
    
    async getGetAllAdvisorTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllAdvisorTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
        return result;
    }
    
    async getGetAllTreasuryTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllTreasuryTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenVestingInfo(), source.readCellOpt());
        return result;
    }
    
    async getGetAllReferralDetails(provider: ContractProvider, referrerAddress: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(referrerAddress);
        let source = (await provider.get('getAllReferralDetails', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserRefferData(), source.readCellOpt());
        return result;
    }
    
    async getGetReferrer(provider: ContractProvider, userAddress: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(userAddress);
        let source = (await provider.get('getReferrer', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetDynamicRoundData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getDynamicRoundData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserDynamicRoundInfo(), source.readCellOpt());
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}