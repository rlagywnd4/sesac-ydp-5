import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import useTitle from './hooks/useTitle';
import Form from './components/react-hook-form/Form';
import FormPrac from './components/react-hook-form-prac/FormPrac';

function App() {
  useTitle('React Hooks 연습중입니다.');
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={5} />
      <hr />
      <Faq />
      <hr />

      <Form />
      <hr />

      <FormPrac />
    </div>
  );
}

export default App;
