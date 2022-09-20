import React from "react";
import ReactDOM from "react-dom/client"
import Accordion from "./accordion";

const topics = [
  {id: 1,
  title: 'HTML',
  content: 'Content here'
  },
  {
    id: 2,
    title: 'JavaScript',
    content: 'JS content here'
  }
]

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion topics={topics}/>)
