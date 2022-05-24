import { useUser } from '../../hooks/useUser';

import Avatar from '../../assets/avatar.png';

import { Container, Heading, UserPicture } from './styles';

export function Header() {
  const { user } = useUser();

  return (
    <Container>
      <Heading>TrackIt</Heading>

      <UserPicture src={user.image ? user.image : Avatar} alt={user.name} />
    </Container>
  );
}
