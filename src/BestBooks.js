import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import BookFormModal from "./components/bookFormModal";
import CardComponent from "./components/cardComponent";
import UpdateFormModal from "./components/updateFormModal";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBooksArr: [],
      booksFlag: false,
      showFlag: false,
      showUpdate: false,
      bookToUpdate : {}
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`https://can-of-books2.herokuapp.com/books?email=${email}`)
      .then((result) => {
        this.setState({
          bestBooksArr: result.data,
        });
        if (this.state.bestBooksArr.length > 0) {
          this.setState({
            booksFlag: true,
          });
        }
      })
      .catch((err) => console.log("error"));
  };

  addBook = (event) => {
    event.preventDefault();
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      imageURL: event.target.imageURL.value,
      email: this.props.auth0.user.email,
    };
    axios
      .post(`https://can-of-books2.herokuapp.com/books`, obj)
      .then((result) =>
        this.setState({
          bestBooksArr: result.data,
        })
      )
      .catch((err) => console.log("error"));
  };

  deleteBook = (id) => {
    console.log(id);
    const email = this.props.auth0.user.email;
    axios
      .delete(`https://can-of-books2.herokuapp.com/books/${id}?email=${email}`)
      .then((result) =>
        this.setState({
          bestBooksArr: result.data,
        })
      )
      .catch((err) => console.log("error"));
  };

  updateBook = (event) =>{
    event.preventDefault();
    const obj ={
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      imageURL: event.target.imageURL.value,
      email: this.props.auth0.user.email,
      bookId: this.state.bookToUpdate._id
    };
    axios
    .put(`http://localhost:3001/books/${this.state.bookToUpdate._id}`,obj)
    .then(result => {
      console.log(result.data);
      this.setState({
        bestBooksArr:result.data
      })
    })
    .catch(err =>{
      console.log('error updating the book');
    })

  }
  show = () => {
    this.setState({
      showFlag: true,
    });
  };
  handleClose = () => {
    this.setState({
      showFlag: false,
    });
  };

  showUpdate = (item) => {
    this.setState({
      showUpdate: true,
      bookToUpdate: item
    });
    
  };
  handleCloseUpdate = () => {
    this.setState({
      showUpdate: false,
    });
  };

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <Button onClick={this.show}>Add Book</Button>
        <BookFormModal
          addBook={this.addBook}
          showFlag={this.state.showFlag}
          handleClose={this.handleClose}
        />
        <UpdateFormModal
          showUpdate={this.state.showUpdate}
          handleCloseUpdate={this.handleCloseUpdate}
          bookToUpdate = {this.state.bookToUpdate}
          updateBook = {this.updateBook}
        />
        <CardComponent
          bestBooksArr={this.state.bestBooksArr}
          deleteBook={this.deleteBook}
          showUpdate = {this.showUpdate}
        />
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
