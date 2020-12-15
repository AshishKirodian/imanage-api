"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchemaUtils {
    static majorCategorySchema(category) {
        console.log(category, 'category');
        let options = {
            "Lentils": ['Masoor Dal', 'Toor/Arhar Dal', 'Lobia', 'Chickpea'],
            "Rice": ['Basmati Rice', 'Brown Rice', 'Jasmine Rice'],
            "Milk": ['Silm Milk', 'Cow Milk'],
            "Vegetables": ['Tomato', 'Potato', 'Peas']
        };
        const schema = {
            "title": "I manage form",
            "description": "",
            "type": "object",
            "properties": {
                "category": {
                    "type": "string",
                    "title": "category",
                    "enum": [{ label: "Food", value: ["Lentils", "Rice", "Milk", "Vegetables"] },
                        { label: "Utencils", value: ["Tea Sets", "Spoons", "Plates"] },
                        { label: "Toys", value: ["Electric toys", "Board games", "Card games"] }]
                }
            }
        };
        if (category === 'Lentils' || category === 'Rice' || category === 'Milk' || category === 'Vegetables') {
            schema.properties['food'] = {
                "type": "string",
                "title": "Selected Food",
                "enum": options[category]
            };
        }
        if (category !== '') {
            schema.properties['quantity'] = {
                "type": "number",
                "title": "quantity(kg / pc)"
            };
        }
        return schema;
    }
}
exports.default = SchemaUtils;
//# sourceMappingURL=schema.js.map