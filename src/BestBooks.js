import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron,  Button } from "react-bootstrap";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import BookFormModal from './components/bookFormModal';
import CarouselCompenent from "./components/carouselComponent";
import CardComponent from "./components/cardComponent";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBooksArr: [],
      booksFlag: false,
      showFlag:false

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

  addBook = (event) =>{
    event.preventDefault();
    const obj = {
      title : event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      imageURL: event.target.imageURL.value,
      email : this.props.auth0.user.email,
    }
    axios
    .post(`https://can-of-books2.herokuapp.com/books`,obj)
    .then(result => this.setState({
      bestBooksArr:result.data
    })
    )
    .catch((err) => console.log("error"));
  }

  deleteBook =(id) =>{
    console.log(id);
    const email = this.props.auth0.user.email;
    axios
    .delete(`https://can-of-books2.herokuapp.com/books/${id}?email=${email}`)
    .then(result => this.setState({
      bestBooksArr : result.data
    })
    )
    .catch((err) => console.log("error"))

  }
  show=()=> {
    this.setState({
      showFlag: true,
    });
  }
  handleClose=()=> {
    this.setState({
      showFlag: false,
    });
  }

  render() {
    return (
      <Jumbotron>
        
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <Button onClick={ this.show}>Add Book</Button>
        <BookFormModal addBook={this.addBook}
        showFlag = {this.state.showFlag}
        handleClose = {this.handleClose}
        />
        <CardComponent 
        bestBooksArr={this.state.bestBooksArr} 
        deleteBook = {this.deleteBook}
        />
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
