import styled from 'styled-components';
import Image from 'next/image';
import planetoverlay from '../../public/images/overlay150.svg';
import planet3 from '../../public/images/planets/planet3_overlay.svg';

export function IlluFive() {
  return (
    <VisualHowTo>
      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
        </Planet>
      </VisualExample>
    </VisualHowTo>
  );
}

const VisualHowTo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  flex-shrink: 1;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const VisualExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Planet = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  animation: blinker 1s linear infinite;
`;
