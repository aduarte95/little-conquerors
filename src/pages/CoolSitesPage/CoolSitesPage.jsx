import React, { useState, useEffect } from 'react';
import Title from '../../components/shared/Title/Title';
import coolSitesData from '../../data/coolSites.json'
import './CoolSitesPage.scss';
import {Card, OverlayTrigger, Tooltip} from 'react-bootstrap'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CoolSitesPage() {
  const [coolSites, setCoolSites] = useState([]);

  useEffect(() => {
      setCoolSites(coolSitesData)
  }, []);

  return (
    <div className="cool-sites-container d-flex flex-column container">
        <Title>Here are some sites you will love! <i className="fas fa-heart"></i> </Title>
        <div className="cool-sites-container__carousel d-flex flex-grow-1 ">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots flex-grow-1 align-self-center"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                className="flex-grow-1 align-self-center"
                >
                    
                    {   coolSites &&
                    coolSites.map( (site, i) => {
                        return <Card className="cool-sites-container__card glowing-box" key={`carousel-item-${i}`} style={{ width: '18rem' }}>
                                    <Card.Img className="cool-sites-container__img" variant="top" src={site.imgUrl} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="capitalize font-contrast">{site.name}</Card.Title>
                                        <OverlayTrigger
                                            overlay={
                                                <Tooltip>
                                                    {site.description}
                                                </Tooltip>
                                            }
                                            >
                                            <Card.Text  className="cool-sites-container__text">{site.description}</Card.Text>
                                        </OverlayTrigger>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-start">
                                    <a className="btn primary-button"
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        href={site.url} 
                                        variant="primary">
                                            Go to page
                                            </a>
                                    </Card.Footer>
                                </Card>
                    })
                }
                </Carousel>
                </div>

    </div> 
  );
}

export default CoolSitesPage;