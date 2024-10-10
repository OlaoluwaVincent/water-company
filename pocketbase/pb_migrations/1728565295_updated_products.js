/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("et0e5wl3fvii7yw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "em61fxqn",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("et0e5wl3fvii7yw")

  // remove
  collection.schema.removeField("em61fxqn")

  return dao.saveCollection(collection)
})
