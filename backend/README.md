# Expense Tracker Backend

This is the backend for the Expense Tracker app, built with Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Make sure MongoDB is running locally at `mongodb://localhost:27017`.
3. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` by default.

## API Endpoints

- `GET /api/transactions` — List all transactions
- `POST /api/transactions` — Add a new transaction
  - Body: `{ "text": "string", "amount": number }`
- `DELETE /api/transactions/:id` — Delete a transaction by ID

## Notes
- The database used is `expense-tracker` (created automatically on first run).
- CORS is enabled for development. 