import express from 'express'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import stripePackage from 'stripe'

dotenv.config() // Load environment variables

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY)
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const YOUR_DOMAIN = 'http://localhost:5173'

app.use(express.static(resolve(__dirname, 'public')))
app.use(express.json()) // To parse JSON bodies

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  })

  res.json({ id: session.id })
})

app.listen(4242, () => console.log('Running on port 4242'))
