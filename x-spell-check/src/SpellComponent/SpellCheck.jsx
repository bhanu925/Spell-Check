import React , {useState} from 'react'

export default function 
SpellCheck() {
    const [ inputText , setInputText ]= useState('');
    const [ correctText , setCorrectText ]= useState('');

    const customDictionary = {

        teh: "the",
      
        wrok: "work",
      
        fot: "for",
      
        exampl: "example"
      
      };
      
      const handleInput =(e)=>{
        const value = e.target.value;        
        setInputText(value);
        const words = value.trim().split(' ');
        console.log(words , value);
        for(let i=0; i< words.length; i++){
            const word = words[i].toLowerCase();
            // console.log(word);
            if(customDictionary.hasOwnProperty(word)){
                setCorrectText(`Did you mean: ${customDictionary[word]}?`);
                return;
            }
        }
        setCorrectText('');
      }

  return (
    <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea value={inputText} rows='5' cols='33' onChange={handleInput}></textarea>
        {correctText && <p>{correctText}</p>}

    </div>
  )
}
