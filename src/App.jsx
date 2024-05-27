import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';

import React from 'react'
import Homepage from './pages/HomePage';
import Mainlayout from './layouts/mainLayout';
import Jobs from './pages/jobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import NotFound from './pages/NotFoundPage';
import AddJobPage from './pages/addJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  const addJob= async(newJob)=>{
    const res = await fetch('http://localhost:4000/jobs',{
      method :'POST',
      headers : {
        'Content-type' : 'application/json', 
      },
      body : JSON.stringify(newJob),
    });
    return;
  };

  const updateJobSubmit = async(job)=>{
    const res = await fetch(`http://localhost:4000/jobs/${job.id}`,{
      method :'PUT',
      headers : {
        'Content-type' : 'application/json', 
      },
      body : JSON.stringify(job),
    });
    return;
  }

  const deleteJob = async (Id) => {
    const res =  await fetch(`http://localhost:4000/jobs/${Id}`,{
      method : 'DELETE',
    });
    return;
  }

  
  const router = createBrowserRouter(
     
      createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>
        
        <Route index element={<Homepage/>}/>
        <Route path='/Job' element={<Jobs />}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJobSubmit}/>} loader={jobLoader}/>
        <Route path='/Job/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
        )
  
  );
  return (
    
    <RouterProvider router={router}/>
    
    
  );
}

export default App;