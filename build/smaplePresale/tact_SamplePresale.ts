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
    tonAmount: bigint;
    usdtAmount: bigint;
}

export function storeBuyTokens(src: BuyTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2595658360, 32);
        b_0.storeAddress(src.referrer);
        b_0.storeCoins(src.tonAmount);
        b_0.storeCoins(src.usdtAmount);
    };
}

export function loadBuyTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2595658360) { throw Error('Invalid prefix'); }
    let _referrer = sc_0.loadAddress();
    let _tonAmount = sc_0.loadCoins();
    let _usdtAmount = sc_0.loadCoins();
    return { $$type: 'BuyTokens' as const, referrer: _referrer, tonAmount: _tonAmount, usdtAmount: _usdtAmount };
}

function loadTupleBuyTokens(source: TupleReader) {
    let _referrer = source.readAddress();
    let _tonAmount = source.readBigNumber();
    let _usdtAmount = source.readBigNumber();
    return { $$type: 'BuyTokens' as const, referrer: _referrer, tonAmount: _tonAmount, usdtAmount: _usdtAmount };
}

function storeTupleBuyTokens(source: BuyTokens) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.referrer);
    builder.writeNumber(source.tonAmount);
    builder.writeNumber(source.usdtAmount);
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
    15509: { message: `Only deployer is allowed to withdraw` },
    30183: { message: `NO_REFERRAL_TOKENS_AVAILABLE` },
    32633: { message: `Presale is over` },
    35441: { message: `Seed Token Supply is completed` },
    38387: { message: `Contract does not have usdt` },
    43297: { message: `Index not found!` },
    44418: { message: `You have not sufficient Token` },
    46387: { message: `not have any refferals` },
    54634: { message: `You are not owner` },
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
    {"name":"BuyTokens","header":2595658360,"fields":[{"name":"referrer","type":{"kind":"simple","type":"address","optional":false}},{"name":"tonAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"usdtAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
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
    {"name":"WithdrawUsdt","header":3600769028,"fields":[{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}}]},
]

const SamplePresale_getters: ABIGetter[] = [
    {"name":"UsdtAmount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"num","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"UserData","optional":true}},
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"getAllSeedTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},
    {"name":"getAllPrivateTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllMarketingTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTeamTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllAdvisorTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getAllTreasuryTokenData","arguments":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},
    {"name":"getTokonomicsData","arguments":[],"returnType":{"kind":"dict","key":"int","value":"TokenDistrubuteInfo","valueFormat":"ref"}},
    {"name":"getSeedRoundTime","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getAllReferralDetails","arguments":[{"name":"referrerAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"dict","key":"int","value":"RefferData","valueFormat":"ref"}},
    {"name":"getReferrer","arguments":[{"name":"userAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"getPresaleStatus","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
    {"name":"getPresaleTime","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const SamplePresale_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"start Presale"}},
    {"receiver":"internal","message":{"kind":"typed","type":"TokenNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"BuyTokens"}},
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
    {"receiver":"internal","message":{"kind":"typed","type":"WithdrawUsdt"}},
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
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: 'start Presale' | TokenNotification | BuyTokens | TokenExcesses | PrivateSaleMessage | MarketingMessage | TeamMessage | AdvisorMessage | TreasuryMessage | 'withdraw safe' | ClaimTokens | ClaimSingleToken | ClaimPrivateSaleTokens | ClaimMarketingeTokens | ClaimTeamTokens | ClaimAdvisorTokens | ClaimTreasuryTokens | ClaimReferralTokens | WithdrawUsdt | Deploy) {
        
        let body: Cell | null = null;
        if (message === 'start Presale') {
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
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'WithdrawUsdt') {
            body = beginCell().store(storeWithdrawUsdt(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getUsdtAmount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('UsdtAmount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
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
    
    async getGetSeedRoundTime(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getSeedRoundTime', builder.build())).stack;
        let result = source.readBigNumber();
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
    
    async getGetPresaleStatus(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getPresaleStatus', builder.build())).stack;
        let result = source.readBoolean();
        return result;
    }
    
    async getGetPresaleTime(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getPresaleTime', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}