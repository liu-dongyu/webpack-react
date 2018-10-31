import React from 'react';
import styled from 'styled-components';
import Panel from 'components/Panel/Panel';
import ChatArea from 'components/ChatArea/ChatArea';

const Container = styled.main`
  width: 100%;
  height: 80%;
  min-height: 600px;
  max-width: 1000px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const Tips = styled.strong`
  position: absolute;
  left: 0;
  bottom: 100%;
  font-size: 18px;
  color: #666;
  white-space: nowrap;
  margin-bottom: 20px;
`;

function Wechat() {
  return (
    <Container>
      <Tips>未完待续...</Tips>
      <Panel />
      <ChatArea />
    </Container>
  );
}
export default Wechat;
