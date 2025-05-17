import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function CarouselComponent() {
  return (
    <div style={{ width: "800px" }}>
      <Carousel fade>
        <Carousel.Item>
          <Image src="/0U9A0994.jpg" text="Blue Moon" fluid />
          <Carousel.Caption>
            <h3>Super Blue Moon</h3>
            <p>August 31, 2023</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/received_420764901802561.jpeg"
            text="What Are You Looking At?"
            fluid
          />
          <Carousel.Caption>
            <h3>"What Are You Looking At?"</h3>
            <p>Oragutan at the Zoo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/Softly Defined.jpg" text="Orange Flower" fluid />
          <Carousel.Caption>
            <h3>Softly Defined</h3>
            <p>Orange Flower.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/received_560062107816058.jpeg" text="Lizard" fluid />
          <Carousel.Caption>
            <h3>"A Lizard Lounging"</h3>
            <p>Lizard</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/received_2096771040436700.jpeg" text="Leopard" fluid />
          <Carousel.Caption>
            <h3>"A Smitten Kitten"</h3>
            <p>Leopard At Zoo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
