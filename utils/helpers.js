module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        returnparseInt(amount).toLocaleDateString();
    }
};