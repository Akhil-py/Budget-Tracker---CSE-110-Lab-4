import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppContext, AppProvider  } from "./context/AppContext";

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
  return ( 
    <AppProvider><MyBudgetTracker /></AppProvider>
  )
    
};

export default App;
