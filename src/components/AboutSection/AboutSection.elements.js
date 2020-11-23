import styled from "styled-components";
import { Button } from "../../globalStyles";

export const AboutSec = styled.section`
   color: #06006c;
   padding: 3.75rem 0;
`;

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

export const AboutHead = styled.h1`
   font-size: 3.75rem;
   font-family: "Segoe UI";
   @media screen and (max-width: 668px) {
      font-size: 3rem;
   }
   @media screen and (max-width: 500px) {
      font-size: 2.5rem;
   }
`;

export const AboutQuote = styled.p`
   font-size: 1.5rem;
   font-family: "Segoe UI";
   margin: 3.75rem 5rem;
   @media screen and (max-width: 668px) {
      margin: 2.5rem 2rem;
      font-size: 1rem;
   }
`;

export const AboutParaContainer = styled.div`
   display: flex;
   width: 100%;
   @media screen and (max-width: 668px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;

export const AboutHalfParaContainer = styled.div`
   width: 50%;
   margin-right: 2%;

   @media screen and (max-width: 668px) {
      width: 100%;
      margin-bottom: 2rem;
   }
`;

export const AboutPara = styled.div`
   font-size: 1.5rem;
   font-family: "Segoe UI";
   @media screen and (max-width: 668px) {
      width: 100%;
      font-size: 1rem;
   }
`;

export const AboutCTA = styled(Button)`
   background: #edc139;
   color: #06006c;
   margin: 3.75rem 0rem;
   padding: 12px 70px;
   &:hover {
      transition: all 0.3s ease-out;
      background: #fff;
      background-color: #ffd246;
   }
`;
