import * as express from "express";
import {Request, Response} from "express";
import {Transactions} from "../interfaces/SkuTransactions.interface";
import * as TransactionService from "../services/TransactionService.service";
import * as StockService from "../services/StockService.service";
import * as CurrentStockService from "../services/CurrentStockService.service";
import {Stock} from "../interfaces/Stock.interface";
import {CurrentStock} from "../interfaces/CurrentStock.interface";
import {Status} from "../enums/RoutesEnum";

export const router = express.Router();

router.get("/fetch-transactions", async (req: Request, res: Response) => {
    try {
        const transactions: Transactions = await TransactionService.findAllTransactions();

        res.status(Status.OK).send(transactions);
    } catch (e) {
        res.status(Status.NOT_FOUND).send(e.message);
    }
});

router.get("/fetch-transactions/:valOne/:valTwo/:valThree", async (req: Request, res: Response) => {
    const {valOne, valTwo, valThree} = req.params;
    const sku: string = `${valOne}/${valTwo}/${valThree}`;

    try {
        const transactions: Transactions[] = await TransactionService.findTransactionsById(sku);
        res.status(Status.OK).send(transactions);
    } catch (e) {
        res.status(Status.NOT_FOUND).send(e.message);
    }
});

router.get("/fetch-stock", async (req: Request, res: Response) => {
    try {
        const stock: Stock = await StockService.findAllStock();

        res.status(Status.OK).send(stock);
    } catch (e) {
        res.status(Status.NOT_FOUND).send(e.message);
    }
});

router.get("/fetch-stock/:valOne/:valTwo/:valThree", async (req: Request, res: Response) => {
    const {valOne, valTwo, valThree} = req.params;
    const sku: string = `${valOne}/${valTwo}/${valThree}`;

    try {
        const stock: Stock = await StockService.findStockById(sku, true);

        res.status(Status.OK).send(stock);
    } catch (e) {
        res.status(Status.NOT_FOUND).send(e.message);
    }
});

router.get("/fetch-current-stock/:valOne/:valTwo/:valThree", async (req: Request, res: Response) => {
    const {valOne, valTwo, valThree} = req.params;
    const sku: string = `${valOne}/${valTwo}/${valThree}`;

    try {
        const updatedStock: CurrentStock = await CurrentStockService.getUpdatedStockCount(sku);

        res.status(Status.OK).send(updatedStock);
    } catch (e) {
        res.status(Status.NOT_FOUND).send(e.message);
    }
});