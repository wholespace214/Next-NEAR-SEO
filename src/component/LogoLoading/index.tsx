import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Header } from './up.style'
const Loading = (props: any) => {
    return (
        <Header>
            <Skeleton duration={2} borderRadius={5} baseColor='grey' width={props.width} height={props.height} style={{ lineHeight: 'unset' }} />
        </Header>
    )
}

export default Loading;
