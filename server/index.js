const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

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
