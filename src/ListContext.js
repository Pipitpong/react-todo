import { createContext, useContext, useState } from 'react'

export const ListContext = createContext([])

export function ListProvider({ children }) {
  const [list, setList] = useState([])
  return (
    <ListContext.Provider value={[list, setList]}>
      {children}
    </ListContext.Provider>
  )
}

export function useListContext() {
  return useContext(ListContext)
}
