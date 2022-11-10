import React, {useRef} from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handeleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({todo, setTodo, handeleAdd}) => {
  const inputRef = useRef(null)
  
  return (
    <form action="" onSubmit={(e)=>{
      handeleAdd(e)
    }}>
        <input
        ref={inputRef}
         type="input"
           value={todo}
           onChange={(e) => setTodo(e.target.value)}
         placeholder='Enter a tasck'
         className='' />
      
        <button className=''>Go</button>
    </form>
  )
}

export default InputFeild