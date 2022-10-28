import styled, { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Prompt', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Container = styled.section`
  display: flex;
  margin-top: 200px;
  margin-left: 500px;
  background: black;
  border-radius: 50px;
  width: 400px;
  height: 693px;
  padding: 24px 16px; 
  color: white;
`;

export const Card = styled.div`
  background: #0E1218;
  border-radius: 50px;
  width: 407px;
  height: 644px;
  padding: 24px 16px; 
  overflow: hidden;

  .repoName {
    background: blue;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-direction: row;
  }

  .card-header {
    display: flex;
    margin-top: 15px;
    align-items: center;
    gap: 19px;


    .logo {
      height: 50px;
      width: 52px;
      display: flex;
    
      justify-content: center;
      align-items: center;
    
      box-sizing: border-box;
      border: 1px solid ;
      border-radius: 50%;

      .img {  
        height: 36px;
        width: 30px;
        border-radius: 0px;
      }
    }
  }
`;
export const Stats = styled.div`
    position: absolute;
    top: 550px;
    left: 600px;
    width: 195px;
    height: 195px;
    border-radius: 50px ;
    padding-top: 20px;
    background:linear-gradient(180deg, #000000 3.65%, rgba(70, 69, 69, 0.72) 53.65%, rgba(62, 56, 56, 0.42) 100%);

    .description{
      display: flex;
      gap: 6px;
      justify-content: flex-start;
      align-items: center;
      padding-top: 10px ;
    }
      
    .space-icons{
      display: flex;
      flex-direction: column;
      margin-left: 25px;
      width: 20px;
      height: 20px;
    }
`;

export const Profile = styled.div`
    margin-top: 100px;
    margin-left: 150px;
    height: 300px;
    width: 300px;
    border: 6px solid #8257E5;
    border-radius: 100%;
    background-color:#8257E5;

    img {
    border-radius: 100%;
    height: 290px;
    overflow: hidden;
    width: 100%;
  }
`;

  export const Footer = styled.div`
  margin-top: 100px;
  margin-right: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  flex-direction: row;

  .logo-rocket {
    height: 36px;
    width: 30px;
    border-radius: 0px;
  }
`;





