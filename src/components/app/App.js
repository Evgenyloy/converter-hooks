import { useState, useEffect } from 'react'
import './App.css'
import Display from '../display/Display'
import Form from '../form/Form'

function App() {
  const API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js'

  const [error, setError] = useState('')
  const [isLoading, setIsLosding] = useState(true)
  const [currency, setCurrency] = useState()
  const [usd, setUsd] = useState('')
  const [eur, setEur] = useState('')
  const [gbp, setGbp] = useState('')

  useEffect(() => {
    ;(async function () {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setCurrency(data)
        setUsd(data.Valute.USD.Value.toFixed(2))
        setEur(data.Valute.EUR.Value.toFixed(2))
        setGbp(data.Valute.GBP.Value.toFixed(2))
      } catch (error) {
        setError(error.message)
      }
      setIsLosding(false)
    })()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className="converter">
      <div className="converter__title">Currency Converter</div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Display usd={usd} eur={eur} gbp={gbp} currency={currency} />
      )}

      <Form usd={usd} eur={eur} gbp={gbp} />
    </div>
  )
}

export default App
