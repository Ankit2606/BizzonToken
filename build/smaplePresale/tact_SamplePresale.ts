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

export type TokenDistrubuteInfo = {
    $$type: 'TokenDistrubuteInfo';
    name: string;
    tokenDistrubutedPercentage: bigint;
    totalPhaseToken: bigint;
    percentage: bigint;
    totalSuppliedToken: bigint;
}

export function storeTokenDistrubuteInfo(src: TokenDistrubuteInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.name);
        b_0.storeInt(src.tokenDistrubutedPercentage, 257);
        b_0.storeCoins(src.totalPhaseToken);
        b_0.storeInt(src.percentage, 257);
        b_0.storeCoins(src.totalSuppliedToken);
    };
}

export function loadTokenDistrubuteInfo(slice: Slice) {
    let sc_0 = slice;
    let _name = sc_0.loadStringRefTail();
    let _tokenDistrubutedPercentage = sc_0.loadIntBig(257);
    let _totalPhaseToken = sc_0.loadCoins();
    let _percentage = sc_0.loadIntBig(257);
    let _totalSuppliedToken = sc_0.loadCoins();
    return { $$type: 'TokenDistrubuteInfo' as const, name: _name, tokenDistrubutedPercentage: _tokenDistrubutedPercentage, totalPhaseToken: _totalPhaseToken, percentage: _percentage, totalSuppliedToken: _totalSuppliedToken };
}

function loadTupleTokenDistrubuteInfo(source: TupleReader) {
    let _name = source.readString();
    let _tokenDistrubutedPercentage = source.readBigNumber();
    let _totalPhaseToken = source.readBigNumber();
    let _percentage = source.readBigNumber();
    let _totalSuppliedToken = source.readBigNumber();
    return { $$type: 'TokenDistrubuteInfo' as const, name: _name, tokenDistrubutedPercentage: _tokenDistrubutedPercentage, totalPhaseToken: _totalPhaseToken, percentage: _percentage, totalSuppliedToken: _totalSuppliedToken };
}

function storeTupleTokenDistrubuteInfo(source: TokenDistrubuteInfo) {
    let builder = new TupleBuilder();
    builder.writeString(source.name);
    builder.writeNumber(source.tokenDistrubutedPercentage);
    builder.writeNumber(source.totalPhaseToken);
    builder.writeNumber(source.percentage);
    builder.writeNumber(source.totalSuppliedToken);
    return builder.build();
}

function dictValueParserTokenDistrubuteInfo(): DictionaryValue<TokenDistrubuteInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenDistrubuteInfo(src)).endCell());
        },
        parse: (src) => {
            return loadTokenDistrubuteInfo(src.loadRef().beginParse());
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
    claim: boolean;
}

export function storeRefferData(src: RefferData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.refferalAddress);
        b_0.storeInt(src.amount, 257);
        b_0.storeBit(src.claim);
    };
}

export function loadRefferData(slice: Slice) {
    let sc_0 = slice;
    let _refferalAddress = sc_0.loadAddress();
    let _amount = sc_0.loadIntBig(257);
    let _claim = sc_0.loadBit();
    return { $$type: 'RefferData' as const, refferalAddress: _refferalAddress, amount: _amount, claim: _claim };
}

function loadTupleRefferData(source: TupleReader) {
    let _refferalAddress = source.readAddress();
    let _amount = source.readBigNumber();
    let _claim = source.readBoolean();
    return { $$type: 'RefferData' as const, refferalAddress: _refferalAddress, amount: _amount, claim: _claim };
}

function storeTupleRefferData(source: RefferData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.refferalAddress);
    builder.writeNumber(source.amount);
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

export type BuyTokens = {
    $$type: 'BuyTokens';
    referrer: Address;
    usdt: bigint;
}

export function storeBuyTokens(src: BuyTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1522516162, 32);
        b_0.storeAddress(src.referrer);
        b_0.storeCoins(src.usdt);
    };
}

export function loadBuyTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1522516162) { throw Error('Invalid prefix'); }
    let _referrer = sc_0.loadAddress();
    let _usdt = sc_0.loadCoins();
    return { $$type: 'BuyTokens' as const, referrer: _referrer, usdt: _usdt };
}

function loadTupleBuyTokens(source: TupleReader) {
    let _referrer = source.readAddress();
    let _usdt = source.readBigNumber();
    return { $$type: 'BuyTokens' as const, referrer: _referrer, usdt: _usdt };
}

function storeTupleBuyTokens(source: BuyTokens) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.referrer);
    builder.writeNumber(source.usdt);
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

