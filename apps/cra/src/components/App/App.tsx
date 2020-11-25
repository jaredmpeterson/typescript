import * as React from 'react'
import Fruit from '../Fruit'

export type Item = {
  id: string
  value: string
}

const allItems: Item[] = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
]

function App() {
  const [items, setItems] = React.useState(allItems)

  React.useEffect(() => {
    console.log(items)
  }, [items])

  function addItem() {
    const newItem = allItems.find(
      i => !items.map(({ id }) => id).includes(i.id),
    )
    if (newItem) {
      setItems([...items, newItem])
    }
  }

  function removeItem(item: Item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {items.map(item => (
          <Fruit item={item} onRemoveItem={removeItem} />
        ))}
      </ul>
    </div>
  )
}

export default App
