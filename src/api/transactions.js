import request from "./request";

export const getAllTransactions = () => request("/api/transactions");
export const createTransaction = transactionInfo =>
    request("/api/transaction/create", { body: transactionInfo, method: "POST" });

export const createTransaction = transactionInfo =>
    request("/api/transaction/update", { body: transactionInfo, method: "PUT" });

export const getAllTransactionsWithFilter = transactionInfo =>
    request("/api/transaction/filter", { body: transactionInfo, method: "POST" });