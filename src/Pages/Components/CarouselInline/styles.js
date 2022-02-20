
import styled from "styled-components";

export const Container = styled.div`
    width: 1380px;

    
.lcUbOd {
  background-color: #000 !important;
  border: #000 !important;
  box-shadow: none !important;
}

.eaptOe {
  box-shadow: none !important;
  border: 1px solid #000 !important;
}
`;
export const Center = styled.div`
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
  width: 100vw;

`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-height:  480px;
  max-width: 380px;
  margin-left: 2rem;
`;

export const Item = styled.div`
  display: flex;
  max-height: 390px;
  width: 380px;
  color: #fff;
  font-size: 4em;

  img {

    width: 100%;
  }


  

`;

export const ContainerText = styled.div`
 display: flex;
 flex: 1;
 padding-top: 1rem;
 width: 100%;
 flex-direction: column;
  
  a{
      text-decoration: none;
  }
 `;

export const Text = styled.text`
font-size: 14px;
color: #000;
/* margin: 1rem 0 1rem 0; */

`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;

  margin-left: 1.4285rem;
  margin-right: 1.4285rem;
`;



export const ButtonOne = styled.button`
  max-width: 34.428rem;
  outline: none;
  border: 1px solid #000;
  background: none;
  /* superior | direita | inferior | esquerda */
  padding: 1.428rem 3.571rem 1.428rem 3.571rem;
  border-radius: 30px;
  margin-top: 2.857rem;
  margin-bottom: 5.714rem;
  transition: all .3s;

  &:hover {
    background: #eda72d;
    border: none;
  }
`;

