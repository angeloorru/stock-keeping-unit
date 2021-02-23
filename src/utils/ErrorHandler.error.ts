export const throwError = (content: Buffer, sku: string, caller: string) => {
    if (!content.includes(sku)) {
        throw new Error(JSON.stringify(`Error: The entry in ${caller} does not exist`));
    }
}