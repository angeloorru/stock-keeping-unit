import {fetchTransactions, fetchTransactionsById} from "../data-requests/TransactionData.requests";


/**
 * Service Methods GET Operations
 */
export const findAllTransactions = async () => {
    return await fetchTransactions();
};

export const findTransactionsById = async (sku: string) => {
    return await fetchTransactionsById(sku);
};