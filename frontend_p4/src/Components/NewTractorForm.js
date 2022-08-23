import React, {useState} from "react";


function NewTractorForm ({goGetNewTractor}) {

    const [ inputFieldForNewTractorNameValue , updateInputFieldForNewTractorNameValue ] = useState( "" )
    const [ inputFieldForNewTractorImageValue , updateInputFieldForNewTractorImageValue ] = useState( "" )
  

    return (
        <div >
          <form className="add-tractor-form"
    
            onSubmit={ 
              
              ( synthEvent )=>{
    
                synthEvent.preventDefault()
    
                let newTractor = {
    
                  name: inputFieldForNewTractorNameValue,
                  image: inputFieldForNewTractorImageValue
    
                }
                goGetNewTractor(newTractor)
               } 
            } >
    
            <h3 className = "add-tractor-form">New Team Registration</h3>
            
            <div className="formInputs">
            <input
              type="text"
              name="name"
              placeholder="Enter the Team's Name"
              className="input-text"
    
                value={ inputFieldForNewTractorNameValue }
                onChange={ ( synthEvent )=>{ updateInputFieldForNewTractorNameValue( synthEvent.target.value ) } }
    
            /><br />
    
            <input
              type="text"
              name="image"
              placeholder="Enter the Team's image URL..."
              className="input-text"
    
                value={ inputFieldForNewTractorImageValue }
                onChange={ ( synthEvent )=>{ updateInputFieldForNewTractorImageValue( synthEvent.target.value ) }  }
    
            /><br />
            </div>
            <input
                type="submit"
              name="submit"
              value="Submit Registration"
              className="submit"
            />
    
          </form>
    
    
        </div>
      );
    }


export default NewTractorForm;