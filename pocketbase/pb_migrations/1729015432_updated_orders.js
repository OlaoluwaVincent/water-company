/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uojv4agr",
    "name": "instant",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  // remove
  collection.schema.removeField("uojv4agr")

  return dao.saveCollection(collection)
})
