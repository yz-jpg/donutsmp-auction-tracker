import { raw } from "express"

const parseItem = (rawItem) => {
    const id = rawItem.item.id;
    const count = Number(rawItem.item.count);
    const totalPrice = Number(rawItem.price);
    const timestamp = rawItem.unixMillisDateSold;

    const priceEach = count > 0 ? totalPrice / count : 0;

    return {
        item_id: id.includes(':') ? id.split(':')[1] : id,
        item_count: count,
        price_total: totalPrice,
        price_each: priceEach,
        sold_timestamp: timestamp,
        sold_at: new Date(timestamp)
    };
};

module.exports = { parseItem };