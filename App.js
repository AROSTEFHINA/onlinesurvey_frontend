import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import FeedbackForm from './FeedbackForm'
import Aboutapp from './Aboutapp'
import LikertScale from './LikertScale'
import OpenEndedQuestions from './OpenEndedQuestions'
import RatingScale from './RatingScale'
import ButtonMain from './ButtonMain'
import Add from './Add'
import Get from './Get';
import Delete from './Delete';
import Update from './Update'
import Adminoruser from './Adminoruser'
import Privacy from './privacy'
import FAQ from './FAQ'
import LandingPage from './LandingPage'
 import Homeforuser from './Homeforuser'
import CodeInput from './CodeInput'
import ShowRadio from './ShowRadio'
import Homeforadmin from './Homeforadmin'
import FeedbackFormMicro from './FeedbackFormMicro'
import FeedbackDisplayPage from './FeedbackDisplayPage'

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/FeedbackForm' element={<FeedbackForm />}></Route>
      <Route path='/Aboutapp' element={<Aboutapp />}></Route>
      <Route path='/LikertScale' element={<LikertScale />}></Route>
      <Route path='/OpenEndedQuestions' element={<OpenEndedQuestions />}></Route>
      <Route path='/RatingScale' element={<RatingScale />}></Route>
      <Route path='/ButtonMain' element={<ButtonMain />}></Route>
      <Route path='/Add' element={<Add />}></Route>
      <Route path='/Get' element={<Get />}></Route>
      <Route path='/Delete' element={<Delete />}></Route>
      <Route path='/Update' element={<Update />}></Route>
      <Route path='/Adminoruser' element={<Adminoruser />}></Route>
      <Route path='/privacy' element={<Privacy />}></Route>
      <Route path='/FAQ' element={<FAQ />}></Route>
      <Route path='/LandingPage' element={<LandingPage />}></Route>
      <Route path='/Homeforuser' element={<Homeforuser />}></Route>
      <Route path='/CodeInput' element={<CodeInput />}></Route>
      <Route path='/ShowRadio' element={<ShowRadio />}></Route>
      <Route path='/Homeforadmin' element={<Homeforadmin />}></Route>
      <Route path='/FeedbackFormMicro' element={<FeedbackFormMicro />}></Route>
      <Route path='/FeedbackDisplayPage' element={<FeedbackDisplayPage />}></Route>
     </Routes>
     </BrowserRouter>
  )
}
  
export default App
