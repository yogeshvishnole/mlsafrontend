import React from "react";
import {
   AboutSec,
   AboutContainer,
   AboutHead,
   AboutQuote,
   AboutParaContainer,
   AboutHalfParaContainer,
   AboutPara,
   AboutCTA,
} from "./AboutSection.elements";
import { Container } from "../../globalStyles";

const AboutSection = () => {
   return (
      <AboutSec>
         <Container>
            <AboutContainer>
               <AboutHead>ABOUT US</AboutHead>
               <AboutQuote>
                  "Individual commitment to a group effort--that is what makes a
                  team work, a company work, a society work, a civilization
                  work."
               </AboutQuote>
               <AboutParaContainer>
                  <AboutHalfParaContainer>
                     <AboutPara>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been.
                     </AboutPara>
                  </AboutHalfParaContainer>
                  <AboutHalfParaContainer>
                     <AboutPara>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been.
                     </AboutPara>
                  </AboutHalfParaContainer>
               </AboutParaContainer>
               <AboutCTA>MEET OUR TEAM</AboutCTA>
            </AboutContainer>
         </Container>
      </AboutSec>
   );
};

export default AboutSection;
