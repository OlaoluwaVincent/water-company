/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgjbqvaa",
    "name": "paymentType",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // remove
  collection.schema.removeField("zgjbqvaa")

  return dao.saveCollection(collection)
})
