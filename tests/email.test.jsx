import React from 'react'
import { shallow, mount } from 'enzyme'

import Email from '../src/email'

it('should render a input', () => {
    const wrapper = shallow(<Email />)
    expect(wrapper).toMatchSnapshot()
});

it('should validate the value', () => {
  const valid = jest.fn()
  const invalid = jest.fn()
  const handleChange = ev => {
    if (ev.target.isValid) {
      valid()
    } else {
      invalid()
    }
  }
  const wrapper = mount(<Email id="test" onChange={handleChange} />)
  const input = wrapper.find('input')
  input.simulate('change', {target: {value: 'foo'} })
  expect(invalid).toHaveBeenCalled()
  input.simulate('change', {target: {value: 'n.dufreche@gmail.com'} })
  expect(valid).toHaveBeenCalled()
})
