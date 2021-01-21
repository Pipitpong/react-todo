import { useState } from 'react'

import styles from './Todo.module.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { List } from '../../components/List'

export function TodoPage() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  function addList() {
    setList([...list, text])
    setText('')
  }
  return (
    <div className={styles.page}>
      <div className={styles.input}>
        <Input text={text} setText={setText} />
        <Button onClick={() => addList()}>ADD</Button>
      </div>
      {list.map((item) => (
        <List>{item}</List>
      ))}
    </div>
  )
}
