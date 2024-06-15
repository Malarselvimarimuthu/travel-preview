import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63770.jpg?w=996&t=st=1718421442~exp=1718422042~hmac=9a5d1b70a340399d3df30d01b8d60367471d8d1782256faea3c55baf79b3fff1');
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Full height of the viewport minus the height of the navbar */
  margin: 0; /* Remove margin to avoid shifting */
`;

const Heading = styled.h1`
  text-align: center; /* Center the text */
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Space between input and button */
  width: 50%;
`;

const SearchBox = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 1.6rem;
  width: 100%; /* Adjust width */
  min-width: 200px;
  height: 3rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 1.6rem;
  height: 3rem;
  cursor: pointer;
  width: auto; /* Set width to auto to adjust based on content */
  min-width: 100px; /* Ensure a minimum width for the button */
`;

const Home = () => {
  return (
    <>
      <MainContainer>
        <Heading>Enter your itinerary to get a glimpse of your travels</Heading><br/><br/><br/><br/>
        <SearchContainer>
          <SearchBox type="text" placeholder="Search..." />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </MainContainer>
    </>
  );
};

export default Home;
