import '@tensorflow/tfjs-node'
import '@tensorflow/tfjs-node-gpu'
// import '@tensorflow/tfjs-backend-webgl'
import cocoSsd from '@tensorflow-models/coco-ssd'
import { createCanvas, loadImage } from 'canvas'
import sizeOf from 'image-size'
import { writeFileSync } from 'fs'

const MINIMAL_SCORE = 0.85

export async function post({ request }) {
	try {
		const data = JSON.parse((await request.body.read()).toString())
		const image = data['image']
		const buffer = Buffer.from(image, 'base64')
		const dimensions = sizeOf(buffer)
		const { width, height } = dimensions
		const canvas = createCanvas(width, height)
		const ctx = canvas.getContext('2d')
		const drawable = await loadImage(`data:image/jpeg;base64,${image}`)
		ctx.drawImage(drawable, 0, 0, width, height)
		const model = await cocoSsd.load()
		const predictions = await model.detect(canvas)
		console.log(predictions)
		const cat = predictions.find((prediction) => prediction.class === 'cat')
		if (!cat) return { body: { canUpload: false } }
		const canUpload = cat.score > MINIMAL_SCORE
		if (canUpload) {
			writeFileSync('uploads/somecat.png', image, 'base64')
		}
		return { body: { canUpload } }
	} catch (err) {
		return { status: 400, body: { err } }
	}
}
