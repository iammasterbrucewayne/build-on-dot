const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Missing environment variable: `MONGODB_URI`. Please define the `MONGODB_URI` environment variable inside `.env.local`"
  );
}

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let isConnected = false;

export default async function connectToDatabase() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }

  return client.db("build-on-dot");
}
