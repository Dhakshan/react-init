import React, { Component } from 'react'
import PropTypes from 'prop-types'

// https://www.npmjs.com/package/react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';

// const LazyLoadImg = ({src,alt,width,height,wrapperClassName,placeholderSrc,effect,afterLoad,beforeLoad,delayMethod,delayTime,threshold,useIntersectionObserver,placeholder,visibleByDefault}) => {
const LazyLoadImg = ({config}) => {
    return (
        <React.Fragment>
            <LazyLoadImage {...config}
            />
            {/* <LazyLoadImage 
                src={src} 
                alt={alt} 
                {...(threshold?{'threshold':threshold}:'')}   
                {...(width?{'width':width}:'')}  
                {...(height?{'height':height}:'')}   
                {...(wrapperClassName?{'wrapperClassName':wrapperClassName}:'')}   
                {...(placeholderSrc?{'placeholderSrc':placeholderSrc}:'')}   
                {...(effect?{'effect':effect}:'')}   
                {...(afterLoad?{'afterLoad':afterLoad}:'')}   
                {...(beforeLoad?{'beforeLoad':beforeLoad}:'')}   
                {...(delayMethod?{'delayMethod':delayMethod}:'')}   
                {...(delayTime?{'delayTime':delayTime}:'')}   
                {...(useIntersectionObserver?{'useIntersectionObserver':useIntersectionObserver}:'')}   
                {...(visibleByDefault?{'visibleByDefault':visibleByDefault}:'')}   
            /> */}
        </React.Fragment>
    );
};
LazyLoadImg.propTypes = {
    config : PropTypes.any
};
// LazyLoadImg.propTypes = {
//     src:PropTypes.string,
//     alt:PropTypes.string,
//     width:PropTypes.string,
//     height:PropTypes.string,
//     wrapperClassName:PropTypes.string,
//     placeholderSrc:PropTypes.string,
//     effect:PropTypes.string,
//     afterLoad:PropTypes.func,
//     beforeLoad:PropTypes.func,
//     delayMethod:PropTypes.func,
//     delayTime:PropTypes.number,
//     threshold:PropTypes.number,
//     useIntersectionObserver:PropTypes.bool,
//     visibleByDefault:PropTypes.bool
// };
export default LazyLoadImg;