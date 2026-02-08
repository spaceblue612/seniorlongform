/**
 * 빌드된 dist 폴더를 서비스합니다.
 * 모든 경로는 index.html로 연결되어 SPA가 동작합니다.
 */
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const root = __dirname
const port = process.env.PORT || 7798

const app = express()
app.use(express.static(dist))

// 접속 시 index.html로 바로 웹서비스 (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'))
})

app.listen(port, () => {
  console.log(`서버: http://localhost:${port}`)
  console.log('접속하면 index.html로 웹서비스가 제공됩니다.')
})
