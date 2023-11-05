import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style/Service.scss"

const Service = () => {
  return (
    <>
    <Carousel className="center" autoPlay infiniteLoop width="70%" swipeScrollTolerance >
      <div>
        <img src="https://img.freepik.com/premium-photo/business-meeting-against-bleached-wooden-planks-background_1134-69101.jpg?w=1060" width={"100%"}/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/woman-writing-think-big-paper_53876-77888.jpg?w=1060" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/concept-business-strategy_185193-22187.jpg?w=1060" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/close-up-business-people-working-with-business-document-during-discussion-meeting_1150-3599.jpg?size=626&ext=jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/circular-influencer-marketing-vector_23-2147698406.jpg?w=740&t=st=1699173625~exp=1699174225~hmac=ce9952c645c9594d9b2dfdd389c14b582d918ca0c21a45d0df0fc7470efa5bd5" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/composite-image-business-meeting_1134-4623.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/planning-strategy-together-top-view-paper-with-colorful-sketches-laying-wooden-table-people-sitting-around-it_425904-15874.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://img.freepik.com/premium-photo/planning-together-top-view-paper-with-colorful-sketches-it-laying-wooden-table-people-sitting-around_425904-15881.jpg?size=626&ext=jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    <h1>some photot of our work</h1>
    </>
  );
};

export default Service;
