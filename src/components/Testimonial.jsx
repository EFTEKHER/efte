import React from "react";
import "../styles/testimonial.scss"
import "../styles/mediaquery.scss";
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Faruque khan"}
          feedback={"Your Teaching skills are so good."}
        />

        <TestimonialCard
          name={"David Smith"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"professor Dr. Ali Hossain "}
          feedback={"Amazing work and see you in future"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;