import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CarouselCompenent from "./components/carouselComponent";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBooksArr: [],
      booksFlag: false,
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`http://localhost:3001/books?email=${email}`)
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

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <CarouselCompenent bestBooksArr={this.state.bestBooksArr}/>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
