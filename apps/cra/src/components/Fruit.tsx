import React, { FC } from 'react'
import { Item } from './App/App'

interface FruitProps {
  item: Item
  onRemoveItem: (item: Item) => void
}

const Fruit: FC<FruitProps> = props => {
  const { item, onRemoveItem } = props
  return (
    <li key={item.id}>
      <button onClick={() => onRemoveItem(item)}>remove</button>{' '}
      <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
      <input id={`${item.id}-input`} defaultValue={item.value} />
    </li>
  )
}

export default Fruit
