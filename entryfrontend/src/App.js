import Route from './components/nav/Route';
import Sidebar from './components/nav/Sidebar';
import TablePage from './pages/TablePage';
import FormPage from './pages/FormPage';

function App() {
  return (
          <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
                <Sidebar/>
                <div className="col-span-5">
                    <Route path='/'>
                        <TablePage/>
                    </Route>
                    <Route path = '/add'>
                        <FormPage/>
                    </Route>
                </div>
            </div>
  );
}

export default App;
