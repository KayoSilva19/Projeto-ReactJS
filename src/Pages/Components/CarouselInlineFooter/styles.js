
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 84.285rem;
  justify-content: center;

 
`;
export const Center = styled.div`
  display: flex;
  flex:1;
  width: 100vw;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  max-height:  30.142rem;
  max-width: 30.142rem;
  background: #141615;
  border-radius: 5px;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #FFF;
  transition: .3s;
  
  a{
    text-decoration: none;
    padding: 1.357rem;
      color: #FFF;
     
  }




  &:hover {
    color: #EDA72D !important;
    transition:  all .3s;
    
    
    img{
      transition:  all .7s;
      transform: scale(1.5); /* Igual a scaleX(2) scaleY(0.5) */
      transform-origin: center;
    }

    a {
      color: #EDA72D !important;
      transition:  all .3s;
    }
  }


 `;

export const Item = styled.div`
  display: flex;
  max-height: 390px;
  color: #fff;
  font-size: 4em;
  overflow: hidden !important;


  img {
    height: 100%;
    width: 100%;
  }

`;

export const CenterDiv = styled.div `
 display: flex;
 flex-direction: column;
 padding-left: 1.428rem; 
 padding-right: 1.428rem;

`;

export const ContainerText = styled.div`
 display: flex;
 flex: 1;
 padding-top: 1rem;
 width: 100%;
 flex-direction: column;

 
 `;
export const Text = styled.text`
font-size: 14px;
font-weight: bold;
/* margin: 1rem 0 1rem 0; */

`;
export const CenterDivBottom = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 1.428rem;
 padding-right: 1.428rem;
 border-top: 1px solid #abb0ab;
 margin-top: 1.928rem;
`;


