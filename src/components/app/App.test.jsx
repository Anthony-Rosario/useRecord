/**
 * @jest-environment jsdom
 */
/* eslint-disable max-len */

import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Changes the color based on selected input', () => {
    render(<App />);

    const colorPicker = screen.getByLabelText('picker-input');
    fireEvent.change(colorPicker, { target: { value: '#FC0303' } });
    fireEvent.change(colorPicker, { target: { value: '#037BFC' } });

    expect(colorPicker.value).toBe('#037bfc');

    const undo = screen.getByLabelText('undo');
    fireEvent.click(undo);
    expect(colorPicker.value).toBe('#fc0303');
    
    const redo = screen.getByLabelText('redo');
    fireEvent.click(redo);
    expect(colorPicker.value).toBe('#037bfc');
  });
});
