import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel_new from '../src/CheckboxWithLabel_new';

it('CheckboxWithLabel_new changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel_new labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});