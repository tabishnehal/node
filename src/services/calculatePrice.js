// calculatePrice.js
const db = require('../db');

const calculatePrice = async (zone, organization_id, total_distance, item_type) => {
    try {
        // Fetch pricing details from the database based on input parameters
        const query = `
            SELECT base_distance_in_km, km_price, fix_price 
            FROM pricing 
            WHERE organization_id = $1 AND zone = $2 AND item_id IN (
                SELECT id FROM item WHERE type = $3
            )
        `;
        const { rows } = await db.query(query, [organization_id, zone, item_type]);

        if (rows.length === 0) {
            throw new Error('Pricing details not found for the given parameters');
        }

        const { base_distance_in_km, km_price, fix_price } = rows[0];

        // Calculate total price based on base distance, per km price, and item type
        let totalPrice = fix_price; // Initial price based on base distance
        if (total_distance > base_distance_in_km) {
            const extraDistance = total_distance - base_distance_in_km;
            totalPrice += extraDistance * km_price;
        }

        return totalPrice;
    } catch (error) {
        throw new Error(`Error calculating price: ${error.message}`);
    }
};

module.exports = calculatePrice;
