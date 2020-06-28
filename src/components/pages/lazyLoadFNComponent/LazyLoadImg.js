import React, { Component } from 'react'
import PropTypes from 'prop-types'

// https://www.npmjs.com/package/react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadImg = ({config}) => {
    return (
        <React.Fragment>
            <LazyLoadImage {...config}/>
        </React.Fragment>
    );
};
LazyLoadImg.propTypes = {
    config : PropTypes.any
};
export default LazyLoadImg;