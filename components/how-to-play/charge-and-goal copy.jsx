import styled, { css } from 'styled-components';
import Image from 'next/image';
import ufo from '../../public/images/future_ufo.svg';
import greenslayer from '../../public/images/charge.svg';
import planetring from '../../public/images/planetring_narrow.svg';
import planetoverlay from '../../public/images/overlay150.svg';
import planet3 from '../../public/images/planets/planet3.svg';

export function ChargeAndGoal() {
  return (
    <VisualHowTo>
      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
          <PlanetOverlay>
            <Image src={planetoverlay} />

            <PlanetRing>
              <Image src={planetring} />
            </PlanetRing>
          </PlanetOverlay>
          <Ufo>
            <UfoWobble>
              <Image src={ufo} />
            </UfoWobble>
          </Ufo>
        </Planet>
        <SubLine>your spaceship</SubLine>
      </VisualExample>

      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
          <PlanetOverlay>
            <Image src={planetoverlay} />
            <Greens>
              <Image src={greenslayer} />
            </Greens>
            <PlanetRing>
              <Image src={planetring} />
            </PlanetRing>
          </PlanetOverlay>
        </Planet>
        <SubLine>
          planet with charge<br>you have to pick up this (=</br>
        </SubLine>
      </VisualExample>

      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" type="goal" />
          <PlanetOverlay>
            <Image src={planetoverlay} />

            <PlanetRing>
              <Image src={planetring} />
            </PlanetRing>
          </PlanetOverlay>
        </Planet>
        <SubLine>destination planet</SubLine>
      </VisualExample>
    </VisualHowTo>
  );
}

const VisualHowTo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;
const VisualExample = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubLine = styled.h3`
  color: var(--purepink);
`;

const Planet = styled.div`
  position: relative;
`;

const PlanetRing = styled.div`
  position: absolute;
  top:-23px;
  left:-25px;
  width: 170%;
  height: 170%;
  }

`;

const Ufo = styled.div`
  position: absolute;
  height: 150%;
  width: 150%;
  top: -10px;
  left: -18px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const UfoWobble = styled.div`
  animation: ufo2 2s infinite ease;
`;

const Greens = styled.div`
  height: 60%;
  width: 60%;
  position: absolute;

  animation: greens 6s linear infinite;
`;
const PlanetOverlay = styled.div`
  position: absolute;
  width: 101;
  height: 101;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//
