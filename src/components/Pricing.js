import React from 'react';
class Pricing extends React.Component {
    render() {
      return (
        <div className="container">
        <div className="row">
        <div className="col-sm toggleperiod">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked/> Monthly
            </label>
            <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"/> Yearly
            </label>
           
        </div>
        </div>
        </div>
        
      </div>
      )
    }
    }
export default Pricing;