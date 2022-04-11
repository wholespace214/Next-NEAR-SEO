import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Header } from './up.style'
const Loading = () => {
    return (
        <>
            <Header>
                <Skeleton duration={2} borderRadius={5} baseColor='grey' style={{ lineHeight: 'unset' }} height={230} />
            </Header>
        </>
    )
}

export default Loading;
