import { ChangeEvent, FormEvent, useState } from 'react'
import { UseThought} from '../../context/UseThought'

function ThoughtForm() { 
    const [thought, setThought] = useState({
        title: ""
    })
    const {createThought} = UseThought();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setThought({...thought, [e.target.name]: e.target.value});
    }
    const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
        
        createThought(thought);
    }
  return (
    <div className='container-wrapper main-content'>
        <form className='form-model' onSubmit={handleSubmit}>
            <input  className='form-input'
                    type= "text" 
                    name= "title"
                    placeholder= 'Qué te motiva?' 
                    onChange={handleInputChange}
                />
          
            <button className='button-model'>Guardar pensamiento
            </button>
        </form>
    </div>
  )
}
export default ThoughtForm