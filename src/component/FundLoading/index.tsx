import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Header, SubLetter } from './up.style'
const Loading = () => {
    return (
        <>
            <Header>
                <Skeleton duration={2} borderRadius={5} baseColor='grey' height={30} width={300} count={2} />
                <SubLetter>
                    <Skeleton duration={2} borderRadius={5} baseColor='grey' height={30} width={300} />
                </SubLetter>
            </Header>
        </>
    )
}

export default Loading;
