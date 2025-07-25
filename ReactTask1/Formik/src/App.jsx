import { useState } from 'react'
import {Formik,Form,Field} from 'formik';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Formik initialValues={{name:"", phone:"",password:""}}
                 onSubmit={(values)=>{
                    console.log(values)
                 }}>
           <Form>
             <label>Name: </label>
             <Field name="name" type="text"/>
             <br/><br/>
              <label>Phone: </label>
             <Field name="phone" type="number"/>
             <br/><br/>
             <label>Password: </label>
             <Field name="password" type="password"/>
             <br/><br/>
             <button type='submit'>Submit</button>
           </Form>
         </Formik>
      </div>
    </>
  )
}

export default App
