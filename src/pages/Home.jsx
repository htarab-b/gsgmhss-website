import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'

import Sample_Image from '../assets/Sample_Image.jpg';

import NewsCard from '../components/NewsCard';

function Home() {
  return (
    <div className="w-screen px-4 lg:px-10">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-full h-[75vh] object-cover object-center"
              src={Sample_Image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-[75vh] object-cover object-center"
              src={Sample_Image}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-[75vh] object-cover object-center"
              src={Sample_Image}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-[75vh] object-cover object-center"
              src={Sample_Image}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full h-[75vh] object-cover object-center"
              src={Sample_Image}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="w-full mt-10 mb-20 flex items-center justify-center">
            <div className="w-1/2 hidden lg:flex">
                <img src={Sample_Image} className="w-full h-96 object-cover object-center" />
            </div>
            <div className="w-full lg:w-1/2 pl-2 lg:pl-5">
                <h1 className="text-center text-2xl lg:text-4xl pb-2 bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:100%_3px] bg-no-repeat bg-bottom">About Good Shepherd Global</h1>
                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae explicabo amet rem at voluptates ullam veritatis. Nostrum, consequatur. Cum, voluptate ea dignissimos assumenda consequatur repellendus id itaque, blanditiis eaque molestiae porro accusantium numquam facilis iste quod fuga! Perspiciatis maxime similique molestias, provident ullam, delectus, esse necessitatibus tempore consequatur molestiae deleniti quis? Commodi omnis quam amet laboriosam illo repudiandae distinctio similique, hic sed reiciendis aliquam esse earum corrupti deleniti laborum vitae. Ipsum fuga ducimus maxime quos alias totam aut explicabo eos beatae iste eaque magni id aliquam quibusdam provident quae adipisci, rem inventore, suscipit deserunt magnam in consectetur dolor sunt. Iure libero esse at non eos dolorem commodi, unde ratione inventore expedita, beatae dolores sequi nisi aut quis vitae quod obcaecati magnam possimus sit ea impedit veniam dolore. Inventore consequatur</p>
                <Link to={'/About'} className="bg-blue-600 text-white hover:bg-blue-800 rounded-sm no-underline w-40 mx-auto transition-all duration-200 py-2 flex items-center justify-center">Read More</Link>
            </div>
        </div>

        <div className="w-full my-20">
          <h1 className="text-center mb-3">Latest Updates</h1>
          <NewsCard date="01-01-2025" title="Sample Title 1" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nihil officia rerum fugit possimus laboriosam." />
          <NewsCard date="01-01-2025" title="Sample Title 2" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nihil officia rerum fugit possimus laboriosam." />
          <NewsCard date="01-01-2025" title="Sample Title 3" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nihil officia rerum fugit possimus laboriosam." />
          <Link to={'/About'} className="bg-blue-600 text-white hover:bg-blue-800 rounded-sm no-underline w-40 mx-auto transition-all duration-200 py-2 flex items-center justify-center">Read All Updates</Link>
        </div>

        <div className="w-full mt-12 flex items-center justify-center">
            <div className="w-full lg:w-1/2 pr-2 lg:pr-5">
                <h1 className="text-center text-2xl lg:text-4xl pb-2 bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:100%_3px] bg-no-repeat bg-bottom">Facilities</h1>
                <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae explicabo amet rem at voluptates ullam veritatis. Nostrum, consequatur. Cum, voluptate ea dignissimos assumenda consequatur repellendus id itaque, blanditiis eaque molestiae porro accusantium numquam facilis iste quod fuga! Perspiciatis maxime similique molestias, provident ullam, delectus, esse necessitatibus tempore consequatur molestiae deleniti quis? Commodi omnis quam amet laboriosam illo repudiandae distinctio similique, hic sed reiciendis aliquam esse earum corrupti deleniti laborum vitae. Ipsum fuga ducimus maxime quos alias totam aut explicabo eos beatae iste eaque magni id aliquam quibusdam provident quae adipisci, rem inventore, suscipit deserunt magnam in consectetur dolor sunt. Iure libero esse at non eos dolorem commodi, unde ratione inventore expedita, beatae dolores sequi nisi aut quis vitae quod obcaecati magnam possimus sit ea impedit veniam dolore. Inventore consequatur</p>
                <Link to={'/Facilities'} className="bg-blue-600 text-white hover:bg-blue-800 rounded-sm no-underline w-40 mx-auto transition-all duration-200 py-2 flex items-center justify-center">Know More</Link>
            </div>
            <div className="w-1/2 hidden lg:flex">
                <img src={Sample_Image} className="w-full h-96 object-cover object-center" />
            </div>
        </div>
    </div>
  );
}

export default Home;