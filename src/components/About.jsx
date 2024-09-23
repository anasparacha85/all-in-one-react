import React from 'react'
import Head from './Head'

import { Link,NavLink } from 'react-router-dom'
import Shopees from './Shopees'
import mancamera from '../../public/mancamera.jpg'
import Footer from './Footer'

import randomimg from '../../public/randomimg.jpg'
import piccc from '../../public/piccc.jpg'
import imagecamera from '../../public/imagecamera.jpg'
import Text from './Text'
import lastback from '../../public/lastback.jpg'
import aboutkaback from '../../public/aboutkaback.jpg'
const About = () => {
  return (
    <div>
       <div className='home h-screen text-center'>
      <div className=" lg:h-5/6 w-full text-center text-gray-600 sm:h-[400px]"
        style={{backgroundImage: `url(${aboutkaback})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '88%' }}>
        <Head />
        <h4 className=' mt-16 lg:text-xl text-gray-300 md:text-lg sm:text-[10px]' >About Us</h4>
        <h1 className=' Font-Nerko mt-3 lg:text-4xl  font-extrabold text-white md:text-2xl sm:text-[15px]'>Embarking on the Path to Our Dreams.</h1>
        <p className='text-gray-300 lg:w-2/4 lg:h-12 lg:ml-80 pl-8 lg:mt-14 lg:text-lg lg:block md:block sm:block sm:text-[8px] sm:w-[250px] sm:ml-7 sm:mt-5 md:text-sm md:ml-36 md:w-[400px] md:mt-8 '>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
       
      </div>
    </div>
    <div className="flex lg:h-[550px] bg-white md:h-[480px] lg:-translate-y-0 gap-16 sm:h-[400px] sm:-translate-y-16">
      {/* Left Div for images */}
      <div className="lg:w-1/2 flex items-center justify-around lg:p-4 lg:ml-10 md:w-[400px] md:ml-5 md:p-1 sm:w-[320px]">
      <img src={piccc} alt="Second" className="lg:h-[400px]  object-cover lg:w-[280px] md:h-[300px] md:w-[180px] sm:h-[230px] sm-w-[160px]" style={{borderRadius:'56% 44% 94% 6% / 33% 100% 0% 67%'}} />
        <img src={randomimg} alt="First" className="lg:h-full lg:w-auto object-cover md:h-[350px] md:w-[180px] sm:h-[260px] sm:w-[160px]" style={{borderRadius:'48% 52% 100% 0% / 100% 100% 0% 0%'}} />
       
      </div>

      {/* Right Div for text */}
      <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:ml-auto md:w-[550px] md:p-1 md:justify-items-end  md:ml-20 md:mr-3 sm:w-[480px] sm:ml-6">
        <h4 className="lg:text-lg font-semibold lg:mb-2 md:text-[10px] md:ml-6 sm:text-[8px]">About All In One</h4>
        <h1 className="lg:text-5xl font-bold lg:mb-4 Font-Nerko md:text-[28px] md:ml-6 sm:text-[15px]">Crafting timeless pieces for your everyday style</h1>
        <p className="lg:text-base  md:text-[12px] md:ml-6 sm:text-[6px]">At the heart of our brand lies a passion for creating clothing that empowers individuals to express their unique style with confidence. Our designs blend timeless elegance with modern trends, ensuring every piece is crafted to not only look good but feel great. Whether it’s your go-to casual wear or a statement outfit, we believe fashion should be a reflection of your inner self. Using high-quality fabrics and sustainable practices, we strive to bring you collections that are as comfortable as they are stylish. We’re more than just fashion – we’re a community that celebrates individuality and self-expression.</p>
      </div>
    </div>
    <div className='bg-gray-800 lg:h-[750px] md:h-[580px] sm:h-[440px]'>
    <div className="flex lg:h-[550px] md:[410px]  ">
      {/* Left Div for images */}
      <div className="lg:w-1/2 flex flex-col justify-center p-4 ml-10 md:w-[450px] sm:w-[420px] sm:p-1 sm:ml-2">
        <h4 className="lg:text-lg font-semibold mb-2 text-gray-400 md:text-sm sm:text-[10px]" >Our story</h4>
        <h1 className="lg:text-5xl font-bold mb-4 Font-Nerko text-gray-50 md:text-[32px] sm:text-[18px]">from a siple man to the all in one owner</h1>
        <p className="lg:text-base text-gray-100 md:text-[10px] sm:text-[6px]">Once upon a time, there was a young entrepreneur named Anas, who had a passion for fashion, technology, and the artistry of jewelry. Growing up, she often dreamed of running her own business, but the thought of blending these vastly different industries into one seemed impossible. Still, Maya believed that people, like herself, had eclectic tastes that could span from cutting-edge electronics to timeless fashion and sparkling jewels. So why not bring them together?

Anas started small. With a simple idea, she sketched out plans for an online store, a space where clothing, electronics, and jewelry could coexist beautifully. But launching such a business was no easy feat. She had a vision of curating high-quality, fashionable clothes, innovative electronics, and handcrafted jewelry that spoke to both elegance and style. However, she had no prior experience running a store.</p>
      </div>
          

      {/* Right Div for text */}
      <div className="lg:w-1/2 flex items-center justify-around p-4 ml-10 md:w-[400px] sm-w-[320px]">
    
        <img src={imagecamera} alt="First" className="lg:h-full object-cover lg:w-[500px] -translate-y-16  md:w-[320px] sm:w-[300px] sm:h-[300px]" style={{borderRadius:'48% 52% 49% 51% / 100% 100% 0% 0%'}} />
       
      </div>
      </div>
      <div className='w-screen pl-8 pr-8 '>
      <div className="Text flex justify-between border-t-[1px] border-b-[1px] pt-6 border-gray-300 ">
        <Text title="500K+" dsc="Happy Customers"/>
        <Text title="400K+" dsc="Products"/>
        <Text title="43+" dsc="Worldwide Shop"/>
        <Text title="8+" dsc="winning awards"/>
      </div>
      </div>

    
      
     
    </div>
    <div className="box lg:h-1/3 w-screen flex justify-center mt-16 bg-gray-200  "><div className="contactbox lg:h-full w-4/5 text-center md:h-full sm:h-full " style={{backgroundImage:`url(${lastback})`,backgroundSize:'cover',backgroundPosition:'center'}}>
    <h1 className="lg:text-5xl font-bold mb-4 Font-Nerko text-gray-50 lg:mt-48 md:text-[40px] md:mt-24 sm:mt-12 ">Contact us on provided Links</h1>
   <ul className='flex gap-7 lg:ml-[500px] mt-16 md:ml-[200px] sm:ml-[60px] sm:gap-4'>
    <li><Link to='https://www.facebook.com/anas.amir.7311352'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#eee5e5"} fill={"none"}  className='hover:text-gray-400 sm:h-5 sm:w-5 '>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg></Link></li>
    <li className='sm:h-12'><Link to='https://www.instagram.com/anasparacha223/' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#eee5e5"} fill={"none"} className='hover:text-gray-400 sm:h-5 sm:w-5'>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg></Link></li>
    <li className=''><Link to='https://web.whatsapp.com/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#eee5e5"} fill={"none"} className='hover:text-gray-400 sm:h-5 sm:w-5'>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
</svg></Link></li>
    <li className='sm:h-12'><Link to='https://www.linkedin.com/in/anas-amir-874876265/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#eee5e5" fill="none" className='hover:text-gray-400 sm:h-5 sm:w-5'>
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg></Link></li>
   </ul>
    </div></div>
    
     
    <br />
    <Shopees imagsrc={mancamera} paragraph="Explore Our Exquisite clothing Collections & Shop Now for the Perfect cloths" title="Call to Action"/>
      <br />
      <Footer/>
    </div>
  )
}

export default About
