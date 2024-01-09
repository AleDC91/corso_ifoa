import './App.css';
import FormComponent from './components/FormComponent';
import LifeCycleComponent from './components/LifeCycleComponent';
import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';

function App() {
  return (
    <div className="App">
      <PropsComponent title="Props title"/>
      <StateComponent />
      <hr />
      {/* <LifeCycleComponent /> */}
      <hr />
      <FormComponent />
    </div>
  );
}

export default App;
