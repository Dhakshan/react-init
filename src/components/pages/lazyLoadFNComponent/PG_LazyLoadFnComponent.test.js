import React from 'react';
import { shallow } from 'enzyme';
import LazyLoadImg from './LazyLoadImg';

describe('<LazyLoadImg/>', () => {
    it('should render correctly <LazyLoadImg/>', () => {    
      const component = shallow(<LazyLoadImg config={{src:''}} />);
      expect(component).toHaveLength(1);
  });
  it('should render correctly with props',()=>{
        const  component = shallow(<LazyLoadImg config={{src:''}}/>);
        expect(component).props;
  });
});
