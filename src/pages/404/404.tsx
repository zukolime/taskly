import {
  NotFoundLink,
  NotFoundTitle,
  NotFoundContainer,
  NotFoundWrapper,
} from './404.styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundTitle>Page Not Found ¯\_(ツ)_/¯ </NotFoundTitle>
        <NotFoundLink to='/'>Go Home</NotFoundLink>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};
