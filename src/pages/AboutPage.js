import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Comfort sway was founded in the late 80s to explore the expressive
            possibilities of contemporary furnishing. This family-run business
            works both as a retailer (we have an amazing physical store near the
            Venetian old town of Chania and a dynamic on-line store) and as a
            manufacturer (with a family owned factory in Indonesia). Since early
            2010s, Comfort sway started working with internationally acclaimed
            designers in order to create bespoke furniture collections. We are
            at our best when dealing with special projects such as design
            furniture for hotels, villas and restaurants, and we provide all our
            clients with personalized service and tailor made solutions. Infused
            with a sophisticated soul and the spirit of inovation, using only
            the highest quality materials and meticulous work performed by
            experienced workers, Zaira delivers collections of high quality and
            indisputable beauty. Our furniture are “made for life”.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
