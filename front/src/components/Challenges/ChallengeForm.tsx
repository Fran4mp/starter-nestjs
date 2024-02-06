import {ChangeEvent, useState, FormEvent} from 'react'
import { useChallenge } from '../../context/UseChallenge';


function ChallengeForm() {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    done: false,
}) 
const {createChallenge} = useChallenge();

const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setChallenge({...challenge, [e.target.name]: e.target.value});
}
const handleSubmit =(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createChallenge(challenge);
}
  return (
    <div className='container-wrapper main-content'>
        <form className='form-model' onSubmit={handleSubmit} >
            <input  className='form-input'
                    type= "text" 
                    name= "title"
                    placeholder= 'Reto personal' 
                    onChange={handleInputChange}
                    />

            <textarea   className='form-input'
                        name= "description" 
                        rows= {4} 
                        placeholder='Descripción del reto'
                        onChange={handleInputChange}>
            </textarea>           
            <button className='button-model'>Guardar reto personal</button>
        </form>
    </div>
  )
}

export default ChallengeForm