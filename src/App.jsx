import Header  from "./components/Header/Header"
import { Title } from "./components/Title/Title"
import { Main } from "./components/Main/Main"
import "./components/Wrapper/Wrapper.scss"

function App() {
  return (
   <>
   <div className="wrapper">
   <Header></Header>
   <Title></Title>
   <Main></Main>
   </div>
   </>
  );
}

export default App;
