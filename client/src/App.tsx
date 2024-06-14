import { BrowserRouter, Route, Routes } from 'react-router-dom';
import authRoutes from './Pages/Router/auth-routes';
// import nonAuthRoutes from './Router/non-auth-routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuspenseLayout from './Components/SuspenseLayout';
import NavBar from './Components/NavigationLayout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element= {<SuspenseLayout/>}>
            <Route element={<NavBar/>}>
              {authRoutes.navigationRouts.map((data) => {
                return <Route path={data.path} key={data.name} element={data.component} />;
              })}
            </Route>
            {/* <Route>
              {nonAuthRoutes.map((data) => {
                return <Route path={data.path} element={data.component} key={data.name} />;
              })}
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;