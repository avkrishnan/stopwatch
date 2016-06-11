import React from 'react'
import { shallow } from 'enzyme'

import MenuBar from '../'
import MenuButton from '../../MenuButton'

describe('<MenuBar />', () => {
  let spy = sinon.spy()
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MenuBar
        clear={ spy }
        recordLap={ spy }
        toggleStart={ spy }
        running={ false } />
    )
  })

  afterEach(() => {
    spy.reset()
  })

  it('renders menu items', () => {
    wrapper.find(MenuButton).should.have.length(3)
  })

  it('calls a clear callback', () => {
    const subject = wrapper.find(MenuButton).at(0)
    subject.simulate('press')
    spy.calledOnce.should.be.true
  })

  it('calls a recordLap callback', () => {
    const subject = wrapper.find(MenuButton).at(1)
    subject.simulate('press')
    spy.calledOnce.should.be.true
  })

  it('calls a toggleStart callback', () => {
    const subject = wrapper.find(MenuButton).at(2)
    subject.simulate('press')
    spy.calledOnce.should.be.true
  })
})
