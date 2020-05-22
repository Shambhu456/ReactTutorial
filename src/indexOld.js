import React from "react";
import ReactDOM from "react-dom";
import el from "./Attribute";
import TApp from "./TApp"; //Composing Components
import App from "./Comp"; //Composing Components exp1
import App1 from "./Comp2"; //Composing Components exp1
import AppS from "./State"; //Stateful Component
import Student from "./Studentpro"; //Props
import Stud  from "./StudentState"//State Class without constructor
import Stu from "./sStateCons"//State Class with Constructor
import Event from "./Event"//Events Class
import Evt from "./Eventf"//Events Component Function
import Std from './Updstate'// Update State
import EP from './EventParse' //Parsing of argument in event handler
import Mount from './Mount'// Lifecycle Mounting
import Ups from './updateLife'// Lifecycle Update
import Ap from './App' // Lifecycle Unmount
import A from './stateHooks'// useState Hook
import Effect from './HookEffect'// Hook Effect
import Chook from './CustHook' //Custom Hook
import Con from './ConRender'// Conditional Rendering
import C from './ConApp'//Conditional Rendering
import Co from './CoApps' //Conditional Rendering
import L from './LApps'//Lists
import List from './LiApps' // Lists
import St from './styleApps'//Inline Styling
import Es from './esApps' // External Styling
import Project from './proHome'// Sample Project
import Image from './Image' //Image
import RApp from './RouterApp' //Router App
import Header from './ProjectHeader'//Project Header
import Photo from './ProjectPhoto'//Project Header
import Pro from './Project'
import PersonList from './PersonList' // axios API
import Bind from './EventBind'
import DApp from './Componet/DialogBoxApp'
import Form from './Form' // Controlled Component
import RefsApp from './RefsApp'// Input Refs
import cRefs from './ClassRefApp'

//ReactDOM.render(<cRefs/>,document.getElementById("root"))
ReactDOM.render(<cRefs/>,document.getElementById("root"))
//const arrValues = [10,20,30,40];
//ReactDOM.render(<L numbers = {arrValues}/>,document.getElementById("root"))
//ReactDOM.unmountComponentAtNode(document.getElementById("root"))//Unmount the component from root
//ReactDOM.render(  <Stu roll = {200+2} />,document.getElementById("root"));//State Class Constructor
//ReactDOM.render(  <Evt name="Shambhu" />,document.getElementById("root"));
