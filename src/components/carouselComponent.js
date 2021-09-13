import React from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css';

class CarouselCompenent extends React.Component {
    render() { 
        return <div>
            <Carousel >
            { this.props.bestBooksArr.map((item,idx) => {
              console.log(item);
                return (
                  
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={item.imageUrl}
                        alt={`slide ${idx}`}
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        
                        <p>
                          {item.description}
                        </p>
                        <p>status: {item.status}</p>
                        <p>email: {item.email}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    
                  
                );
              })
          }
            </Carousel>
        </div>;
    }
}
 
export default CarouselCompenent;