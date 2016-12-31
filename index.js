/*
    Created by Uncle Charlie, 2016/12/31

    @flow
 */
const mongodb = require('mongodb')

const url = 'mongodb://127.0.0.1:27017/local'


const MongoClient = mongodb.MongoClient

MongoClient.connect(url, (err, db) => {
  if(err) {
    console.log(`error when connect mongodb`, err)
    return 
  } 

  db.collections((err, collections) => {
    collections.forEach((c) => console.log(`collection ${c.collectionName}`))
    db.close()
  })
})