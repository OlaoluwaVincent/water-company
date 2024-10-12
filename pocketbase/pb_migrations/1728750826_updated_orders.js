/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  collection.listRule = "@request.auth.id !=\"\""
  collection.viewRule = "@request.auth.id = user.id || @request.auth.role != \"customer\""
  collection.createRule = "@request.auth.id = user.id && @request.auth.role =\"customer\""
  collection.updateRule = "@request.auth.role !=\"customer\""
  collection.deleteRule = "@request.auth.id = user.id && paymentStatus=true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63377na5xcfjweu")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
