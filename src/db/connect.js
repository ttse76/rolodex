import { connect } from "mongoose";

const MongoUri = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: 'rolodex',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = connect(MongoUri, opts).then(mongoose => {
      return mongoose
    });
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect;