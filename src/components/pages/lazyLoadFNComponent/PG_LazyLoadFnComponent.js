import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from '../../common/navbar/Navbar';
import * as NavbarActions from '../../common/navbar/NavbarAction';

import LazyLoadImg from './LazyLoadImg';

class PG_LazyLoadFnComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            placeholderImage : "vendor/images/ptn4.jpg", 
            images : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        }
    }
    componentDidMount(){
      this.props.NavbarActions.update({type:"app","current_page":"lazyloadfn"});
    }
    render() {
        return (
            <div className="app-page">
                <Navbar ></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Global Component</p>
                            <h6 className="display-4 mb-5">Lazy Load Image</h6>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        {
                            this.state.images.map((i)=>{
                                return (
                                    <div className="col-12 col-sm-6 col-smd-4" key={i}>
                                        <p className="p5 radius">
                                        <LazyLoadImg config={{'src': 'https://picsum.photos/500/400/?image='+i,'placeholderSrc':this.state.placeholderImage,'alt':'Photo '+i, 'threshold':0, 'delayTime':'600', 'width':'100%', 'height':'300px' }}/>
                                        </p>
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

PG_LazyLoadFnComponent.propTypes = {
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
)(PG_LazyLoadFnComponent);