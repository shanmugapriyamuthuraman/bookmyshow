import React from 'react'
import "./Theator.css"
import Movies from '../Home/Movies.json'
import moment from "moment/moment"
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
const Theator = ({product}) => {
    console.log(product)
    console.log(Movies)
    const {ticket}=useParams()
    console.log(ticket);
    let fetchData=Movies.find((e)=>e.moviename==ticket)

    const date1= new Date()
    const date2=date1.getDate()
    const date3=new Date()
    const date4=date3.getDate()+1
    console.log()
    const date5=new Date()
    const date6=date5.getDate()+2
    let tt="10:45 Am"
    let current=moment(tt,"HH:mm a")
    console.log(current);
    let tt1="02:45 Pm"
    let current1=moment(tt1,"HH:mm ")
    console.log(current1);
    let tt2="06:45 Pm"
    let current2=moment(tt2,"HH:mm a")
    console.log(current2);
  return (
    <>
      <div className='Theatormainpage'>
        <div className='TheatreHeader'>
          <div className='Theatorcontainer'>
            <h1> {fetchData.moviename}-Tamil</h1>
          </div>
        </div>
          <div className='Theatorcontainer'>
            <div className='Theatorhead'>
              <div className='Theatorcontent'>
                <div className='Theatordate1'>
                    {date2}
                </div>
                <div className='Theatordate'>
                  {date4}
                </div>
                <div className='Theatordate'>
                  {date6}
                </div>
              </div>
            <div className='Theatorcontentend'>
              <div className='language'>
                  <h4>Tamil-2D</h4>
              </div>
            </div>
            </div>
          </div>  
          <div className='Theatorbackpage'>
            <div className='Theatorcontainer'> 
              <div className='Theatredisplay'>
              
                <div className='Theatorname'>
                  <h3>Sathiyam Cinemas : Rayapettah, Chennai </h3>
                </div>
              <div className='Theatretime'>
                <div className='Theatretime1'>
                    {current._i}
                </div>
                <div className='Theatretime1'>
                    {current1._i}
                </div>
                <div className='Theatretime1'>
                    {current2._i}
                </div>
              </div>
            </div>  
            <div className='Theatredisplay'>
              
              <div className='Theatorname'>
                <h3>TPV Multiplex Cinema : Alankulam, Tirunelveli </h3>
              </div>
              <div className='Theatretime'>
                <div className='Theatretime1'>
                    {current._i}
                </div>
                <div className='Theatretime1'>
                    {current1._i}
                </div>
                <div className='Theatretime1'>
                    {current2._i}
                </div>
              </div>
            </div> 
            <div className='Theatredisplay'>
              
              <div className='Theatorname'>
                <h3>Udhayam Theatre : Ashokpillar, Chennai </h3>
              </div>
              <div className='Theatretime'>
                <div className='Theatretime1'>
                    {current._i}
                </div>
                <div className='Theatretime1'>
                    {current1._i}
                </div>
                <div className='Theatretime1'>
                    {current2._i}
                </div>
              </div>
            </div> 
            </div>
          </div>
          <Footer/>
      </div> 

    </>
  )
}

export default Theator
