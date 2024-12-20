import styled from 'styled-components';

const Title = () => {
  return (
    <Container>
      <LineContainer>
        <MemojiContainer>
          <img
            src="memoji.png"
            alt="Memoji"
            style={{ width: '100%', height: '100%' }}
          />
        </MemojiContainer>
        <Bubble>Hello, I'm Sacha</Bubble>
      </LineContainer>

      <LineContainer>
        <h1>DIGITAL</h1>
        <h3>
          // Based in
          <br />
          Paris, France
        </h3>
      </LineContainer>

      <LineContainer>
        <h1>EXPERIENCE</h1>
      </LineContainer>

      <LineContainer>
        <h1>DESIGNER</h1>
        <button />
      </LineContainer>

      <LineContainer>
        <h3>
          // Full-Stack Developper
          <br />
          UX/UI Enthousiast
        </h3>
        <h1>
          <span>&</span>DIGITAL
        </h1>
      </LineContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffe3;
  font-family: 'Hanken';

  h1 {
    font-size: 6rem;
    margin: 0.2rem 0px;
    line-height: 1;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  span {
    margin-right: 50px;
  }
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MemojiContainer = styled.div`
  width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ffffe3;
  background-color: #ffffe3;
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
