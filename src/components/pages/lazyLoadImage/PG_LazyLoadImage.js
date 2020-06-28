import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../../common/navbar/Navbar';
import * as NavbarActions from '../../common/navbar/NavbarAction';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../../vendor/custom/lazyloadimage.scss';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import {LazyLoadImageData} from './PG_LazyLoadImageData';

class PG_LazyLoadImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrollTop : 0,
            winHeight : 0,
            placeholder_image : "vendor/images/ptn4.jpg", 
            image_root : "vendor/images/lazyLoadImages/",
            images : LazyLoadImageData
        }
    }
    componentDidMount(){
      this.props.NavbarActions.update({type:"app","current_page":"lazyloadimage"});
    }
    render() {
        return (
            <div className="app-page">
                <Navbar ></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="display-4 mb-5">Lazy Load Image</h6>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        {
                            this.state.images.list.map((item,i)=>{
                                return (
                                    <div className="col-12 col-sm-6 col-smd-4" key={i}>
                                        <div className="image-square">
                                            <p className="myimg img-placeholder" threshold="0" style={{'backgroundImage':'url('+this.state.placeholder_image+')'}}>
                                                <LazyLoadImage alt={item.alt} threshold="0" delayTime="300" useIntersectionObserver="true" src={'https://picsum.photos/200/200/?image='+i}  />
                                            </p>
                                            <span>{item.alt}</span> 
                                        </div>
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

PG_LazyLoadImage.propTypes = {
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
)(PG_LazyLoadImage);