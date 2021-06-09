import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientItem from "./clientItem"
import Client1 from "../../../assets/img/clients/client-1.png"
import Client2 from "../../../assets/img/clients/client-2.png"
import Client3 from "../../../assets/img/clients/client-3.png"
import Client4 from "../../../assets/img/clients/client-4.png"
import Client5 from "../../../assets/img/clients/client-5.png"
import Client6 from "../../../assets/img/clients/client-6.png"
import Client7 from "../../../assets/img/clients/client-7.png"
import Client8 from "../../../assets/img/clients/client-8.png"
const Clients = () => {
    const options = {
        infinite: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 614,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }

    return (
        <div>

            <Slider  {...options} className="swiper-wrapper align-items-center">
                {swiperImage && swiperImage.map((item, index) => (
                    <ClientItem key={index} item={item} />
                ))}
            </Slider>
        </div>
    );
};

const swiperImage = [
    { id: 1, image: Client1 },
    { id: 2, image: Client2 },
    { id: 3, image: Client3 },
    { id: 4, image: Client4 },
    { id: 5, image: Client5 },
    { id: 6, image: Client6 },
    { id: 7, image: Client7 },
    { id: 8, image: Client8 },
]

export default Clients;