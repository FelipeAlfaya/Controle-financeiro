import React, { useState } from 'react'
import * as C from './styles'
import Grid from '../Grid'
import toast, { Toaster } from 'react-hot-toast'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState('') // useState('') is the initial value
  const [amount, setAmount] = useState('') // useState('') is the initial value
  const [isExpense, setExpense] = useState(false) // useState(false) is the initial value

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      toast('Informe a descrição e o valor!', {
        icon: '⚠️',
        position: 'bottom-right',
        style: { backgroundColor: '#ffa500', color: '#fff' },
      })
      return
    } else if (amount < 1) {
      toast('O Valor tem que ser positivo!', {
        icon: '⚠️',
        position: 'bottom-right',
        style: { backgroundColor: '#ffa500', color: '#fff' },
      })
      return
    }

    const transcation = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transcation)

    setDesc('')
    setAmount('')
  }

  return (
    <>
      <Toaster />
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type='radio'
            id='rExpenses'
            defaultChecked
            name='group1'
            onChange={(e) => setExpense(!isExpense)}
          />
          <C.Label htmlfor='rIncome'>Entrada</C.Label>
          <C.Input
            type='radio'
            id='rIncome'
            name='group1'
            onChange={(e) => setExpense(!isExpense)}
          />
          <C.Label htmlfor='rExpenses'>Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Salvar</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}

export default Form
