import React from 'react';
import { shallow, mount } from 'enzyme';
import LazyLoadImg from './LazyLoadImg';

describe('<LazyLoadImg/>', () => {
    test('should render the component',()=>{
        const  component = shallow(<LazyLoadImg/>);
        expect(component).toMatchSnapshot();
    });
    test('props src should not empty',()=>{
        const config = {src:'Asset/images/some.png'};
        const  component = mount(<LazyLoadImg config={config}/>);
        expect(component.prop('config').src).toBeTruthy();
        component.unmount();
    });
    test('should show alt text when no config.src', () => {
        const config = {alt:'Product 1'};
        const component = mount(<LazyLoadImg config={config}/>);
        expect(component.prop('config').src).toBeFalsy();
        expect(component.prop('config').alt).not.toEqual('');
        expect(component.prop('config').alt).toEqual('Product 1');
        component.unmount();
    });
    test('config.threshold should be (0-1)', () => {
        const config = {threshold:0};
        const component = mount(<LazyLoadImg config={config}/>);
        expect(component.prop('config').threshold).not.toBeUndefined();
        expect(component.prop('config').threshold).not.toString();
        expect(component.prop('config').threshold).toBeGreaterThanOrEqual(0);
        expect(component.prop('config').threshold).toBeLessThanOrEqual(1);
        component.unmount();
    });
    // test('props config.delayMethod should be function', () => {
    //     const config = {delayMethod:()=>{}};
    //     const component = mount(<LazyLoadImg config={config}/>);
    //     expect(component.prop('config').delayMethod).not.toBeUndefined();
    //     expect(typeof component.prop('config').delayMethod).toBe('function');
    //     component.unmount();
    // });
    // test('props config.beforeload should be function', () => {
    //     const config = {beforeLoad:()=>{}};
    //     const component = mount(<LazyLoadImg config={config}/>);
    //     expect(component.prop('config').beforeLoad).not.toBeUndefined();
    //     expect(typeof component.prop('config').beforeLoad).toBe('function');
    //     component.unmount();
    // });
    // test('props config.afterload should be function', () => {
    //     const config = {afterLoad:()=>{}};
    //     const component = mount(<LazyLoadImg config={config}/>);
    //     expect(component.prop('config').afterLoad).not.toBeUndefined();
    //     expect(typeof component.prop('config').afterLoad).toBe('function');
    //     component.unmount();
    // });
    // test('should show alt text when no config.src', () => {
    //     const config = {alt:'Product 1'};
    //     const component = mount(<LazyLoadImg config={config}/>);
    //     console.log(component);
    //     component.unmount();
    // });
});

