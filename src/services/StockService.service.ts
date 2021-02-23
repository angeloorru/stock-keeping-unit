import {fetchStock, fetchStockById} from "../data-requests/StockData.requests";


/**
 * Service Methods GET Operations
 */
export const findAllStock = async () => {
    return await fetchStock();
};

export const findStockById = async (sku: string, error: boolean) => {
    return await fetchStockById(sku, error);
};