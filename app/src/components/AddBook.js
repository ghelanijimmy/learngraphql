import React, { useState } from "react";
import { graphql } from "react-apollo";
import {
  getAuthorQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";
import { compose } from "recompose";

const AuthorsList = props => {
  const [book, setBook] = useState({ name: "", genre: "", authorId: "" });

  const displayAuthors = () => {
    let data = props.getAuthorsQuery;

    if (data.loading) {
      return <option>Loading Authors</option>;
    } else {
      return data.authors.map((author, i) => {
        return (
          <option value={author.id} key={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = e => {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name: book.name,
        genre: book.genre,
        authorID: book.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className={"field"}>
        <label>Book name</label>
        <input
          type="text"
          onChange={e => {
            e.persist();
            setBook(old => Object.assign({}, old, { name: e.target.value }));
          }}
        />
      </div>
      <div className={"field"}>
        <label>Genre</label>
        <input
          type="text"
          onChange={e => {
            e.persist();
            setBook(old => Object.assign({}, old, { genre: e.target.value }));
          }}
        />
      </div>
      <div className={"field"}>
        <label>Author</label>
        <select
          name=""
          id=""
          onChange={e => {
            e.persist();
            setBook(old =>
              Object.assign({}, old, { authorId: e.target.value })
            );
          }}
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getAuthorQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AuthorsList);
