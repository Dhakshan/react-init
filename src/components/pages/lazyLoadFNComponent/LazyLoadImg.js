import React, { Component } from 'react'
import PropTypes from 'prop-types'

// https://www.npmjs.com/package/react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadImg = ({config}) => {
    const setConfig = (key)=>{
        var newObject = {};
        if(config[key]){
            newObject[key] = config[key];
        }
        return newObject;
    }
    return (
        <LazyLoadImage {...setConfig('src')}  {...setConfig('alt')} {...setConfig('width')} {...setConfig('height')} {...setConfig('wrapperClassName')} {...setConfig('placeholderSrc')} {...setConfig('effect')} {...setConfig('afterLoad')} {...setConfig('beforeLoad')} {...setConfig('delayMethod')} {...setConfig('delayTime')} {...setConfig('threshold')} {...setConfig('useIntersectionObserver')} {...setConfig('visibleByDefault')} {...setConfig('placeholder')} {...setConfig('scrollPosition')} />
    );
};
LazyLoadImg.propTypes = {
    config:PropTypes.object
};
export default LazyLoadImg;