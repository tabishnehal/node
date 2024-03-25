// pricingController.js

/**
 * @swagger
 * /calculate-price:
 *   post:
 *     summary: Calculate price for food delivery.
 *     description: Calculates the total price for delivering food items based on various factors.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *               organization_id:
 *                 type: string
 *               total_distance:
 *                 type: number
 *               item_type:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful operation. Returns the total price.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *       '400':
 *         description: Invalid request payload.
 *       '500':
 *         description: Internal server error.
 */

const calculatePrice = require('../services/calculatePrice');

exports.calculatePrice = async (req, res) => {
    const { zone, organization_id, total_distance, item_type } = req.body;

    // Validate request payload
    if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Invalid request payload' });
    }

    try {
        // Call the service object to calculate the price
        const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
        res.json({ total_price: totalPrice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
