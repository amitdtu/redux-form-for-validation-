import React from 'react';
import './App.css';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));

class App extends React.Component{
  handleSubmit = (values) => {
    alert(values.username + ' ' + values.password )
  }

  render(){
    return (
      <div className="App">
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Control.text model=".username" placeholder='name' validators={{required, isNumber}} />
        <Errors
          style={{color: 'danger'}}
          model=".username"
          show="touched"
          messages={{
            required: "its req.",
            isNumber: "number is complusory"
          }}
        />
        <Control.text model=".password" placeholder='email' />
        <button type='submit'>Submit</button>

      </LocalForm>
      </div>
    );
  }
 
}

export default App;
