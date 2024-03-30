import React from "react";
import {
    AiFillFacebook,
  AiFillGithub,
 
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "../styles/footer.scss";
import "../styles/mediaquery.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://i.ibb.co/YN2DcS0/1683220451073.jpg"}
          alt="Founder"
        />

        <h2>Eftekher Ali Efte</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UClb_5BpCaJQ-JPq0Z0hNjvQ" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100076553335802" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://github.com/EFTEKHER" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;