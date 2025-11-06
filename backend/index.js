const http = require('http')
const admin = require('firebase-admin')
const { nanoid } = require('nanoid')
require('dotenv').config()

const serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()
const urlsCollection = db.collection('urls')

const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const FRONTEND_URL = process.env.FRONTEND_URL

function sendJson(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL)
  res.writeHead(statusCode)
  res.end(JSON.stringify(data))
}
function sendRedirect(res, longUrl) {
  res.setHeader('Location', longUrl)
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL)
  res.writeHead(301)
  res.end()
}
function sendError(res, statusCode, message) {
  sendJson(res, statusCode, { error: message })
}