import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos,
          perspiciatis explicabo velit suscipit facere fugit totam natus
          corporis aliquam necessitatibus consequuntur et ratione maiores
          consequatur rerum quidem? Quaerat, voluptatum. Repellat ut labore,
          doloremque obcaecati consectetur aperiam corporis? Soluta, ratione
          accusantium quibusdam blanditiis voluptatum totam quasi praesentium
          veniam hic aspernatur, eligendi eos earum natus velit ipsam vel
          tempora enim itaque. At perferendis totam quam eligendi fugiat
          explicabo expedita quia eveniet inventore, voluptates laborum impedit
          veritatis sed, necessitatibus exercitationem iusto molestiae voluptate
          dicta magnam. Eaque, ex. Exercitationem repudiandae error at
          voluptatem? Harum tenetur provident voluptatibus unde, nisi aspernatur
          in ratione quam enim corporis consequatur necessitatibus tempore!
          Inventore saepe officia, quas laboriosam expedita molestias nihil
          corporis, veritatis omnis, magni reiciendis. Error, corrupti! Tenetur,
          vitae accusamus a, ab eveniet impedit exercitationem repellat iste
          aspernatur delectus soluta reprehenderit? Aliquid, nemo! Unde saepe
          voluptatum molestias molestiae harum quis, illo recusandae possimus
          similique quasi fugiat expedita.
        </p>
      </div>
    </div>
  );
};

export default About;
