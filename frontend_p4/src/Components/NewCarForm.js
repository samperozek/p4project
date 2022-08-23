import React, {useState} from "react";


function NewCarForm ({goGetNewCar}) {

    const [ inputFieldForNewCarName , updateInputFieldForNewCarName ] = useState( "" )
    const [ inputFieldForNewCarImageValue , updateInputFieldForNewCarImageValue ] = useState( "" )
  

    return (
        <div >
          <form className="add-car-form"
    
            onSubmit={ 
              
              ( synthEvent )=>{
    
                synthEvent.preventDefault()
    
                let newCar = {
    
                  name: inputFieldForNewCarName,
                  image: inputFieldForNewCarImageValue
    
                }
                goGetNewCar(newCar)
               } 
            } >
    
            <h3 className = "add-car-form">New Van Listing</h3>
            
            <div className="formInputs">
            <input
              type="text"
              name="name"
              placeholder="Enter the Year, Make and Model of the Van"
              className="input-text"
    
                value={ inputFieldForNewCarName }
                onChange={ ( synthEvent )=>{ updateInputFieldForNewCarName( synthEvent.target.value ) } }
    
            /><br />
    
            <input
              type="text"
              name="image"
              placeholder="Enter the picture URL for the Van..."
              className="input-text"
    
                value={ inputFieldForNewCarImageValue }
                onChange={ ( synthEvent )=>{ updateInputFieldForNewCarImageValue( synthEvent.target.value ) }  }
    
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


export default NewCarForm;