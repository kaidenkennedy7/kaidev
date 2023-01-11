import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          Hi, I'm <strong>Kaiden</strong>. I'm currently completing a Software Engineering program
          at The University of South Florida. 
        </p>
        <p>
          Besides studying and building various apps in my spare time, you'll probably find me outdoors or with my pup.
          I love rock climbing and spending time on the water. 
        </p>
        <p>
          <a
            class="shadow-underline"
            href={process.env.PUBLIC_URL + '/cv3.pdf'}
            target="_blank" rel="noreferrer"
          >
            View CV
          </a>
        </p>

        <p>
          <strong>Feel free to contact me anytime!</strong>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }
  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;