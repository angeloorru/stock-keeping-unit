import {calculateLatestStock} from "../data-requests/CurrentStockData.requests";


/**
 * Service Methods GET Operations
 */
export const getUpdatedStockCount = async (sku: string) => {
    return await calculateLatestStock(sku);
}