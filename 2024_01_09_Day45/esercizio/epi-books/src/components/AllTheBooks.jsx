import React, { Component } from "react";
import SingleBook from "./SingleBook";
import "../styles/AllTheBooks.css";
import SearchForm from "./SearchForm";

export default class AllTheBooks extends Component {
  state = {
    books: null,
    searchTerm: "",
  };

  componentDidMount() {
    fetch("./books/history.json")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch");
        }
        return resp.json();
      })
      .then((res) => {
        this.setState({ books: res });
        console.log(this.state.books);
      })
      .catch((err) => {
        console.log("errore! ", err);
      });
  }

  handleOnChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    this.setState({ searchTerm: newSearchTerm });
  };

  render() {
    const { books, searchTerm } = this.state;

    const filteredBooks = searchTerm
      ? books.filter((book) => book.title.toLowerCase().includes(searchTerm))
      : books;

    return (
      this.state.books && (
        <>
          <SearchForm
            books={this.state.books}
            handleOnChange={this.handleOnChange}
          />
          <div className="books-container">
            {filteredBooks.map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
          </div>
        </>
      )
    );
  }
}
