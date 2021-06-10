const moment = require('moment')

const { formatCurrency } = require("utils/Calculator")
export const StockExcelColumn = ["#", "Category", "Product", "Unit", "Quantity", "Reorder Level"]

export const PrepareStockExportExcel = async (datasource) => {
    const results = await datasource && datasource.map((item, index) => {
        return {
            //   ...item,
            rowNumber: index + 1,
            category: item.product_m.category_m.product_category,
            product: item.product_m.product_description,
            unit: item.unit_m.name,
            quantity: item.quantity,
            reorder_level: item.product_m.low_stock_level,
        }
    })
    return results
}

export const PrepareStockExportPdf = (datasource) => {
    const results = datasource && datasource.map((item, index) => {
        return {
            // ...item,
            rowNumber: index + 1,
            category: item.product_m.category_m.product_category,
            product: item.product_m.product_description,
            unit: item.unit_m.name,
            quantity: item.quantity,
            reorder_level: item.product_m.low_stock_level,
        }
    })
    return results
}

export const StockDetailsExcelColumn = ["#", "Stock Date", "Stock Code", "Total Cost", "Supplier", "Details"]
export const PrepareStockDetailsExportExcel = async (datasource) => {
    const results = await datasource && datasource.map((item, index) => {
        let msg = " ";

        item.stock_details_ms && item.stock_details_ms.map(({ product_m, unit_m, quantity, cost_price }) => {
            msg += product_m.product_description + " - " + unit_m.name + " :- " + quantity +
                " (" + formatCurrency(cost_price)
                +
                ")= " + formatCurrency(cost_price * quantity)

                + ", ";
            return { product_m, quantity }
        })
        return {
            //   ...item,
            rowNumber: index + 1,
            stock_date: moment(item.stock_date).format("LL"),
            stock_code: item.stock_code,
            stock_total_cost: formatCurrency(item.stock_total_cost),
            supplier: `${item.supplier_m.supplier} (${item.supplier_m.contact_person})`,
            detail: msg
        }
    })
    return results
}
export const PrepareStockDetailsExportPdf = (datasource) => {
    const results = datasource && datasource.map((item, index) => {
        let msg = " ";

        item.stock_details_ms && item.stock_details_ms.map(({ product_m, unit_m, quantity, cost_price }) => {
            msg += product_m.product_description + " - " + unit_m.name + " :- " + quantity +
                " (" + formatCurrency(cost_price)
                +
                ")= " + formatCurrency(cost_price * quantity)

                + ", ";
            return { product_m, quantity }
        })
        return {
            //   ...item,
            rowNumber: index + 1,
            stock_date: moment(item.stock_date).format("LL"),
            stock_code: item.stock_code,
            stock_total_cost: formatCurrency(item.stock_total_cost),
            supplier: `${item.supplier_m.supplier} (${item.supplier_m.contact_person})`,
            detail: msg
        }
    })
    return results
}

export const ProfomaDetailsExcelColumn = ["#", "Profoma Date", "Profoma Code", "Total Amount", "Customer", "Details"]
export const PrepareProfomaDetailsExportExcel = async (datasource) => {
    const results = await datasource && datasource.map((item, index) => {
        let msg = " ";

        item.order_details_ms && item.order_details_ms.map(({ product_m, unit_m, quantity, selling_price }) => {
            msg += product_m.product_description + " - " + unit_m.name + " :- " + quantity +
                " (" + formatCurrency(selling_price)
                +
                ")= " + formatCurrency(selling_price * quantity)

                + ", ";
            return { product_m, quantity }
        })
        return {
            //   ...item,
            rowNumber: index + 1,
            order_date: moment(item.order_date).format("D, MMM YYYY"),
            order_code: item.order_code,
            total_amount: formatCurrency(item.total_amount),
            customer: `${item.customer_m.customer}`,
            detail: msg
        }
    })
    return results
}
export const PrepareProfomaDetailsExportPdf = (datasource) => {
    const results = datasource && datasource.map((item, index) => {
        let msg = " ";

        item.order_details_ms && item.order_details_ms.map(({ product_m, unit_m, quantity, selling_price }) => {
            msg += product_m.product_description + " - " + unit_m.name + " :- " + quantity +
                " (" + formatCurrency(selling_price)
                +
                ")= " + formatCurrency(selling_price * quantity)

                + ", ";
            return { product_m, quantity }
        })
        return {
            //   ...item,
            rowNumber: index + 1,
            order_date: moment(item.order_date).format("LL"),
            order_code: item.order_code,
            total_amount: formatCurrency(item.total_amount),
            customer: `${item.customer_m.customer}`,
            detail: msg
        }
    })
    return results
}
