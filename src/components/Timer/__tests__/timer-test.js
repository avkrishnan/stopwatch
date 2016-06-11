import React from 'react'
import { shallow } from 'enzyme'

import Timer from '../'

describe('<Timer />', () => {
  it('renders a formatted time', () => {
    const wrapper = shallow(
      <Timer timeElapsed={ 1000 } running={ false } />
    )
    const subject = wrapper.find('Text')
    subject.props().children.should.equal('00:01.00')
  })
})
