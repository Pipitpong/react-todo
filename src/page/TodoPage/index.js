import { useState } from "react";
import styles from "./Todo.module.css";
// import components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { useListContext } from "../../ListContext";

export function TodoPage() {
  const [text, setText] = useState("");
  const [list, setList] = useListContext();
  const [keep, setKeep] = useState(0);

  function addList() {
    if (text == "") return;
    setList([...list, { line: keep, text, finish: false }]);
    setText("");
    setKeep(keep + 1);

    console.log("add", keep);
  }
  function deleteList(line) {
    setList(list.filter((item) => item.line !== line));
    console.log("delete", line);
  }

  function toggleList(line) {
    setList(
      list.map((item) =>
        item.line === line ? { ...item, finish: !item.finish } : item
      )
    );
  }

  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <div className={styles.input}>
          {/* prop */}
          <Input text={text} setText={setText} />
          {/* children */}
          <Button onClick={() => addList()}></Button>
        </div>
        <h2>
          <p>TODO LIST</p>
        </h2>

        {list.map((item) => (
          <List
            key={item.line}
            todo={item}
            deleteList={() => deleteList(item.line)}
            toggleList={() => toggleList(item.line)}
          />
        ))}
      </div>
    </div>
  );
}
