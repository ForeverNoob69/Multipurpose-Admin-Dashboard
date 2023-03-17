import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Navbar from './scenes/global/Navbar';
import Dashboard from './scenes/dashboard/Dashboard';
import Sidebars from './scenes/global/Sidebars';
import Team from './scenes/team/Team';
import Contact from './scenes/contacts/Contact';
import Invoice from './scenes/invoices/Invoice';
import Form from './scenes/form/Form';
import Calender from './scenes/calender/Calender';
import FAQ from './scenes/faq/FAQ';
import Barchart from './scenes/barchart/Barchart';
import Piechart from './scenes/piechart/Piechart';
import Linechart from './scenes/linechart/Linechart';
import Geographychart from './scenes/geochart/Geographychart';
// import Contacts from './scenes/dashboard/Contacts';
// import Bar from './scenes/dashboard/Bar';
// import Form from './scenes/dashboard/Form';
// import Line from './scenes/dashboard/Line';
// import Pie from './scenes/dashboard/Pie';
// import FAQ from './scenes/dashboard/FAQ';
// import Geography from './scenes/dashboard/Geography';
// import Calender from './scenes/dashboard/Calender';


function App() {

  const [theme,colorMode] = useMode()



  const router = createBrowserRouter([{
    path:'/',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Dashboard/></main></div>
  },
  {
    path:'/team',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Team/></main></div>
  },{
      path:'/contact',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Contact/></main></div>
    },
  {
    path:'/invoice',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Invoice/></main></div>
  },
  {
    path:'/form',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Form/></main></div>
  },{
      path:'/calendar',
      element:<div className='App'><Sidebars/><main className='content'><Navbar/><Calender/></main></div>
    },{
        path:'/faq',
        element:<div className='App'><Sidebars/><main className='content'><Navbar/><FAQ/></main></div>
      },
  {
    path:'/bar',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Barchart/></main></div>
  },
  {
    path:'/pie',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Piechart/></main></div>
  },
  {
    path:'/line',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Linechart/></main></div>
  },
  {
    path:'/geography',
    element:<div className='App'><Sidebars/><main className='content'><Navbar/><Geographychart/></main></div>
  }
    ])


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* <div className="App">
          <Sidebars/>
          <main className='content'>
            <Navbar/> */}
            <RouterProvider router={router}/>
          {/* </main>
        </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
