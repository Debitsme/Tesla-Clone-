import React from 'react'
import styled from 'styled-components'

function sections(props) {
    return (
        <Wrap bgImage={props.backgroundImage}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                   { props.leftButtonText}
                  
                </LeftButton>

                { props.rightButtonText &&  <RightButton>
                { props.rightButtonText}
                </RightButton>  }
               
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" >
            </DownArrow>

            </Buttons>

        </Wrap>
    )
}

export default sections;


const Wrap = styled.div`
width:100vw;
height:100vh;
background-image: ${props=>`url("/images/${props.bgImage}")`};
background-size:     cover;                    
background-repeat:   no-repeat;
background-position: center; 
display:flex;
flex-direction:column;
justify-content:space-between;
align-items: center;
`

const ItemText = styled.div`
text-align: center;
 padding-top:15vh;
`

const ButtonGroup = styled.div`
display:flex;
justify-content:center;
padding:bottom:40px;
@media (max-width: 768px) {
    flex-direction: column;
  }

`
const LeftButton = styled.div`
width:256px;
height:40px;
background-color: rgba(23, 26, 32, 0.8);
border-radius:100px;
color:white;
margin:8px;
opacity:0.85;
display:flex;
align-items:center;
justify-content:center;
text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  cursor:pointer;
`
//styled() it allows us to inherit all the styles of anything written inside the bracket
const RightButton = styled(LeftButton)`
background-color:white;
opacity:.5;
color:black;

`
const Buttons = styled.div`

`

const DownArrow = styled.img`
  margin-top: 20px;

  height: 40px;
  overflow-x:hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  animation: bounce infinite 1.5s;
`;