export type ClaimTokens = {
    $$type: 'ClaimTokens';
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimTokens(src: ClaimTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(86893668, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 86893668) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimTokens(source: ClaimTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.cenderadd);
    builder.writeAddress(source.senderadd);
    return builder.build();
}

function dictValueParserClaimTokens(): DictionaryValue<ClaimTokens> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeClaimTokens(src)).endCell());
        },
        parse: (src) => {
            return loadClaimTokens(src.loadRef().beginParse());
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
    15509: { message: `Only deployer is allowed to withdraw` },
    30183: { message: `NO_REFERRAL_TOKENS_AVAILABLE` },
    35441: { message: `Seed Token Supply is completed` },
    43297: { message: `Index not found!` },
    44418: { message: `You have not sufficient Token` },
    46387: { message: `not have any refferals` },
    60511: { message: `ALREADY_ADDED_REFERRER` },
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
    {"name":"TokenDistrubuteInfo","header":null,"fields":[{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"tokenDistrubutedPercentage","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalPhaseToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"percentage","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"totalSuppliedToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UserData","header":null,"fields":[{"name":"beneficiary","type":{"kind":"simple","type":"address","optional":false}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"vestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"lastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initialCliff","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"releaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"phaseName","type":{"kind":"simple","type":"string","optional":false}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"USDTToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TokenVestingInfo","header":null,"fields":[{"name":"beneficiary","type":{"kind":"simple","type":"address","optional":false}},{"name":"totalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"vestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"lastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"releaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initialCliff","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"phaseName","type":{"kind":"simple","type":"string","optional":false}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"USDTToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"UserArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"RefferData","header":null,"fields":[{"name":"refferalAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"claim","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"RefferDetails","header":null,"fields":[{"name":"reffer","type":{"kind":"dict","key":"int","value":"RefferData","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"PrivateSaleArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MarketingArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TeamArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"AdvisorArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TreasuryArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"BuyTokens","header":1522516162,"fields":[{"name":"referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"usdt","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"ClaimReferralTokens","header":1990817087,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"PrivateSaleMessage","header":2623920856,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"MarketingMessage","header":1587004579,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TeamMessage","header":3592779077,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AdvisorMessage","header":509683636,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TreasuryMessage","header":4204001517,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTokens","header":86893668,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimSingleToken","header":2644494419,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimPrivateSaleTokens","header":276636907,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimMarketingeTokens","header":502033645,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTeamTokens","header":2960852120,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimAdvisorTokens","header":136988956,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTreasuryTokens","header":722305021,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
]

const SamplePresale_getters: ABIGetter[] = [
    {"name":"getData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"num","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"UserData","optional":true}},
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getAllSeedTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},
    {"name":"getAllPrivateTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllMarketingTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTeamTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllAdvisorTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTreasuryTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getTokonomicsData","arguments":[],"returnType":{"kind":"dict","key":"int","value":"TokenDistrubuteInfo","valueFormat":"ref"}},
    {"name":"getAllReferralDetails","arguments":[{"name":"referrerAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"RefferData","valueFormat":"ref"}},
    {"name":"getReferrer","arguments":[{"name":"userAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const SamplePresale_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"TokenNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TokenExcesses"}},
    {"receiver":"internal","message":{"kind":"typed","type":"PrivateSaleMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MarketingMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TeamMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"AdvisorMessage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TreasuryMessage"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimSingleToken"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimPrivateSaleTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimMarketingeTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTeamTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimAdvisorTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTreasuryTokens"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimReferralTokens"}},
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
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenNotification | TokenExcesses | PrivateSaleMessage | MarketingMessage | TeamMessage | AdvisorMessage | TreasuryMessage | 'withdraw safe' | ClaimTokens | ClaimSingleToken | ClaimPrivateSaleTokens | ClaimMarketingeTokens | ClaimTeamTokens | ClaimAdvisorTokens | ClaimTreasuryTokens | ClaimReferralTokens | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenNotification') {
            body = beginCell().store(storeTokenNotification(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenExcesses') {
            body = beginCell().store(storeTokenExcesses(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'PrivateSaleMessage') {
            body = beginCell().store(storePrivateSaleMessage(message)).endCell();
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
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimTokens') {
            body = beginCell().store(storeClaimTokens(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimSingleToken') {
            body = beginCell().store(storeClaimSingleToken(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimPrivateSaleTokens') {
            body = beginCell().store(storeClaimPrivateSaleTokens(message)).endCell();
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
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getGetAllSeedTokenData(provider: ContractProvider, addr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(addr);
        let source = (await provider.get('getAllSeedTokenData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserUserData(), source.readCellOpt());
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
    
    async getGetTokonomicsData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getTokonomicsData', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), dictValueParserTokenDistrubuteInfo(), source.readCellOpt());
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
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}