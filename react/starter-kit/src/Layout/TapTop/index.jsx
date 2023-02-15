import React, { Fragment, useState, useEffect } from 'react';

const TapTop = () => {
    const [taptopStyle, setTapTopStyle] = useState('none');

    const executeScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    };

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setTapTopStyle('block');

        } else {
            setTapTopStyle('none');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Fragment>
            <div className="tap-top" style={{ display: taptopStyle }}>
                <i className='icon-control-eject' onClick={() => executeScroll()}></i>
            </div>
        </Fragment>
    );
};
export default TapTop;