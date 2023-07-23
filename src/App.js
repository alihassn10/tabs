import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, isLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value,setValue]=useState(0);
  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    isLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])
  if(loading){
    return  <h2 className='section loading'>loading...</h2>
  }
  const {company,dates,duties,title}=jobs[value]
  return <section className='section'>
    <div className='title'>
    <h2>Experience</h2>
    <div className='underline'></div>
    </div>
    <div className='jobs-center'>
    {/* btn container */}
  <div className='btn-container'>
    {jobs.map((job,index)=>{
      return <button className={`job-btn ${index==value && `active-btn` }`} onClick={()=>setValue(index)} >{job.company}</button>
    })}
  </div>

    {/* job conatainer */}
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='dates'>{dates}</p>
      {duties.map((duty,index)=>{
        return <div className='job-desc' key={index}>
          <FaAngleDoubleRight className='job-icon'/>
          <p > {duty}</p>
        </div>

      })}
    </article>
    </div>
  </section>
}

export default App
