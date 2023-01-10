import { useState, useEffect } from 'react'

const Form = (props) => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [valueSelected, setValueSelect] = useState('usd')

  const onValueChange = (e) => {
    setInput1(e.target.value)
  }

  const onSelect = (e) => {
    setValueSelect(e.target.value)
  }

  useEffect(() => {
    let a = (Number(input1) / props[valueSelected]).toFixed(2)
    setInput2(a === 'NaN' ? 0 : a)
    console.log(a)
  }, [input1, valueSelected, props])

  return (
    <form action="#" className="converter__form-inner">
      <div className="converter__form">
        <select className="converter__form-select">
          <option value="RUB">RUB</option>
        </select>
        <input
          className="converter__form-input"
          id="input1"
          type="number"
          placeholder="0"
          value={input1}
          onChange={onValueChange}
        />
      </div>
      <div className="converter__form">
        <select
          className="converter__form-select"
          id="select"
          onChange={onSelect}
          value={valueSelected}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GPB</option>
        </select>
        <input
          className="converter__form-input"
          id="input2"
          type="text"
          readOnly
          value={input2}
        />
      </div>
    </form>
  )
}

export default Form
