// import logo from './logo.svg';
// import './App.css';
// import ConditionalRender from './ConditionalRender';
// import ObjectAccess from './ObjectAccess';
// import EditForm from './EditForm';
// import BackgroundColorChange from './BackgroundColorChange';
// import { CustomButtonEventHandler } from './CustomButtonEventHandler';
// import ImageScroll from './ImageScroll';
// import ObjectOfArray from './ObjectOfArray';
//import DotGame from './DotGame';
// import PassingProps from './PassingProps';
// import PureFun from './PureFun';

import React from "react";
import Todos from "./ReduxTodo/Todos";
//import Todo from "./todo/Todo";

// import RenderingListData from './RenderingListData';
const display = {
  display: "flex",
  justifyContent: "center",
  background: "white",
  padding: "2rem"
}

function App() {
  return (
    <div style={display} className="App">
      <header className="App-header">
        {/* <ObjectOfArray />
        <CustomButtonEventHandler />
        <BackgroundColorChange />
        <ImageScroll /> */}

        {/* state of each component is independent to each other */}
        {/* <ImageScroll /> */}
        {/* State is private to the component. If you render it in two places, each copy gets its own state. */}

      </header>
      <section>
        {/* <EditForm /> */}
        {/* <DotGame /> */}
        <Todos />

      </section>
    </div>
  );
}

export default App;
