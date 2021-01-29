import { useState } from 'react'
import styles from './Todo.module.css'
// import components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { List } from '../../components/List'
import { useListContext } from '../../ListContext'

export function TodoPage() {
  const [text, setText] = useState('')
  const [list, setList] = useListContext()
  function addList() {
    setList([...list, text])
    setText('')
  }
  return (
    <div className={styles.page}>
      <div className={styles.input}>
        {/* prop */}
        <Input text={text} setText={setText} />
        {/* children */}
        <Button onClick={() => addList()}>ADD</Button>
      </div>
      {list.map((item) => (
        <List text={item} />
      ))}
    </div>
  )
}
