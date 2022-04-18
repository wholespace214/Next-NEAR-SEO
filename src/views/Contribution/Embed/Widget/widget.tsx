import React, { useEffect, useRef } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

const Widget = ({ id, ...options }) => {
    const typeformElm = useRef(null);

    useEffect(() => {
        //@ts-ignore
        createWidget(id, { container: typeformElm.current, ...options });
    }, [id]);

    return <div className="react-typeform-embed" ref={typeformElm} />;
};

export default Widget;