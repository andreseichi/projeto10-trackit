import { useState } from 'react';

import { Container } from './styles';

export function Day({ children, id, handleDaySelect, disabled }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
    handleDaySelect(id);
  }

  return (
    <Container
      onClick={handleClick}
      isSelected={isSelected}
      type="button"
      disabled={disabled}
    >
      {children}
    </Container>
  );
}
