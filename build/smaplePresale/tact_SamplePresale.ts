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
    UserAddress: Address;
    TotalToken: bigint;
    RemainingToken: bigint;
    StartTime: bigint;
    VestingDuration: bigint;
    LastClaimTime: bigint;
    CliffTime: bigint;
    ReleaseInterval: bigint;
    PhaseName: string;
    Active: boolean;
    TonToken: bigint;
}

export function storeUserData(src: UserData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.UserAddress);
        b_0.storeCoins(src.TotalToken);
        b_0.storeCoins(src.RemainingToken);
        b_0.storeInt(src.StartTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.VestingDuration, 257);
        b_1.storeInt(src.LastClaimTime, 257);
        b_1.storeInt(src.CliffTime, 257);
        let b_2 = new Builder();
        b_2.storeInt(src.ReleaseInterval, 257);
        b_2.storeStringRefTail(src.PhaseName);
        b_2.storeBit(src.Active);
        b_2.storeCoins(src.TonToken);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadUserData(slice: Slice) {
    let sc_0 = slice;
    let _UserAddress = sc_0.loadAddress();
    let _TotalToken = sc_0.loadCoins();
    let _RemainingToken = sc_0.loadCoins();
    let _StartTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _VestingDuration = sc_1.loadIntBig(257);
    let _LastClaimTime = sc_1.loadIntBig(257);
    let _CliffTime = sc_1.loadIntBig(257);
    let sc_2 = sc_1.loadRef().beginParse();
    let _ReleaseInterval = sc_2.loadIntBig(257);
    let _PhaseName = sc_2.loadStringRefTail();
    let _Active = sc_2.loadBit();
    let _TonToken = sc_2.loadCoins();
    return { $$type: 'UserData' as const, UserAddress: _UserAddress, TotalToken: _TotalToken, RemainingToken: _RemainingToken, StartTime: _StartTime, VestingDuration: _VestingDuration, LastClaimTime: _LastClaimTime, CliffTime: _CliffTime, ReleaseInterval: _ReleaseInterval, PhaseName: _PhaseName, Active: _Active, TonToken: _TonToken };
}

function loadTupleUserData(source: TupleReader) {
    let _UserAddress = source.readAddress();
    let _TotalToken = source.readBigNumber();
    let _RemainingToken = source.readBigNumber();
    let _StartTime = source.readBigNumber();
    let _VestingDuration = source.readBigNumber();
    let _LastClaimTime = source.readBigNumber();
    let _CliffTime = source.readBigNumber();
    let _ReleaseInterval = source.readBigNumber();
    let _PhaseName = source.readString();
    let _Active = source.readBoolean();
    let _TonToken = source.readBigNumber();
    return { $$type: 'UserData' as const, UserAddress: _UserAddress, TotalToken: _TotalToken, RemainingToken: _RemainingToken, StartTime: _StartTime, VestingDuration: _VestingDuration, LastClaimTime: _LastClaimTime, CliffTime: _CliffTime, ReleaseInterval: _ReleaseInterval, PhaseName: _PhaseName, Active: _Active, TonToken: _TonToken };
}

function storeTupleUserData(source: UserData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.UserAddress);
    builder.writeNumber(source.TotalToken);
    builder.writeNumber(source.RemainingToken);
    builder.writeNumber(source.StartTime);
    builder.writeNumber(source.VestingDuration);
    builder.writeNumber(source.LastClaimTime);
    builder.writeNumber(source.CliffTime);
    builder.writeNumber(source.ReleaseInterval);
    builder.writeString(source.PhaseName);
    builder.writeBoolean(source.Active);
    builder.writeNumber(source.TonToken);
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
    TotalToken: bigint;
    remainingToken: bigint;
    startTime: bigint;
    vestingDuration: bigint;
    lastClaimTime: bigint;
    releaseInterval: bigint;
    initialCliff: bigint;
    phaseName: string;
}

export function storeTokenVestingInfo(src: TokenVestingInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.beneficiary);
        b_0.storeCoins(src.TotalToken);
        b_0.storeCoins(src.remainingToken);
        b_0.storeInt(src.startTime, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.vestingDuration, 257);
        b_1.storeInt(src.lastClaimTime, 257);
        b_1.storeInt(src.releaseInterval, 257);
        let b_2 = new Builder();
        b_2.storeInt(src.initialCliff, 257);
        b_2.storeStringRefTail(src.phaseName);
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadTokenVestingInfo(slice: Slice) {
    let sc_0 = slice;
    let _beneficiary = sc_0.loadAddress();
    let _TotalToken = sc_0.loadCoins();
    let _remainingToken = sc_0.loadCoins();
    let _startTime = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _vestingDuration = sc_1.loadIntBig(257);
    let _lastClaimTime = sc_1.loadIntBig(257);
    let _releaseInterval = sc_1.loadIntBig(257);
    let sc_2 = sc_1.loadRef().beginParse();
    let _initialCliff = sc_2.loadIntBig(257);
    let _phaseName = sc_2.loadStringRefTail();
    return { $$type: 'TokenVestingInfo' as const, beneficiary: _beneficiary, TotalToken: _TotalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, releaseInterval: _releaseInterval, initialCliff: _initialCliff, phaseName: _phaseName };
}

