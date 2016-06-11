import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../app'
import Timer from '../components/Timer'
import LapList from '../components/LapList'
import MenuBar from '../components/MenuBar'

describe('<App />', () => {
  describe('Rendering Children', () => {
    it('renders a <Timer /> component', () => {
      const subject = shallow(<App />)
      subject.find(Timer).length.should.equal(1)
    })

    it('renders a <LapList /> component', () => {
      const subject = shallow(<App />)
      subject.find(LapList).length.should.equal(1)
    })

    it('renders a <MenuBar /> component', () => {
      const subject = shallow(<App />)
      subject.find(MenuBar).length.should.equal(1)
    })
  })

  describe('Methods', () => {
    it('runs resetTimer', () => {
      const subject = mount(<App />)
      expect(subject.state().startTime).to.be.null
      subject.node.resetTimer()
      expect(subject.state().startTime).to.not.be.null
    })

    it('runs clearTimer', () => {
      const subject = mount(<App />)
      subject.setState({ running: true })
      subject.state().running.should.be.true
      subject.node.clearTimer()
      subject.state().running.should.be.false
    })

    it('runs handleLapPress', () => {
      const subject = mount(<App />)
      subject.setState({ timeElapsed: 1500 })
      subject.state().laps.length.should.equal(0)
      subject.node.handleLapPress()
      subject.state().laps.length.should.equal(1)
      subject.state().laps[0].should.equal(1500)
    })

    context('when timer is already running', () => {
      it('runs handleStartPress', () => {
        const subject = mount(<App />)
        subject.setState({ running: true })
        sinon.spy(subject.node, 'clearTimer')
        subject.node.handleStartPress()
        subject.node.clearTimer.should.have.been.calledOnce
      })
    })

    context('when timer is NOT running', () => {
      it('runs handleStartPress', () => {
        const subject = mount(<App />)
        subject.setState({ running: false })
        sinon.spy(subject.node, 'resetTimer')
        subject.node.handleStartPress()
        subject.node.resetTimer.should.have.been.calledOnce
      })
    })
  })
})
