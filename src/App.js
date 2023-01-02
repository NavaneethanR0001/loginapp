
import './App.css';
import Registration from './Compnents/Registration';
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App">
       <Registration />
    </div>
    </AnimatePresence>
  );
}

export default App;
