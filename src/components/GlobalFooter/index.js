import React from "react";
import { Footer,MiniLogo,StyledP,StyledA } from './styled';
export default function ({Status}) {
    return (
        <>
            {(Status==="")?
                <Footer>
                    <StyledP>Desenvolvimento:<br/>Victor Hugo Cardoso</StyledP>
                    <MiniLogo/>
                    <StyledP>Creditos:<br/>
                        Logo <StyledA href="http://www.freepik.com">Designed by Primm / Freepik</StyledA><br/>
                        Artes e Imagens <StyledA href="http://www.freepik.com">Designed by Freepik</StyledA><br/>
                        Animações <StyledA href="https://stories.freepik.com">Animated by Stories by Freepik</StyledA>
                    </StyledP>
                    
                </Footer>:
                <></>
            }
        </>
        
    )
}