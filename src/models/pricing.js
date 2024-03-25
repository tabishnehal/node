// pricing.js
class Pricing {
    constructor(organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) {
        this.organization_id = organization_id;
        this.item_id = item_id;
        this.zone = zone;
        this.base_distance_in_km = base_distance_in_km;
        this.km_price = km_price;
        this.fix_price = fix_price;
    }
}

module.exports = Pricing;
