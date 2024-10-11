/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("et0e5wl3fvii7yw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmceyzw9",
    "name": "pricePerPack",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("et0e5wl3fvii7yw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmceyzw9",
    "name": "pricePerPack",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
