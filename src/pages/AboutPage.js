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
            leorem i spiur ksks ametkkaa, ajsjjeueuucnncnc. Oskskkskkxk amen
            aalslldls.Aleksandar Angelevski is the best boy in the garden, and
            alpply for web desinger ite not to havy that but aleksandar is very
            lasy. And i dont forgot to tell about Aleksandar, its to much goof
            boy but i hope in the future will be fine leorem i spiur ksks
            ametkkaa, ajsjjeueuucnncnc. Oskskkskkxk amen aalslldls.Aleksandar
            Angelevski is the best boy in the garden, and alpply for web
            desinger ite not to havy that but aleksandar is very lasy. And i
            dont forgot to tell about Aleksandar, its to much goof boy but i
            hope in the future will be fine
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
