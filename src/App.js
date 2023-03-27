import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import SignInPage from './Pages/SignIn';
 
function App() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <SignInPage />
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
  );
}
 
export default App;
