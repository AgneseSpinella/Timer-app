import './App.css';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

import Loading from './components/Loading';
import Timer from './components/Timer';
import Clock from './components/Clock';

const Chrono = lazy(() => import("./pages/Chrono"));

function App() {
  return (
    <div className="App">

        <div class="flex flex-col w-100 h-100 border-solid border-4 border-indigo-300">
        <Routes>

            <Route
              path='/chrono'
              element=
              {<Suspense fallback={<Loading />}>
                <div>
                  <Chrono />
                </div>
              </Suspense>}>
            </Route>
          </Routes>
        </div>

    </div>
  );
}

export default App;
