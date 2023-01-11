import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/andchill.png')}
          title="And Chill"
          description="Swipe to match movies/shows with your friends and family"
          technologies="JavaScript - Node - MongoDB"
          link_one="https://and-chill.herokuapp.com/"
          link_two="https://github.com/kaidenkennedy7/AndChill"
          link_one_text="Website"
          link_two_text="Github"
        />
        <Card
          img={require('../images/Connect4.png')}
          title="Connect Four"
          description="Play connect four with a friend or against the computer!"
          technologies="JavaScript - jQuery"
          link_one="https://kaidenkennedy7.github.io/Connect-Four-v2/"
          link_two="https://github.com/kaidenkennedy7/Connect-Four-v2"
          link_one_text="Website"
          link_two_text="Github"
        />
        <Card
          img={require('../images/Pokedex2.png')}
          title="PokeDex"
          description="A fun interactive PokeDex using the Pokemon API"
          technologies="JavaScript - React"
          link_one="https://pokedex-react.herokuapp.com/"
          link_two="https://github.com/kaidenkennedy7/Pokedex"
          link_one_text="Website"
          link_two_text="Github"
        />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
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

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;
  @media (max-width: 40rem) {
    padding: 1.5rem;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Projects;