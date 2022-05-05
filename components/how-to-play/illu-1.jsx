import styled, { css } from 'styled-components';
import Image from 'next/image';
import ufo from '../../public/images/future_ufo.svg';
import greenslayer from '../../public/images/charge.svg';
import planet3 from '../../public/images/planets/planet3_overlay.svg';

export function IlluOne() {
  return (
    <VisualHowTo>
      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
          <Ufo>
            <UfoWobble>
              <Image src={ufo} alt="ufo" />
            </UfoWobble>
          </Ufo>
        </Planet>
        your spaceship
      </VisualExample>
      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
          <Greens>
            <Image src={greenslayer} alt="" />
          </Greens>
        </Planet>
        planet with charge
      </VisualExample>
      <VisualExample>
        <Planet type="goal">
          <Image src={planet3} alt="planet" />
        </Planet>
        destination planet
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
  margin-bottom: 1rem;

  ${props =>
    props.type === 'goal' &&
    css`
      filter: grayscale(100%);
    `}
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
  top: 20%;
  left: 20%;
  transform-origin: (0, 0);

  animation: greens 6s linear infinite;
`;
