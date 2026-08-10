import styled from 'styled-components';
import { Theme } from '../../models/theme';

export const FooterWrapper = styled.footer<{ theme: Theme }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  margin: 24px;
  font-size: 12px;
`;

export const CreatedBy = styled.span`
  display: block;
  width: 100%;
`;

export const CreatedByLink = styled.a<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
