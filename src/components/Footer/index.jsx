import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Container, StyledLink, StyledProgress } from './styles';

export function Footer() {
  return (
    <Container>
      <StyledLink to="/habitos">Hábitos</StyledLink>
      <StyledLink to="/hoje">
        <StyledProgress>
          <CircularProgressbar
            text="Hoje"
            background
            backgroundPadding={6}
            value={40}
            styles={buildStyles({
              strokeLinecap: 'round',
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              // Colors
              textColor: '#fff',
              pathColor: '#fff',
              backgroundColor: '#52B6FF',
              trailColor: 'transparent',
            })}
          />
        </StyledProgress>
      </StyledLink>
      <StyledLink to="/historico">Histórico</StyledLink>
    </Container>
  );
}
