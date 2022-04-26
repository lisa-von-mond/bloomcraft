import styled, { css } from 'styled-components';
import { angleToCooX, angleToCooY } from '../../utils/rendering-functions';
import Image from 'next/image';
import ufo from '../../public/images/future_ufo.svg';
import planetring from '../../public/images/planetring_narrow.svg';
import planetoverlay from '../../public/images/overlay150.svg';
import planet1 from '../../public/images/planets/planet1.svg';
import planet2 from '../../public/images/planets/planet2.svg';
import planet3 from '../../public/images/planets/planet3.svg';
import { introLevel } from '../../levels/level-intro';

export function GalaxyIntro() {
  return (
    <>
      {levelIntro.map(one => (
        <MyGalaxy key={one.name} scope="0">
          <Planet name={one.name} goal={one.goal}>
            <Image src={planet1} />
          </Planet>
          <PlanetOverlay>
            <Image src={planetoverlay} />
          </PlanetOverlay>
          <LegendId>
            <p>
              {one.id} {one.name}
            </p>
          </LegendId>
          <Ufo active={one.active}>
            <UfoInner active={one.active}>
              <UfoWobble>
                <Image src={ufo} />
              </UfoWobble>
            </UfoInner>
          </Ufo>

          <div className="scope">
            {one.children.map(two => (
              <MyGalaxy
                key={two.name}
                scope="1"
                distx={angleToCooX(two.angl, two.dist)}
                disty={angleToCooY(two.angl, two.dist)}
              >
                <Planet name={two.name} goal={two.goal} focus={two.focus}>
                  <Image src={planet2} />
                </Planet>
                <PlanetOverlay focus={two.focus}>
                  <Image src={planetoverlay} />
                </PlanetOverlay>

                <LegendId>
                  <p>
                    {two.id} {two.name}
                  </p>
                </LegendId>
                <Ufo active={two.active}>
                  <UfoInner active={two.active}>
                    <UfoWobble>
                      <Image src={ufo} />
                    </UfoWobble>
                  </UfoInner>
                </Ufo>

                <PlanetRing ring={two.ring} focus={two.focus}>
                  <Image src={planetring} />
                </PlanetRing>

                <div className="scope">
                  {two.children.map(three => (
                    <MyGalaxy
                      key={three.name}
                      scope="2"
                      distx={angleToCooX(three.angl, three.dist)}
                      disty={angleToCooY(three.angl, three.dist)}
                    >
                      <Planet
                        name={three.name}
                        goal={three.goal}
                        focus={three.focus}
                      >
                        <Image src={planet3} className="planetimage" />
                      </Planet>

                      <PlanetOverlay focus={three.focus}>
                        <Image src={planetoverlay} />
                      </PlanetOverlay>

                      <LegendId>
                        <p>
                          {three.id} {three.name}
                        </p>
                      </LegendId>
                      <Ufo active={three.active}>
                        <UfoInner active={three.active}>
                          <UfoWobble>
                            <Image src={ufo} />
                          </UfoWobble>
                        </UfoInner>
                      </Ufo>

                      <PlanetRing ring={three.ring}>
                        <Image src={planetring} />
                      </PlanetRing>
                    </MyGalaxy>
                  ))}
                </div>
              </MyGalaxy>
            ))}
          </div>
        </MyGalaxy>
      ))}
    </>
  );
}

const MyGalaxy = styled.div`
  top: ${props => props.distx}px;
  left: ${props => props.disty}px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  .scope {
    position: absolute;
    top: 0;
    left: 0;
  }

  ${props =>
    props.scope === '0' &&
    css`
      height: 70px;
      width: 70px;
      transform-origin: ${props => props.distx}*-1px;
      ${props => props.disty}*-1px;
    `}

  ${props =>
    props.scope === '1' &&
    css`
      height: 50px;
      width: 50px;
    `}
  
${props =>
    props.scope === '2' &&
    css`
      height: 40px;
      width: 40px;
    `}
`;

const Planet = styled.div`
  position: absolute;
 
  }

  ${props =>
    props.goal === props.name &&
    css`
      filter: grayscale(100%) brightness(50%);
    `}

  ${props =>
    props.focus === true &&
    css`
      animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
    `}
`;

const PlanetRing = styled.div`
  position: absolute;
  width: 170%;
  height: 170%;

  transform-origin: ${props => props.distx}*-1px;
  ${props => props.disty}*-1px;
  }

  ${props =>
    props.ring === 0 &&
    css`
      display: none;
    `}

  ${props =>
    props.ring === 2 &&
    css`
      filter: invert(100%) brightness(400%);
    `}

${props =>
  props.focus === true &&
  css`
    animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
  `}
`;

const Ufo = styled.div`
  position: absolute;
  height: 150%;
  width: 150%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  visibility: hidden;

  ${props =>
    props.active === true &&
    css`
      visibility: visible;
    `}

  ${props =>
    props.chargeStatus === true &&
    css`
      filter: hue-rotate(200deg);
    `}
`;

const UfoInner = styled.div`
  ${props =>
    props.active === true &&
    css`
      animation: ufo 0.5s;
    `}
`;

const UfoWobble = styled.div`
  animation: ufo2 2s infinite ease;
`;

const PlanetOverlay = styled.div`
  position: absolute;
  width: 101;
  height: 101;

  transform-origin: ${props => props.distx}*-1px;
  ${props => props.disty}*-1px;

  ${props =>
    props.focus === true &&
    css`
      animation: blinker 1s linear infinite, orbit-rev 600s linear infinite;
    `}
`;
//

const LegendId = styled.div`
  position: absolute;

  width: 150%;
  height: 150%;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  text-align: right;
  align-items: flex-start;

  p {
    color: white;
    font-size: 0.7rem;
    test-align: right;
    padding: 0;
    margin: 0;
  }
`;
