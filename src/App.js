import './App.css';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

import Loading from './components/Loading';


const Chrono = lazy(() => import("./pages/Chrono"));
const Timer = lazy(() => import("./pages/Timer"));
const MyTime = lazy(() => import("./pages/Clock"));

function App() {
  return (
    <div className="App">

        <div class=" bg-stone-200 flex-col w-100 h-80 border-solid border-4 border-neutral-500">
        <Routes>

            <Route
              path='/'
              element=
              {<Suspense fallback={<Loading />}>
                <div>
                  <MyTime />
                </div>
              </Suspense>}>
            </Route>

            <Route
              path='/Chrono'
              element=
              {<Suspense fallback={<Loading />}>
                <div>
                  <Chrono />
                </div>
              </Suspense>}>
            </Route>

            <Route
              path='/timer'
              element=
              {<Suspense fallback={<Loading />}>
                <div>
                  <Timer />
                </div>
              </Suspense>}>
            </Route>


          </Routes>
        </div>

    </div>
  );
}

export default App;
