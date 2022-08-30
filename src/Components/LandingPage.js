import React from 'react';
import styled from 'styled-components';
import AccountBox from './AccountBox';

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


function LandingPage() {
  return (
    <PageContainer>
    <AccountBox />
  </PageContainer>
  )
}

export default LandingPage