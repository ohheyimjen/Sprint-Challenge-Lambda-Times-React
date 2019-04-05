import React from 'react';
import sc from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDIV = sc.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderSPAN = sc.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const HeaderH1 = sc.h1`
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;



const Header = () => {
  return (
    <HeaderDIV>
      <HeaderSPAN>SMARCH 32, 2018</HeaderSPAN>
      <HeaderH1>Lambda Times</HeaderH1>
      <span className="temp">98°</span>
    </HeaderDIV>
  )
}

export default Header