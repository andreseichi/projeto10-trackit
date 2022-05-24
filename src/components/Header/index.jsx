import { Container, Heading, UserPicture } from './styles';

import userPicture from '../../assets/user.png';

export function Header() {
  return (
    <Container>
      <Heading>TrackIt</Heading>

      <UserPicture src={userPicture} />
    </Container>
  );
}
