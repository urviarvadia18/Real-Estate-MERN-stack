import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import step1 from "../img/step1.png"
import s2 from "../img/s2.png"
import step3 from "../img/step3.png"
import about1 from "../img/about1.jpeg"
import b1 from "../img/b1.jpeg"
import b2 from "../img/b2.jpeg"
import vr1 from "../img/vr1.png"
import vr2 from "../img/vr2.png"
import vr3 from "../img/vr3.png"
import emi1 from "../img/emi1.jpeg"
// import emi1 from "../img/emi1.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/Footer";
export default function Home() {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100) //Monthly interest rate
    const n = parseFloat(tenure); //Loan tenures in months

    if (p > 0 && r > 0 && n > 0) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null)
    }
  }


  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (<>
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block vh w-100  h-70% "
            src={b2}
            alt="First slide"

          />
          <Carousel.Caption>
            {/* top */}
            <div className='banner'>
              <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
                <div className="back-blur">
                  <h1 className='text-slate-1000 font-bold text-3xl lg:text-6xl'>
                    Find your next perfect <br />
                    place with ease
                  </h1><br />
                  <div className='text-slate-700 fs-5 sm:text-sm '>
                   Cant find your ideal nest?
                    <br />
                    Click below to get advance search and filter options
                  </div>
                  <br />
                  <Link
                    to={'/search'}
                    className='fs-5 sm:text-sm text-blue-600 font-bold hover:underline' >
                    Let's get started...
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block vh w-100 "
            src={b1}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* top */}
            <div className='banner'>
              <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                <div className="back-blur">
                  <h1 className='text-slate-1000 font-bold text-3xl lg:text-6xl'>
                    Find your next perfect <br />
                    place with ease
                  </h1><br />
                  <div className='text-slate-700 fs-5 sm:text-sm '>
                    Urban nest is the best place to find your next perfect place to
                    live.
                    <br />
                    We have a wide range of properties for you to choose from.
                  </div>
                  <br />
                  <Link
                    to={'/search'}
                    className='fs-5 sm:text-sm text-blue-600 font-bold hover:underline' >
                    Let's get started...
                  </Link>
                </div>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block vh w-100 "
            src={about1}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* top */}
            <div className='banner'>
              <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                <div className="back-blur">
                  <h1 className='text-slate-1000 font-bold text-3xl lg:text-6xl'>
                    Find your next perfect <br />
                    place with ease
                  </h1><br />
                  <div className='text-slate-700 fs-5 sm:text-sm '>
                    Urban nest is the best place to find your next perfect place to
                    live.
                    <br />
                    We have a wide range of properties for you to choose from.
                  </div>
                  <br />
                  <Link
                    to={'/search'}
                    className='fs-5 sm:text-sm text-blue-600 font-bold hover:underline' >
                    Let's get started...
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      {/* listing results for offer, sale and rent */}


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img

              className="vrbanner "
              src={vr1}
              alt="First slide"

            />
            <Carousel.Caption>
              {/* top */}
              <div className='banner'>
                <div className='flex flex-col gap-6 p-28 px-1 max-w-2xl mx-auto '>

                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img

              className="vrbanner "
              src={vr2}
              alt="First slide"

            />
            <Carousel.Caption>
              {/* top */}
              <div className='banner'>
                <div className='flex flex-col gap-6 p-28 px-1 max-w-2xl mx-auto '>

                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img

              className="vrbanner "
              src={vr3}
              alt="First slide"

            />
            <Carousel.Caption>
              {/* top */}
              <div className='banner'>
                <div className='flex flex-col gap-6 p-28 px-1 max-w-2xl mx-auto '>

                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </div>
      <br></br><br></br>
      <div className="main-step">
        <h1 className='heading'>Book in 3 Easy Steps!</h1><br />
        <div className='stepscontainer'>
          <div className='steps'>
            <img src={step1} height={400} width={600}></img>
            <h2 className='text'>Discover & Secure your place</h2>
            <h4 className='text1'>Choose from a wide range of verified properties</h4>
          </div>
          <div className='steps'>
            <img src={s2} height={400} width={600}></img>
            <h2 className='text'>Complete your application</h2><br />
            <h4 className='text1'>Days of lengthy paperwork are gone. Let us do the heavy lifting for you</h4>
          </div>
          <div className='steps'>
            <img src={step3} height={450} width={600}></img><br /><br />
            <h2 className='text'>Your booking is done</h2><br />
            <h4 className='text1'>Now you can relax, pack your bags, and begin your new journey</h4>
          </div>
        </div>
      </div>
      <br /><br />

      <div className='main-step1'>
        <section className='timeline-landing'>
      
            <h1 className='heading'></h1><br />
            <div className='seesteps'>
              <div className='emiimg'>
                <img src={emi1} height={300} width={800}></img>
              </div>
              <h2 className='heading'>
                EMI Calculator
              </h2>
              <div>
                <label className='heading-text'>
                  Loan Amount:
                </label>
                <br />
                <input type='number' className='text2' placeholder='Enter your loan amount' value={principal} onChange={e => setPrincipal(e.target.value)} />
              </div>
              <br />
              <div>
                <label className='heading-text'>
                  Interest Rate (%):
                </label><br />
                <input type='number' className='text2' placeholder='Interest rate' value={interestRate} onChange={e => setInterestRate(e.target.value)} />
              </div><br />
              <div>
                <label className='heading-text'>
                  Loan Tenure (Months):
                </label><br />
                <input type='number' className='text2' placeholder='Loan tenures' value={tenure} onChange={e => setTenure(e.target.value)} />
              </div><br />
              <button className='emi-calculate-btn' onClick={calculateEMI}>
                Calculate EMI
              </button>
              <br />
              {
                emi !== null && <h1 className='heading-text1'>
                  EMI: {emi}
                </h1>
              }
            </div>
        
        </section>
      </div>
<br></br><br></br>
<div>
<Footer />
</div>

    </div>
  </>
  );
}