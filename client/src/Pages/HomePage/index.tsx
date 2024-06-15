import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
  background:url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63770.jpg?w=996&t=st=1718421442~exp=1718422042~hmac=9a5d1b70a340399d3df30d01b8d60367471d8d1782256faea3c55baf79b3fff1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh; /* Full height of the viewport minus the height of the navbar */
  margin: 0; /* Remove margin to avoid shifting */
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Space between input and button */
`;

const SearchBox = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%; 
  max-width: 200px;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  
  cursor: pointer;
  width: 30%; /* Adjust width as needed */
  max-width: 100px;
`;

const Home = () => {
  return (
    <>
      <MainContainer>
        <SearchContainer>
          <SearchBox type="text" placeholder="Search..." />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </MainContainer>
    </>
  );
};

export default Home;
