import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}

      {/* <LifecycleA /> */}

      {/* <FragmentDemo></FragmentDemo> */}

      {/* <Table></Table> */}

      <ParentComp></ParentComp>
    </div>
  );
}

export default App;