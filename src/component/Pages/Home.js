import React from 'react'
import img1 from '../asset/businesspeople.png'
import img2 from '../asset/businessman.png'
import img3 from '../asset/pc.png'
import img4 from '../asset/Image 3.png'
const Home = () => {
  return (
    <>

    <div className='main'>
    <div className='text'>
          <h1>More revenue for hotel</h1>
          <div className='text1'><h1>Automate your room rates </h1><h1 className='text2'>120$|</h1>
          </div>
          <div>
          <p>Our intelligent machine learning algorithms</p>
          <p>optimally adjust your room rates.</p>
          <p>Optimize your pricing strategy based on</p>
          <p>occupancy, events and current demand.</p>
          </div><br />
          <div className='headerbutton'>
            <button>Get Started</button>
          </div>
      </div>
      <div className='img1'>
        <img  src={img1} alt="" />
        </div>
    </div><br /><br /><br />


    <div className='page2'>
      <div className='page2text'>
      <div className='page2text1'><h4>what is</h4> <h2>PriceUp?</h2></div> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
      <p>elit, sed do eiusmod tempor incididunt ut labore et </p>
      <p>dolore magna aliqua. Ut enim ad minim veniam, </p>
      <p>quis nostrud exercitation ullamco laboris nisi ut </p>
      <p>aliquip ex ea commodo consequat. Duis aute </p>
      <p>irure dolor in reprehenderit in voluptate velit esse </p>
      <p>cillum dolore eu fugiat nulla pariatur. </p>
      <p>Excepteur sint occaecat cupidatat non proident, </p>
      <p>sunt in culpa qui officia deserunt mollit anim id est </p>
      <p>laborum.</p>
      </div>
      <div className='card'>
      <img src={img2} alt="" />
     </div>
    </div><br /><br /><br />

    <div>
      <div className='page3text1'><h4>Introducing</h4><h4 style={{color: "#45b8b8",  borderBottom: "3px solid black", marginBottom:"2rem"}}>PriceUp?</h4></div>
      <div className='page3text2'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
      <p>dolore magna aliqua. Ut enim ad minim veniam</p></div><br /><br />
    </div>
    <div className=''>
      <div>
        <h5>channel Manager</h5>
        <h6>Manage all your online distrubution channels</h6>
      </div>
    <div>
      <img src={img3} alt="" />
      <div className='imagepc'>
      <img src={img4} alt="" />
      </div>
      </div>
    </div>
    </>
  )
}
  
export default Home
