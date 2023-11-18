import React from 'react';
import * as S from './styles';

interface Props {
  isDarkTheme: boolean;
  setTheme: (value: string) => void;
}

const Header: React.FC<Props> = ({ isDarkTheme, setTheme }) => {
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.ButtonSecondary onClick={toggleTheme}>
          {isDarkTheme ? <span>🌞</span> : <span>🌙</span>}
        </S.ButtonSecondary>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
