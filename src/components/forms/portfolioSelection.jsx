import React, {useState, Fragment } from "react";
import { connect } from "react-redux";




const UnconnectedPortoflioSelection = () => {
  const [inputFields, setInputFields] = useState([{ticker: ''}]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ticker:''})
    setInputFields(values)

  }

  const handleRemoveFields = index => {
    const values = [...inputFields];
   
    if(values.length > 1){ 
      values.splice(index, 1);
      setInputFields(values)
    }
  }

  const handleInputChange = (index, event) => {
    const values = [...inputFields]
    if (event.target.name === 'ticker') {
      values[index].ticker = event.target.value
    }
    setInputFields(values)
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div>
                <label>Ticker</label>
                <input
                  type="text"
                  name="ticker"
                  value={inputField.ticker}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div>
          <button
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
      </form>
    </>
  );
};

let PortfolioSelection = connect()(UnconnectedPortoflioSelection);

export default PortfolioSelection;