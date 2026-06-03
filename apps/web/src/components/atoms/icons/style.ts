import { styled } from 'styled-components';

export const StyledIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 2rem;
`;

export const StyledIconList = styled.ul`
  display: grid;
  width: max-content;
  margin: 0 auto;
  grid-template-columns: repeat(10, 1fr);
  & {
    @media screen and (max-width: 1500px) {
      grid-template-columns: repeat(9, 1fr);
    }

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(7, 1fr);
    }

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  gap: 1.6rem;
`;

export const StyledIconListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  flex-shrink: 0;
  width: 12rem;
  border-radius: 0.8rem;
`;

export const StyledIconName = styled.figcaption`
  height: 4rem;
  flex-shrink: 0;
  font-size: 1.2rem;
  padding: 0 1rem;
  display: block;
  width: 100%;
  text-align: center;
  color: #444;
`;

export const StyledIcon = styled.figure`
  width: 100%;
  height: 8rem;
  flex-shrink: 0;
  padding: 1.5rem;
`;
