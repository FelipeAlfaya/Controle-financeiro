import { useState, useEffect } from 'react'
import Global from './styles/global'
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'

const App = () => {
  const data = localStorage.getItem('transactions')
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  ) // useState([]) is the initial value

  const [income, setIncome] = useState(0) // useState('') is the initial value
  const [expense, setExpense] = useState(0) // useState('') is the initial value
  const [total, setTotal] = useState(0) // useState('') is the initial value

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))

    const expense = amountExpense
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2)
    const income = amountIncome.reduce((acc, curr) => acc + curr, 0).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`$ ${income}`)
    setExpense(`$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}$ ${total}`)
  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions))
  }

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <Global />
    </>
  )
}

export default App
