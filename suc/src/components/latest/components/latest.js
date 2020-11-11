import React,{Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../css/latest.css';
import listData from '../data/latestData';
class Latest extends Component {

    constructor(props) {
        super(props);
        this.state = {listData: []};
        // fetch();
      }

    // componentDidMount(){
    //     this.fetch();
    //     console.log(listData);
    // }

    render(){

        let listData=[
            {
                title:'First',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                title:'Second',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                title:'Third',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                title:'Four',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                title:'Five',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
        ];

    const requestBody = {
        query: `
        query{
            latest{
              _id
              title
              description
            }
          }
        `
    };

    fetch('http://localhost:4000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status!== 200 && res.status!== 201){
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log({...resData.data.latest});
            // list=resData.data.latest;
            this.setState({listData: resData.data.latest});
        })
        .catch(err => {
            console.log(err);
        });

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1000, min: 678 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 678, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .15"
            transitionDuration={500}
            partialVisible={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="latestCarousel"
            >
                {
                    listData.map(item =>(
                        <div className="cardDivision">
                        <Card className="mainCard">
                            <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.description}
                                </Card.Text>
                                <Button variant="outline-secondary">View More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    ))
                }
        </Carousel>
    );
            }
}

export default Latest;
