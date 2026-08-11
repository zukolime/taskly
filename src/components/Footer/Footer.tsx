import { CreatedBy, CreatedByLink, FooterWrapper } from './Footer.styled';

export const Footer = () => {
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
