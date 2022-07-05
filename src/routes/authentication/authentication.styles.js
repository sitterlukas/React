import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90rem;
  margin: 3rem auto;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    width: 100vh;
  }
`;
