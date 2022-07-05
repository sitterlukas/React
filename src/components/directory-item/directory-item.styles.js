import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  max-width: 8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 1rem 1rem 0;
    font-size: 2.2rem;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1.6rem;
  }
`;

export const DirectoryItemContainer = styled.div`
  border-radius: 1rem;
  min-width: 30%;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &.large {
      height: 38rem;
    }

    &:first-child {
      margin-right: 0.75rem;
    }

    &:last-child {
      margin-left: 0.75rem;
    }
  }
`;
