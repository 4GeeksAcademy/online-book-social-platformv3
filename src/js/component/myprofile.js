import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/myprofile.css";


export const MyProfile = () => {
  return (
    <div className="container">
     
        {/* <div> */}
          {/* <p class="center">
            <em>Hi, Im Laura M.</em>
          </p>
          <img
            src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320377/a-woman-reading-a-book.jpg"
            height="10%"
            width="10%"
            class="center"
            alt="..."
          />
          <p class="alltime-fave">My All Time Favorite Book is....</p> */}
          <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
          <div class="card p-4"> 
          <div class=" image d-flex flex-column justify-content-center align-items-center"> 
          <button class="btn btn-secondary"> 
          <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> 
          <span class="name mt-3">Eleanor Pena</span> 
          <span class="idd">@eleanorpena</span> 
          <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
           <span><i class="fa-solid fa-location-dot"></i></span> 
           </div> 
           <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
           <span class="number">1069 <span class="follow">Followers</span></span> </div> 
           <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> 
           </div> 
           <div class="text mt-3"> 
           <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br></br> Artist/ Creative Director by Day #NFT minting@ with FND night.</span> 
           </div> 
           <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
           <span><i class="fa fa-twitter"></i></span>
           <span><i class="fa-brands fa-facebook fa-bounce"></i></span> 
           <span><i class="fa fa-instagram"></i></span> 
           <span><i class="fa fa-linkedin"></i></span> 
           </div> 
           <div class=" px-2 rounded mt-4 date "> 
           <span class="join">Joined May,2021</span> 
           </div> 
           </div>
            </div>
            
</div>

          <div
            className="card mb-3"
            style={{ maxWidth: "540px" }}
            class="fave-alltime"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://m.media-amazon.com/images/I/61f51awj6ML._AC_UF1000,1000_QL80_.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" placeholder="My Favorite Book is">
                    Richest Man in Babylon
                  </h5>
                  <p className="card-text">
                    A strong lesson from this book is that no matter how small
                    your income is, 10% of it is yours to keep. Grow your purse
                    to fattening. This book is highly practical and the lessons
                    in them are capable of growing anyone's purse if applied. In
                    all, it's a great book. You should find out for yourself.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 1 month ago...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p class="fave-genres">
            These are my favorite book genres and favorite book to match...
          </p>
          <div class="list-group">
            <a
              href="https://www.amazon.com/Arrangement-Robyn-Harding/dp/1471179850/ref=asc_df_1471179850/?tag=hyprod-20&linkCode=df0&hvadid=459559487726&hvpos=&hvnetw=g&hvrand=782308990965822173&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011925&hvtargid=pla-872078274841&psc=1"
              class="list-group-item"
              aria-current="true"
            >
              Romance
            </a>
            <a
              href="https://www.audible.com/pd/Fairy-Tale-Audiobook/B09R62PV4B?source_code=GPAGBSH0508140001&ipRedirectOverride=true&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2gqPog3P0_d2CNtjpoqSEL_7sT6uGMlEMyKqf6dDQQuZDS1IawpRcaAvG9EALw_wcB&gclsrc=aw.ds"
              class="list-group-item"
            >
              Horror
            </a>
            <a
              href="https://www.amazon.com/Family-Across-Street-unputdownable-psychological/dp/1800198272/ref=sr_1_28?hvadid=241916109245&hvdev=c&hvlocphy=9052452&hvnetw=g&hvqmt=e&hvrand=15234794711511266055&hvtargid=kwd-315402524133&hydadcr=22534_10344589&keywords=best+nonfiction&qid=1687438602&sr=8-28"
              class="list-group-item"
            >
              Non Fiction
            </a>
            <a
              href="https://www.amazon.com/Get-Out-Your-Own-Self-Defeating/dp/0399519904/ref=asc_df_0399519904/?tag=hyprod-20&linkCode=df0&hvadid=312049124368&hvpos=&hvnetw=g&hvrand=15327211626945740608&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9052452&hvtargid=pla-536600035619&psc=1&tag=&ref=&adgrpid=61851652213&hvpone=&hvptwo=&hvadid=312049124368&hvpos=&hvnetw=g&hvrand=15327211626945740608&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9052452&hvtargid=pla-536600035619"
              class="list-group-item"
            >
              Self Development
            </a>
            <a
              href="https://www.amazon.com/Higher-Waiting-Tyler-Perry/dp/0812989341/ref=asc_df_0812989341/?tag=hyprod-20&linkCode=df0&hvadid=312064602668&hvpos=&hvnetw=g&hvrand=4448971929507229872&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9052452&hvtargid=pla-395708482557&psc=1"
              class="list-group-item list-group-item-action"
            >
              Biography
            </a>
          </div>
          <p class="book-collection row">
            These are a few books that are a part of my collection...
          </p>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel-slide column"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559563270i/16256798.jpg"
                  height="500"
                  class="image-class"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://books.google.com/books/content?id=sQYqRCIhFAMC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1fNlZ6KPWOf0nRv3eTLr29-HZ5bw&w=1280"
                  height="500"
                  class="image-class"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://books.google.com/books/publisher/content?id=EHiLDQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1FwdKzUlJEm31ppz-huBNucs4JHQ&w=1280"
                  height="500"
                  class="image-class"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div class="card-fave-quote">
            <div class="card-header">
              All time Favorite Quote from a book is....
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
 
  );
};
