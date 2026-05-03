import React from "react"

interface ListProps<Type> {
  items: Type[]
  render: (item: Type) => React.ReactNode
}

const List = <Type,>({ items, render }: ListProps<Type>) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{render(item)}</div>
      ))}
    </div>
  )
}

export default List
