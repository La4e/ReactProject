import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

import store from "./redux/store";
import {Provider} from "react-redux";
import "./utils/bootstrap.min.css";

const App = () => {





const todoData = [
  { label: 'Drink Coffee', important: false, id: 1 },
  { label: 'Make Awesome App', important: true, id: 2 },
  { label: 'Have a lunch', important: false, id: 3 },
];

  const todoData2 =  [
      {currency:"EUR/USD",rate:"1.14277",bid:"1.14277",ask:"1.14286",high:"1.14296",low:"1.13779",open:"1.14163",close:"1.14277",timestamp:"1594907134104"},
    {currency:"GBP/USD",rate:"1.25821",bid:"1.25821",ask:"1.25837",high:"1.25891",low:"1.25194",open:"1.2589",close:"1.25821",timestamp:"1594907133861"}
    ];





  return (
      <Provider store={store}>
       <div>

           <AppHeader />
        <SearchPanel />

        <TodoList />
        </div>
      </Provider>
   );
};

ReactDOM.render(<App />, 
    document.getElementById('root'));
