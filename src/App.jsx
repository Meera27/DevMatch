import React from 'react'
import {Route, 
        createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider
      } 
        from 'react-router-dom'

import HomePage  from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotfoundPage from './pages/NotfoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {

  //add a new job
  const addJob = async (job) =>{
    // console.log(job)
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),
    })
    return;
  }

  //delete a job
  const deleteJob = async (id) =>{
    console.log("Id ",id);
    const res = await fetch(`/api/jobs/${id}`,{ 
      method:'DELETE',                          
    })
    return;
  }
  const updateJob = async (job)=>{
    const res = await fetch(`/api/jobs/${job.id}`,{ // this id needs to be taken 
      method:'PUT',                            // that's why we added id, in the updateJob in editjobpage.jsx
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),
    })
    return;
  }
  
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>} >
      <Route index element={<HomePage/>} />
      <Route path= '/jobs' element = {<JobsPage />} />
      <Route path = '/add-job' element = {<AddJobPage addJobSubmit = {addJob}/>}/>  (// call a function from parent like this as value to addJobSubmit which is the param in the child)
      <Route path= 'jobs/:id' element = {<JobPage  deleteJob = {deleteJob}/>} loader = {jobLoader}  /> (// i.e when the child function is fired the parent function also gets fired)
      <Route path= '/edit-job/:id' element = {<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}  /> (// i.e when the child function is fired the parent function also gets fired)
      <Route path= '*' element = {<NotfoundPage />} />
    </Route>
  ));
  
  
  return <RouterProvider router = {router}/>
}

export default App
