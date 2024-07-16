// Server.js
import express from 'express';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import stripePackage from 'stripe';

dotenv.config(); // Load environment variables

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const YOUR_DOMAIN = 'http://localhost:5173';

app.use(express.static(resolve(__dirname, 'public')));
app.use(express.json()); // To parse JSON bodies

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4242, () => console.log('Running on port 4242'));
