import styled from 'styled-components';

const Title = () => {
  return (
    <Container>
      <MemojiContainer>
        <img
          src="memoji.png"
          alt="Memoji"
          style={{ width: '100%', height: '100%' }}
        />
      </MemojiContainer>
      <Bubble>Hello, I'm Sacha</Bubble>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MemojiContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fafafa;
  background-color: #fafafa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Bubble = styled.div`
  background: linear-gradient(135deg, #0a84ff, #007aff);
  color: white;
  padding: 1rem 1.5rem;
  line-height: 1.2;
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: #007aff transparent transparent transparent;
  }
`;

export default Title;
