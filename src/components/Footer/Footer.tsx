import { useDispatch } from 'react-redux';
import { CreatedBy, CreatedByLink, FooterWrapper } from './Footer.styled';

export const Footer = () => {
  const disptach = useDispatch();

  return (
    <FooterWrapper>
      <CreatedBy>
        Created by{' '}
        <CreatedByLink
          href='http://unknown-projectures.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'>
          limeweb
        </CreatedByLink>
      </CreatedBy>
    </FooterWrapper>
  );
};
