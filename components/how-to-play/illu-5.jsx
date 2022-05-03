import styled, { css } from 'styled-components';
import Image from 'next/image';
import ufo from '../../public/images/future_ufo.svg';
import greenslayer from '../../public/images/charge.svg';
import planetoverlay from '../../public/images/overlay150.svg';
import planet3 from '../../public/images/planets/planet3.svg';

export function IlluFive() {
  return (
    <VisualHowTo>
      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
          <PlanetOverlay>
            <Image src={planetoverlay} />
          </PlanetOverlay>
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

const PlanetOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//
