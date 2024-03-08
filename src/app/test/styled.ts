import { Column } from "@/components/atoms/Column";
import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/utils";
import { Heading } from "@/components/atoms";

export const PokeDetailContainer = styled.div`
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  
  ${media.tablet`
    flex-direction: row;
  `}
`;

export const PokedexImage = styled(Image).attrs({
  width: 300,
  height: 200,
})`
z-index: 1;
border: 1px solid var(--color-primary);
${media.tablet`
  width: 600px;
  height: 400px;
  `}

${media.desktop`
  width: 800px;
  height: 600px;
`}
`;

export const PokedexTitle = styled(Heading)`
  position: absolute;
  top: 35%;
  right: 18%;
  font-size: 1.2vw;
  font-weight: 700;
  color: var(--color-primary);

    ${media.tablet`
        top: 40%;
        right: 15%;
        font-size: 1vw;
    `}
`;

export const PokedexWrapper = styled.div`
    position: relative;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Placeholder = styled(Column)`
  display: flex; 
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: red;
`;

export const RelationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.tablet`
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const ImageTest = styled(Image).attrs({
  width: 200,
  height: 200,
})`
 position: absolute;
 z-index: 0;
 left: 0;
 top: 40px;
 width: 150px;
 height: 150px;

 ${media.tablet`
   width: 200px;
   height: 200px;
   left: 100px;
   top: 150px;
`}
`;