import * as fs from "fs";
import {Transactions} from "../interfaces/SkuTransactions.interface";
import {throwError} from "../utils/ErrorHandler.error";


const transactionFile = "src/resources/transactions.json";

export const fetchTransactions = async () => {
    const content: Buffer = fs.readFileSync(transactionFile);

    return JSON.parse(content.toString());
}

export const fetchTransactionsById = async (sku) => {
    const content: Buffer = fs.readFileSync(transactionFile);

    throwError(content, sku, "Transactions");

    const transactionData = JSON.parse(content.toString());
    let filteredTransactionsData: Transactions[] = [];

    transactionData.map((value) => {
        if (sku === value.sku) filteredTransactionsData.push(value);
    });
    return filteredTransactionsData;
};