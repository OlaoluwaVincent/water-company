
export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};

export function formatCurrency(val: number) {
    const value = String(val);
    const number = parseFloat(value.replace(/₦|,/g, '').trim());
    const formattedNumber = number.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });

    return formattedNumber;
}
