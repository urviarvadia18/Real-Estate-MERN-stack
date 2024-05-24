import React from 'react'
import about from '../img/about.jpg'
import au1 from '../img/au1.jpg'
import au2 from '../img/au2.jpg'
import au3 from '../img/au3.jpg'
// import user from '../image/user.jpg'
import './index1.css';


export default function About() {
  return (
    <>
    <div>
      <div
        style={{
          backgroundColor: 'rgb(231 229 228)',
          width: '1700px',
          height: '400px'
        }}
      >
        <div className='special1'>
          <h1 className='text-5xl font-bold mb-4 text-slate-800'>The Best Real Estate Out There</h1>
        </div>
        <div className='special2'>
          <h3 className='text-xl  mb-3 text-slate-800'>Welcome to Urban Nest, where excellence in real estate services meets the personalized touch you deserve.We have established ourselves as a trusted partner for all your real estate needs.</h3>
        </div>
      </div>
    </div>
  
    <div className="py-10 px-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 ">Explore the Luxury</h1>
      <div className='special3'>
          <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-10">Tax Advantage</h4>
          <p className="text-gray-600">Return on Investment Deployment and seed round supply chain.Marketing Business</p>
          <br/>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Affortable Pricing</h4>
          <p className="text-gray-600">Return on Investment Deployment and seed round supply chain.Marketing Business</p>
          <br/>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Good Facalities</h4>
          <p className="text-gray-600">Return on Investment Deployment and seed round supply chain.Marketing Business</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="bg-white shadow-md p-2">
          <img src={about} alt="House 1" className="w-full h-400 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Owning a home is a keystone of wealth, both financial affluence and emotional security.</h2>
          <p className="text-gray-600"></p>
       </div> 
     </div>
    </div>
    
    

    <div className="py-8 max-w-screen-lg mx-auto ">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Meet our Family</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md p-9">
          <img src={au1} alt="House 1" className="w-full h-60 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Naveen Rao</h2>
          <p className="text-gray-600">Founder</p>
        </div>
        <div className="bg-white  shadow-md p-9">
          <img src={au2} alt="House 2" className="w-full h-60 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Deva Reddy</h2>
          <p className="text-gray-600">Director</p>
        </div>
        <div className="bg-white shadow-md p-9">
          <img src={au3} alt="House 2" className="w-full h-60 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Aadhya Devi</h2>
          <p className="text-gray-600">Software Devloper</p>
        </div>
    </div>

    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frequently Asked Questions</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className="wrapper">
          <p></p><br/><br/>
          <h1 font-bold className='text-3xl font-bold text-gray-900 mb-6'>Frequently Asked Questions</h1>
          <div className="faq">
            <button className="accordion">
            What is the first step in buying a home?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              The absolute first step for your client is to get approved for a mortgage. 
              Without being approved for a mortgage it will be quite difficult, if not impossible, to purchase a new home. 
              If a potential client reaches out to you, have them go through the tenant screening process and then guide 
              them to a reputable mortgage corporation and advisor that you trust.
            </p>
            </div>
          </div>
          <div className="faq">
            <button className="accordion">
            How long will it take to sell my home?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              Once the house is on the market, it may take anywhere from four to six weeks to sell
              . However, if the market is fairly hot, a seller could see their house off the market within a week. 
              On the flip side, if there is a lull in the market or issues arise such as negotiation, lack of exposure, 
              or house conditions then the property can sit on the market for months.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="accordion">
            What is the selling price of my home?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              The selling price of a house fluctuates depending on multiple factors. 
              The most common ones are the neighborhood and what similar-sized houses are currently selling for.
               Also, look at the age and condition. Do major repairs need to be done? If so, that might lower the property.
                And again, the market matters. Like everything else, home prices vary depending on supply and demand.
                 Your job as a realtor is to best inform your clients about these different factors and accurately list their house.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="accordion">
            Is there a reason my home assessed value differs compared to the market value?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              A public tax assessor gives the assessed value for a property. 
              This assessment typically occurs yearly for taxation purposes. 
              The fair market value is an agreed-upon price between a willing buyer and seller. 
              There is usually a difference between the assessed value and market value. 
              For homeowners, the assessed value is a double-edged sword. Because, if their annual assessed value increased then their yearly taxes will also be raised.
               On the flip side, when selling a house it can help boost its market value.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="accordion">
            Should I do a final walk-through?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              A final walk-through is not required but highly recommended. 
              Final walk-throughs give buyers a chance to make sure nothing has changed since their initial inspection or previous visits.
               Also, if repairs were requested as part of the sale offer then a follow-up visit ensures all repairs are done according to the agreement and contract.
              </p>
            </div>
          </div>
          <div className="faq">
            <button className="accordion">
            How many houses should I view before purchasing one?
              <i className="fa-solid fa-chevron-down" />
            </button>
            <div className="pannel">
              <p>
              The number of houses your client wants to view can depend greatly.
               However, it is much easier today to connect with your clients virtually.
                You can now see houses online by taking virtual tours or seeing detailed photographs.
                 So, you can help your client by giving them access to your online systems so that they can view as many properties as they desire. Once a list is narrowed down,
                  you can visit properties with them or on their behalf.
              </p>
            </div>
          </div>
        </div>
    </div>   
 </div>
 </>
)
}
      
