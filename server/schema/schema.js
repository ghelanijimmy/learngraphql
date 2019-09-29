const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// DUMMY DATA
let books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1", authId: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2", authId: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3", authId: "3" }
];

let authors = [
  { name: "Patrick Rothfuss", age: 44, id: "1" },
  { name: "PBrandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" }
];

const AuthType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authId });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db/other source
        // return books.filter(book => book.id === args.id);
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
