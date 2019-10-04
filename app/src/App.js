import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//import components
import BookList from "./components/BookList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5001/graphql"
});

const App = props => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List!</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
