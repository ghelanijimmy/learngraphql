import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { getAuthorQuery } from "../queries/queries";

const AuthorsList = props => {
  const [book, setBook] = useState({ name: "", genre: "", authorId: "" });

  // useEffect(() => {
  //   console.log(book);
  // }, [book]);

  const displayAuthors = () => {
    let data = props.data;

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
    console.log(book);
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

export default graphql(getAuthorQuery)(AuthorsList);
