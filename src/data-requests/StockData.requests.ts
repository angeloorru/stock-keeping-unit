import * as fs from "fs";
import {Stock} from "../interfaces/Stock.interface";
import {throwError} from "../utils/ErrorHandler.error";


const stockFile = "src/resources/stock.json";

export const fetchStock = async () => {
    const content: Buffer = fs.readFileSync(stockFile);

    return JSON.parse(content.toString());
}

export const fetchStockById = async (sku, error) => {
    const content: Buffer = fs.readFileSync(stockFile);

    if (error) throwError(content, sku, "Stock");

    const stockData = JSON.parse(content.toString());
    let filteredStock: Stock = null;

    stockData.map((value) => {
        if (sku === value.sku) {
            filteredStock = value;
        }
    });
    return filteredStock;
};