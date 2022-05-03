import styled, { css } from 'styled-components';
import Image from 'next/image';
import planet1 from '../../public/images/planets/planet1_overlay.svg';
import planet2 from '../../public/images/planets/planet2_overlay.svg';
import planet3 from '../../public/images/planets/planet3_overlay.svg';

export function IlluTwo() {
  return (
    <VisualHowTo>
      <VisualExample>
        <Planet>
          <Image src={planet1} alt="planet" />
        </Planet>
        1
      </VisualExample>

      <VisualExample>
        <Planet>
          <Image src={planet2} alt="planet" />
        </Planet>
        1.2
      </VisualExample>

      <VisualExample>
        <Planet>
          <Image src={planet3} alt="planet" />
        </Planet>
        1.2.2
      </VisualExample>
    </VisualHowTo>
  );
}

const VisualHowTo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const VisualExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Planet = styled.div`
  position: relative;
  transform: scale(70%);
`;
