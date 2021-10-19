import React from 'react'
import { Link } from 'react-router-dom'
import './HomeSection.css'
import photographer from '../../assets/camboy.svg'
import Button from '../../ui/button/Button'
import  car from '../../assets/car.svg'
import  pillartent from '../../assets/pillartent.svg'
import bridge from '../../assets/bridge.svg'
import southy from '../../assets/southy.svg'
import morocco from '../../assets/morocco.svg'
import mauritius from '../../assets/mauritius.svg'
import food from '../../assets/food.svg'
import flight from '../../assets/flight.svg'
import hotel from '../../assets/hotel.svg'
import Card from '../../ui/card/Card'

function HomeSection() {

       const destinations =[
              {
                     image: `${car}`,
                     country: "Kenya",
                     price: "$1455.99"
              },
              {
                     image:  `${pillartent}`,
                     country: "Ghana",
                     price: "$1455.99"
              },
              {
                     image: `${bridge}`,
                     country: "Nigeria",
                     price: "$2150.99"
              },
              {
                     image: `${southy}`,
                     country: "South Africa",
                     price: "$1600.99"
              },
              {
                     image: `${mauritius}`,
                     country: "Mauritius",
                     price: "$16005.99"
              },
              {
                     image: `${morocco}`,
                     country: "Morrocc",
                     price: "$1780.99"
              },
       ]
       
       return (
              <section className= "home-section">
                     <div className="home-section__container">
                            <div className="home-section__embark">
                                   <div className="home-section__embark--img">
                                          <img src={photographer} alt="Photographer" />
                                   </div>
                                   <div className="home-section__embark--text">
                                          <h2>Digital bank for frequent travellers</h2>
                                          <p>Safiri works as the digital bank for frequent travellers.  From the point ofo knowing the kind of funds to set aside, to making payments for flight, food, hotel bookings, airtime and data, Sfiri takes care of al your financial worries.  <br/>  You will be issued avirtual dollar MasterCard to cater for all your internatioal transactions, we will also offer you. the unique opportunity to get an emergency travel loan when you overspend during your trip.  <br/>
                                          Beyond this, we nsure you remain financially intelligent by giving you real time analysis of your spendings so far. </p>
                                          <Button backgroundColor = '#0692C4' text = 'Get Started'  borderColor = '#0692C4'  borderRadius = '4px'
                                          extraStyle ={{
                                                 height: '55px' , 
                                                 width: '162px',
                                                 fontSize : '18px',
                                          }}
                                          />
                                   </div>
                            </div>
                            <div className="home-section__available">
                                          <div className="home-section__available--text">
                                                 <h1>Available Travel Packages</h1>
                                                 <Link to = '/'>See More</Link>
                                          </div>
                                          <div className="home-section__tour">
                                          {
                                                 destinations.map((destination) => 
                                                 <Card className = "home-section__destination">
                                                        <img src= {destination.image} alt="img" />
                                                        <div className="home-section__destination--rate">
                                                               <p>{destination.country}</p>
                                                               <p>{destination.price}</p>
                                                        </div>
                                                        <div className="home-section__destination--flight">
                                                               <span><img src={flight} alt="flight" /><p>Flight: $873(2-way)</p></span>
                                                               <span><img src={hotel} alt="hotel" /><p>Hotel: $242( Per Night)</p></span>
                                                               <span><img src={food} alt="food" /><p>Food: $43(Per meal)</p></span>
                                                        </div>
                                                        <Button  text ="SELECT" borderColor="#222428" textColor ="#0692C4" borderRadius ="4px"
                                                                      extraStyle = {{
                                                                             height: "4rem", width: "12rem",
                                                                             cursor: "pointer",
                                                                             float: "left",
                                                                             marginLeft: "2.5rem"
                                                                             
                                                                      }} />
                                                        
                                                 </Card>
                                                 )
                                          }
                                          </div>
                            </div>
                     </div>
              </section>
       )
}

export default HomeSection
