export const CalculateTotalAmount = (cartList) => cartList.reduce((a, c) => (a + (parseFloat(c.total_amount))), 0)
export const CalculateTotalQty = (cartList) => cartList.reduce((a, c) => (a + (parseFloat(c.quantity))), 0)
export const CalculateCustomerTotalAmount = (cartList) => cartList.reduce((a, c) => (a + (parseFloat(c.customer_amount))), 0)
export const CalculateDiscountAmount = (value, total) => total === 0 ? 0 : (value / total) * 100
export const CalculateDiscountPercentage = (value, total) => total === 0 ? 0 : (value / 100) * total
export const CalculateGrandTotal = (total_amount, discount_amount) => total_amount - discount_amount
export const CalculateChangeTotal = (grand_total, total_paid) => grand_total - total_paid
export const CheckKeyExist = price => price ? price : 0
export const formatCurrency = (amount) => `₵ ${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')