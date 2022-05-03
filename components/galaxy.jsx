import styled, { css } from 'styled-components';
import { angleToCooX, angleToCooY } from '../utils/rendering-functions';
import Image from 'next/image';
import ufo from '../public/images/future_ufo.svg';
import greenslayer from '../public/images/charge.svg';
import planetring from '../public/images/planetring_narrow.svg';
import planetoverlay from '../public/images/overlay150.svg';
import planet1 from '../public/images/planets/planet1.svg';
import planet2 from '../public/images/planets/planet2.svg';
import planet3 from '../public/images/planets/planet3.svg';
import planet4 from '../public/images/planets/planet4.svg';

export function Galaxy({ galaxy, chargeStatus, charge, goal }) {
  return (
    <>
      {galaxy.map(one => (
        <MyGalaxy key={one.name} scope="0" chargeStatus={chargeStatus}>
          <Planet name={one.name} goal={goal}>
            <Image src={planet1} alt="planet" />
          </Planet>
          <PlanetOverlay>
            <Image src={planetoverlay} />
          </PlanetOverlay>
          <Greens name={one.name} greens={charge} chargeStatus={chargeStatus}>
            <Image src={greenslayer} />
          </Greens>
          <LegendId>
            <p>
              {one.id} {one.name}
            </p>
          </LegendId>
          <Ufo active={one.active} chargeStatus={chargeStatus}>
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
                chargeStatus={chargeStatus}
              >
                <Planet name={two.name} goal={goal} focus={two.focus}>
                  <Image src={planet2} alt="planet" />
                </Planet>
                <PlanetOverlay focus={two.focus}>
                  <Image src={planetoverlay} />
                </PlanetOverlay>
                <Greens
                  name={two.name}
                  greens={charge}
                  chargeStatus={chargeStatus}
                >
                  <Image src={greenslayer} />
                </Greens>
                <LegendId>
                  <p>
                    {two.id} {two.name}
                  </p>
                </LegendId>
                <Ufo active={two.active} chargeStatus={chargeStatus}>
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
                      chargeStatus={chargeStatus}
                    >
                      <Planet name={three.name} goal={goal} focus={three.focus}>
                        <Image src={planet3} alt="planet" />
                      </Planet>

                      <PlanetOverlay focus={three.focus}>
                        <Image src={planetoverlay} />
                      </PlanetOverlay>
                      <Greens
                        name={three.name}
                        greens={charge}
                        chargeStatus={chargeStatus}
                      >
                        <Image src={greenslayer} />
                      </Greens>
                      <LegendId>
                        <p>
                          {three.id} {three.name}
                        </p>
                      </LegendId>
                      <Ufo active={three.active} chargeStatus={chargeStatus}>
                        <UfoInner active={three.active}>
                          <UfoWobble>
                            <Image src={ufo} />
                          </UfoWobble>
                        </UfoInner>
                      </Ufo>

                      <PlanetRing ring={three.ring} focus={three.focus}>
                        <Image src={planetring} />
                      </PlanetRing>

                      <div className="scope">
                        {three.children.map(four => (
                          <MyGalaxy
                            key={four.name}
                            scope="3"
                            distx={angleToCooX(four.angl, four.dist)}
                            disty={angleToCooY(four.angl, four.dist)}
                            chargeStatus={chargeStatus}
                          >
                            <Planet
                              name={four.name}
                              goal={goal}
                              focus={four.focus}
                            >
                              <Image src={planet4} alt="planet" />
                            </Planet>

                            <PlanetOverlay focus={four.focus}>
                              <Image src={planetoverlay} />
                            </PlanetOverlay>
                            <Greens
                              name={four.name}
                              greens={charge}
                              chargeStatus={chargeStatus}
                            >
                              <Image src={greenslayer} />
                            </Greens>
                            <LegendId>
                              <p>
                                {four.id} {four.name}
                              </p>
                            </LegendId>
                            <Ufo
                              active={four.active}
                              chargeStatus={chargeStatus}
                            >
                              <UfoInner active={four.active}>
                                <UfoWobble>
                                  <Image src={ufo} />
                                </UfoWobble>
                              </UfoInner>
                            </Ufo>

                            <PlanetRing ring={four.ring} focus={four.focus}>
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
      height: 100px;
      width: 100px;
      animation: orbit 600s linear infinite;
      transform-origin: ${props => props.distx}*-1px;
      ${props => props.disty}*-1px;
    `}

  ${props =>
    props.scope === '1' &&
    css`
      height: 80px;
      width: 80px;
      filter: hue-rotate(-45deg);
    `}
  
${props =>
    props.scope === '2' &&
    css`
      height: 60px;
      width: 60px;
      filter: hue-rotate(45deg);
    `}
  
${props =>
    props.scope === '3' &&
    css`
      height: 50px;
      width: 50px;
    `}
`;

const Planet = styled.div`
  position: absolute;
  animation: orbit-rev 600s linear infinite;
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
  animation: orbit-rev 600s linear infinite;
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
  animation: orbit-rev 600s linear infinite;
  visibility: hidden;
  filter: hue-rotate(45deg);

  ${props =>
    props.active === true &&
    css`
      visibility: visible;
      animation: orbit-rev 600s linear infinite;
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

const Greens = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  animation: greens 6s linear infinite;

  ${props =>
    props.greens !== props.name &&
    css`
      display: none;
    `}

  ${props =>
    props.chargeStatus === true &&
    css`
      display: none;
    `}
`;
const PlanetOverlay = styled.div`
  position: absolute;
  width: 101;
  height: 101;
  animation: orbit-rev 600s linear infinite;
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
  animation: orbit-rev 600s linear infinite;
  width: 160%;
  height: 160%;
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
