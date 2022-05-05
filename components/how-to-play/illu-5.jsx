import styled from 'styled-components';
import Image from 'next/image';
import planet3 from '../../public/images/planets/planet3_overlay.svg';

export function IlluFive() {
  return (
    <VisualExample>
      <Planet>
        <Image src={planet3} alt="planet" />
      </Planet>
    </VisualExample>
  );
}

const VisualExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Planet = styled.div`
  animation: blinker 1s linear infinite;
`;
