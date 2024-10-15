/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxxk3dbj",
    "name": "amountPaid",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // remove
  collection.schema.removeField("dxxk3dbj")

  return dao.saveCollection(collection)
})
