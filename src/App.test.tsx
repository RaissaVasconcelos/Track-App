import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import {useState} from 'react'

function CostInput() {
  const [value, setValue] = useState('')

  const removeDollarSign = (value: any) => (value[0] === '$' ? value.slice(1) : value)
  const getReturnValue = (value: any) => (value === '' ? '' : `$${value}`)

  const handleChange = (ev: any) => {
    ev.preventDefault()
    const inputtedValue = ev.currentTarget.value
    const noDollarSign = removeDollarSign(inputtedValue)
    if (isNaN(noDollarSign)) return
    setValue(getReturnValue(noDollarSign))
  }

  return <input value={value} aria-label="cost-input" onChange={handleChange} />
}

const setup = () => {
  const utils = render(<CostInput />)
  const input = screen.getByLabelText('cost-input') as HTMLInputElement
  return {
    input,
    ...utils,
  }
}

describe('Simple App test', () => {
  it('Should be that the existence of components on the page', async () => {
    render(<App />)
    const title = screen.getByText(/rastreio de encomendas/i)
    expect(title).toBeInTheDocument()
    const input = screen.getByPlaceholderText(/adicione o código de rastreio/i)
    expect(input).toBeInTheDocument()
    const btn = screen.getByText(/send/i)
    expect(btn).toBeInTheDocument()
  });

  it('validade code', async () => {
    const { input } = setup()
    // const input = screen.getByPlaceholderText(/adicione o código de rastreio/i)
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('$23')
  })
  
  // it('click', async () => {
  //   const btn = screen.getByText(/send/i)
  //   userEvent.click(btn)
  //   expect(screen.getByText(//))
  // })
});