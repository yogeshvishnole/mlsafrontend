import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
   HeroSec,
   HeroSecOverlay,
   AbsCenter,
   Headup,
   Belowtext,
   MiddleTextBox,
} from "./Hero.elements";

const Hero = () => {
   return (
      <HeroSec>
         <HeroSecOverlay>
            <Container>
               <AbsCenter>
                  <MiddleTextBox>
                     <Headup>Acro MLSA</Headup>
                     <Belowtext>
                        Microsoft Learners Student Ambassdors
                     </Belowtext>
                  </MiddleTextBox>
               </AbsCenter>
            </Container>
         </HeroSecOverlay>
      </HeroSec>
   );
};

export default Hero;
