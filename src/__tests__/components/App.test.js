import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/app/App'

it('renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.App-intro')).length
})
