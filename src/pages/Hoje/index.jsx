import { useUser } from '../../hooks/useUser';

export function Hoje() {
  const { user } = useUser();

  console.log(user);

  return (
    <>
      <h1>hoje</h1>
    </>
  );
}
