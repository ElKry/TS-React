import React, { /* useState */ useRef } from "react"; 

interface TodoFormProps {
  onAdd(title: string): void
}

export const ToDoForm: React.FC<TodoFormProps>/*<{ onAdd(title: string): void }> вместо этого создадим интерфейс выше */
= (props) => {
  //const [title, setTitle] = useState(''); вариант для JS

  // Обработка input при помощи useState
  // const [title, setTitle] = useState<string>('');  

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  // const keyPressHandler = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     console.log(title);
  //     setTitle(''); // чистим state
  //   }
  // }

  // Обработка input при помощи useRef
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  }

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="input-field">
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        //onChange={changeHandler} useState
        //onKeyPress={keyPressHandler} useState
        //value={title} useState
        type="text" id="title" placeholder="Добавить дело" />
      <label htmlFor="title" className="active">Добавить дело</label>
    </div>
  )
}