import React, { Component } from 'react'
//intersection observer
// https://www.npmjs.com/package/react-intersection-observer
import { useInView } from 'react-intersection-observer'

import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import Navbar from '../../common/navbar/Navbar';
import * as NavbarActions from '../../common/navbar/NavbarAction';

import '../../../vendor/custom/lazyloadimage.scss';


const LazyLoadImageISO = ({placeholderImage,src,alt}) => {
    const [ref,inView] = useInView({
        threshold: 0.1,
        triggerOnce : true
    });

    return (
        <div className="image-square" ref={ref}>
            <p className="myimg img-placeholder" style={{'backgroundImage':'url('+placeholderImage+')'}}>
                {
                    (inView) &&
                    (
                        <img alt={alt} src={src} />
                    )
                }
            </p>
            <span>{alt}</span> 
        </div>
    );
};
LazyLoadImageISO.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    placeholderImage : PropTypes.string,
};

class PG_LLI_ISO extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            placeholderImage : "vendor/images/ptn4.jpg", 
            image_root : "vendor/images/lazyLoadImages/",
            images : [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        }
    }
    componentDidMount(){
      this.props.NavbarActions.update({type:"app","current_page":"intersectionobserver"});
    }
    render() {
        
        return (
            <div className="app-page">
                <Navbar ></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Intersection Observer</p>
                            <h6 className="display-4 mb-5">Lazy Load Image</h6>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        {
                            this.state.images.map((item,i)=>{
                                return (
                                    <div className="col-12 col-sm-6 col-smd-4" key={i}>
                                        <LazyLoadImageISO placeholderImage={this.state.placeholderImage} src={'https://picsum.photos/200/200/?image='+i} alt={"Photo"+(i+1)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

PG_LLI_ISO.propTypes = {
    NavbarActions : PropTypes.object.isRequired,
};
  
function mapStateToProps(state) {
    return {
        nb : state.navbar
    };
}

function mapDispatchToProps(dispatch) {
    return {
        NavbarActions : bindActionCreators(NavbarActions,dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PG_LLI_ISO);