import React from 'react'
import IMacMockup from '../assets/images/imac-mocup.png'
import PlayStoreIcon from '../assets/images/playstore-icon.png'

interface DownloadProps {
	showArriboModal: Function ;
}

export default function DownloadArea({ showArriboModal }: DownloadProps) {
  return (
    <section id="app-download-area" data-scroll-index="5">
        <div className="app-download-bg bg-1"></div>
        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-lg-6 col-md-8">
                    <div className="section-heading">
                        <h5>Choose Your Device Platform</h5>
                        <h2>Get The App on</h2>
                        <p>Get the latest resources for downloading, installing, and updating Arribo. Select your device platform and Use Our app and Enjoy Your Life.</p>
                    </div>
                </div>
                {/* end section heading */}

            </div>
        </div>
        <div className="app-downlod-review">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-7">

                        <div className="download-btns">
                            <button onClick={ () => showArriboModal() } ><img src={PlayStoreIcon} className="img-fluid" alt="" /> Play Store</button>
														<button className="bg" onClick={ () => showArriboModal() }><i className="icofont-brand-apple"></i> App Store</button>
                        </div>

                        <div className="row">

                            <div className="col-md-6 col-6">
                                <div className="app-reviews">
                                    <h6>Reviews</h6>
                                    <div className="rating-number float-left">
                                        <h2>4.5</h2>
                                    </div>
                                    <div className="rating-details float-left">
                                        <p className="m-0"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                        <p className="font-light">125,064 ratings</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-6">
                                <div className="app-reviews">
                                    <h6>Reviews</h6>
                                    <div className="rating-number float-left">
                                        <h2>4.7</h2>
                                    </div>
                                    <div className="rating-details float-left">
                                        <p className="m-0"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></p>
                                        <p className="font-light">125,064 ratings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="app-download-mockup">
            <img src={IMacMockup} className="img-fluid" alt="" />
        </div>
    </section>
  )
}
