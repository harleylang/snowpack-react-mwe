import React from 'react';

import styled from 'styled-components';

import useWindowDimensions from 'functions/useWindowDimensions';

interface Props {
    // define the types for your props here
};

/**
 * Home -- page
 * @return {JSX} React component
 */
const Home = ({
    // put your props here
}: Props) => {

	const { dimensions } = useWindowDimensions();

    return (
        <Container $width={dimensions.width} $height={dimensions.height}>
            <Row>
                🎉🎉🎉
            </Row>
            <H1>
                Snowpack + React MWE 
            </H1>
            <p>Edit `home.tsx` to observe HMR.</p>
        </Container>
    );

};

const Container = styled.main<{ $width: number, $height: number }>`
    width: ${({$width}) => $width}px;
    height: ${({$height}) => $height}px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    font-size: 90px;
    display: flex;
    flex-direction: center;
    justify-content: center;
`;

const H1 = styled.h1`
    font-size: 90px;
`;

export default Home;
