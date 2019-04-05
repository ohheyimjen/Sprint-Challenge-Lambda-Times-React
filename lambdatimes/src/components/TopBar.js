import React from 'react';
import sc from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = sc.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const ContainerDIV = sc.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const ContainerLeftDIV = sc.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenterDIV = sc.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;


const ContainerRightDIV = sc.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightSPAN = sc.span`
cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDIV>
        <ContainerLeftDIV>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeftDIV>
        <ContainerCenterDIV>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenterDIV>
      <ContainerRightDIV>
          <ContainerRightSPAN>LOG IN</ContainerRightSPAN>
        </ContainerRightDIV>
      </ContainerDIV>
    </TopBarDiv>
      
  )
}

// const Bar = styled.container`
//   color: green;
// `;

export default TopBar;