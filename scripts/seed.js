const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/solar_system?authSource=admin";

const planets = [
  { name: "Mercury", order: 1 },
  { name: "Venus", order: 2 },
  { name: "Earth", order: 3 },
  { name: "Mars", order: 4 },
  { name: "Jupiter", order: 5 },
  { name: "Saturn", order: 6 },
  { name: "Uranus", order: 7 },
  { name: "Neptune", order: 8 }
];

async function seed() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("solar_system");
    const collection = db.collection("planets");

    await collection.deleteMany({});
    await collection.insertMany(planets);

    console.log("✅ Database seeded with planets");
  } catch (err) {
    console.error("❌ Error seeding database", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();