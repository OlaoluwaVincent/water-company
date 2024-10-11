/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("437hpwal2kqy585")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyohiy44",
    "name": "brand",
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
  const collection = dao.findCollectionByNameOrId("437hpwal2kqy585")

  // remove
  collection.schema.removeField("pyohiy44")

  return dao.saveCollection(collection)
})
