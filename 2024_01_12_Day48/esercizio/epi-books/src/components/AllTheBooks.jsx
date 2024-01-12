import React, { Component } from "react";
import SingleBook from "./SingleBook";
import "../styles/AllTheBooks.css";
import SearchForm from "./SearchForm";

export default class AllTheBooks extends Component {
  componentDidMount() {
    fetch("./books/horror.json")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch");
        }
        return resp.json();
      })
      .then((res) => {
        this.props.setBooks(res);
        console.log(this.props.books);
      })
      .catch((err) => {
        console.log("errore! ", err);
      });
  }

  handleOnChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    this.props.setSearchTerm(newSearchTerm);
  };

  render() {
    const { books, searchTerm } = this.props;

    const bookList = Array.isArray(books) ? books : [];

    const filteredBooks = searchTerm
      ? bookList.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : bookList;

    return (
      this.props.books && (
        <div className="all-the-books">
          <SearchForm
            books={this.props.books}
            handleOnChange={this.handleOnChange}
          />
          <div className="books-container">
            {filteredBooks.map((book) => (
              <SingleBook
                selectedBook={this.props.selectedBook}
                setSelectedBook={this.props.setSelectedBook}
                key={book.asin}
                book={book}
                comments={this.props.comments}
                getData={this.props.getData}
                titleSelected={this.props.titleSelected}
                setTitleSelected={this.props.setTitleSelected}
              />
            ))}
          </div>
        </div>
      )
    );
  }
}
