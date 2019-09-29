const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

const DB_URL = `mongodb://mongodb:${process.env.MONGO_URL}/learngraphql`;

const app = express();

//CONNECT TO MONGODB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(cors());
app.use(express.json());

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 5005;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(SERVER_PORT, () =>
  console.log(`Express is running on PORT: ${SERVER_PORT}`)
);
