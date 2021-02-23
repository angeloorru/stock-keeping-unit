import {Transactions} from "../interfaces/SkuTransactions.interface";
import * as TransactionService from "../services/TransactionService.service";
import * as StockService from "../services/StockService.service";
import {CurrentStock} from "../interfaces/CurrentStock.interface";
import {Type} from "../enums/CurrentStockDataEnum";


function updateStock(transactions: Transactions[], updatedStockValue: number) {
    if (transactions) {
        transactions.map((value) => {
            if (value.type === Type.ORDER) updatedStockValue -= value.qty;
            if (value.type === Type.REFUND) updatedStockValue += value.qty;
        });
    }
    return updatedStockValue;
}

export const calculateLatestStock = async (sku) => {
    const transactions: Transactions[] = await TransactionService.findTransactionsById(sku);
    const {stock} = await StockService.findStockById(sku, false) || {stock: 0};

    let updatedStockObject: CurrentStock;
    let updatedStockValue: number = stock;

    updatedStockValue = updateStock(transactions, updatedStockValue);
    updatedStockObject = {sku: sku, qty: updatedStockValue};

    return updatedStockObject;
}