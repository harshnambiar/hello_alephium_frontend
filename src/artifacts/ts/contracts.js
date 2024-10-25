"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractByCodeHash = getContractByCodeHash;
const _1 = require(".");
let contracts = undefined;
function getContractByCodeHash(codeHash) {
    if (contracts === undefined) {
        contracts = [_1.CounterRalph];
    }
    const c = contracts.find((c) => c.contract.hasCodeHash(codeHash));
    if (c === undefined) {
        throw new Error("Unknown code with code hash: " + codeHash);
    }
    return c.contract;
}
