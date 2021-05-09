
export const SAVE_ORDERS1 = "SAVE_ORDERS1"
export const SAVE_ORDERS2 = "SAVE_ORDERS2"
export const SAVE_ORDERS3 = "SAVE_ORDERS3"
export const TABLE1_TOTAL_PRICE = "TABLE1_TOTAL_PRICE"

export const saveOrders1 = (data) => ({
    type: SAVE_ORDERS1,
    data
});

export const saveOrders2 = (data) => ({
    type: SAVE_ORDERS2,
    data
});

export const saveOrders3 = (data) => ({
    type: SAVE_ORDERS3,
    data
});

export const table1TotalPrice = (data) => ({
    type: TABLE1_TOTAL_PRICE,
    data
});

// export const table1TotalPrice = (data) => ({
//     type: TABLE1_TOTAL_PRICE,
//     data
// });