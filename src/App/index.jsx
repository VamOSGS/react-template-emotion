import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from '@emotion/styled';

const Title = styled.h1({
  color: 'hotpink',
});

function App() {
  return (
    <div>
      <Title>Nice</Title>
    </div>
  );
}

export default hot(App);
