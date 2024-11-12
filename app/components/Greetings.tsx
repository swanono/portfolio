import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const WelcomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [baseDelay, setBaseDelay] = useState(450);

  const greetings = [
    'Hello',
    'Bonjour',
    'Hola',
    'こんにちは',
    'Ciao',
    'שלום',
    'السلام عليكم',
    'Καλημέρα',
    '你好',
    'Olá',
    '안녕하세요',
    'Привет',
    'Hallo',
    'Hej',
  ];

  useEffect(() => {
    if (!isVisible) return;

    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setBaseDelay((prev) => Math.max(prev * 0.8, 200));
      }, baseDelay);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
  }, [currentIndex, isVisible, baseDelay]);

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      {currentIndex < greetings.length && (
        <GreetingWrapper>
          <GreetingText>{greetings[currentIndex]}</GreetingText>
        </GreetingWrapper>
      )}
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const GreetingWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const GreetingText = styled.div`
  font-size: 3.75rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

export default WelcomePage;
