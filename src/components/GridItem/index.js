import React from 'react'
import * as C from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color='#c62c36' />
        ) : (
          <FaRegArrowAltCircleUp color='#049301' />
        )}
      </C.Td>
      <C.Td alignCenter>
        <C.Button onClick={() => onDelete(item.id)}>
          <FaTrash color='#000' />
        </C.Button>
      </C.Td>
    </C.Tr>
  )
}

export default GridItem
