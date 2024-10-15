/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nus1aqeq",
    "name": "deliveryStatus",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // remove
  collection.schema.removeField("nus1aqeq")

  return dao.saveCollection(collection)
})
