import React from 'react'
import { shallow } from 'enzyme'

import LapList from '../'
import Lap from '../../Lap'

describe('<LapList />', () => {
  it('renders laps', () => {
    const wrapper = shallow(
      <LapList laps={ [1000, 2000, 1300] } />
    )
    wrapper.find(Lap).should.have.length(3)
  })
})