function loadTupleTokenVestingInfo(source: TupleReader) {
    let _beneficiary = source.readAddress();
    let _TotalToken = source.readBigNumber();
    let _remainingToken = source.readBigNumber();
    let _startTime = source.readBigNumber();
    let _vestingDuration = source.readBigNumber();
    let _lastClaimTime = source.readBigNumber();
    let _releaseInterval = source.readBigNumber();
    let _initialCliff = source.readBigNumber();
    let _phaseName = source.readString();
    return { $$type: 'TokenVestingInfo' as const, beneficiary: _beneficiary, TotalToken: _TotalToken, remainingToken: _remainingToken, startTime: _startTime, vestingDuration: _vestingDuration, lastClaimTime: _lastClaimTime, releaseInterval: _releaseInterval, initialCliff: _initialCliff, phaseName: _phaseName };
}

function storeTupleTokenVestingInfo(source: TokenVestingInfo) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.beneficiary);
    builder.writeNumber(source.TotalToken);
    builder.writeNumber(source.remainingToken);
    builder.writeNumber(source.startTime);
    builder.writeNumber(source.vestingDuration);
    builder.writeNumber(source.lastClaimTime);
    builder.writeNumber(source.releaseInterval);
    builder.writeNumber(source.initialCliff);
    builder.writeString(source.phaseName);
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

export type ClaimPrivateSaleTokens = {
    $$type: 'ClaimPrivateSaleTokens';
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimPrivateSaleTokens(src: ClaimPrivateSaleTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3764173316, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimPrivateSaleTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3764173316) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimPrivateSaleTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimPrivateSaleTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimPrivateSaleTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimPrivateSaleTokens(source: ClaimPrivateSaleTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
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
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimMarketingeTokens(src: ClaimMarketingeTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3765095611, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimMarketingeTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3765095611) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimMarketingeTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimMarketingeTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimMarketingeTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimMarketingeTokens(source: ClaimMarketingeTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
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
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimTeamTokens(src: ClaimTeamTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3370526905, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimTeamTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3370526905) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimTeamTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimTeamTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimTeamTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimTeamTokens(source: ClaimTeamTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
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
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimAdvisorTokens(src: ClaimAdvisorTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4235367713, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimAdvisorTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4235367713) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimAdvisorTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimAdvisorTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimAdvisorTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimAdvisorTokens(source: ClaimAdvisorTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
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
    amount: bigint;
    cenderadd: Address;
    senderadd: Address;
}

export function storeClaimTreasuryTokens(src: ClaimTreasuryTokens) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(527679380, 32);
        b_0.storeInt(src.amount, 257);
        b_0.storeAddress(src.cenderadd);
        b_0.storeAddress(src.senderadd);
    };
}

export function loadClaimTreasuryTokens(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 527679380) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    let _cenderadd = sc_0.loadAddress();
    let _senderadd = sc_0.loadAddress();
    return { $$type: 'ClaimTreasuryTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function loadTupleClaimTreasuryTokens(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _cenderadd = source.readAddress();
    let _senderadd = source.readAddress();
    return { $$type: 'ClaimTreasuryTokens' as const, amount: _amount, cenderadd: _cenderadd, senderadd: _senderadd };
}

function storeTupleClaimTreasuryTokens(source: ClaimTreasuryTokens) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
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
    35441: { message: `Seed Token Supply is completed` },
    43297: { message: `Index not found!` },
    44418: { message: `You have not sufficient Token` },
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
    {"name":"UserData","header":null,"fields":[{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"TotalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"RemainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"StartTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"VestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"LastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"CliffTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"ReleaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"PhaseName","type":{"kind":"simple","type":"string","optional":false}},{"name":"Active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"TonToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TokenVestingInfo","header":null,"fields":[{"name":"beneficiary","type":{"kind":"simple","type":"address","optional":false}},{"name":"TotalToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"remainingToken","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"vestingDuration","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"lastClaimTime","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"releaseInterval","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initialCliff","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"phaseName","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"UserArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"UserData","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"PrivateSaleArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"MarketingArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TeamArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"AdvisorArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"TreasuryArrayData","header":null,"fields":[{"name":"data","type":{"kind":"dict","key":"int","value":"TokenVestingInfo","valueFormat":"ref"}},{"name":"size","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"PrivateSaleMessage","header":2623920856,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"MarketingMessage","header":1587004579,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TeamMessage","header":3592779077,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AdvisorMessage","header":509683636,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TreasuryMessage","header":4204001517,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"UserAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTokens","header":86893668,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimPrivateSaleTokens","header":3764173316,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimMarketingeTokens","header":3765095611,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTeamTokens","header":3370526905,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimAdvisorTokens","header":4235367713,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimTreasuryTokens","header":527679380,"fields":[{"name":"amount","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ClaimSingleToken","header":2644494419,"fields":[{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"cenderadd","type":{"kind":"simple","type":"address","optional":false}},{"name":"senderadd","type":{"kind":"simple","type":"address","optional":false}}]},
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
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const SamplePresale_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"text","text":"Buy Tokens"}},
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
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: 'Buy Tokens' | PrivateSaleMessage | MarketingMessage | TeamMessage | AdvisorMessage | TreasuryMessage | 'withdraw safe' | ClaimTokens | ClaimSingleToken | ClaimPrivateSaleTokens | ClaimMarketingeTokens | ClaimTeamTokens | ClaimAdvisorTokens | ClaimTreasuryTokens | Deploy) {
        
        let body: Cell | null = null;
        if (message === 'Buy Tokens') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
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
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}