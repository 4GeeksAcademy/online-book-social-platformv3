import React from 'react';
import Modal from '../component/modal';

export const BookDiscussions = () => {
  return (
    <div className="DiscussionContainer justify-content-center d-flex flex-column mx-auto w-100">
      <div className="DiscussionsTop justify-content-center d-flex">
        <img className="mr-5 DisIcon" src="https://i.imgur.com/2Epcijr.png" height="100px" width="100px" />
        <div className="DiscussionForms ml-5">
          <h1 className="">Search What People Are Saying</h1>
          <div className="DiscussionDiv">
            <input placeholder="Search titles..." className="rounded-pill search"></input>
            <input placeholder="Search topics..." className="rounded-pill"></input>
          </div>

          <Modal/>

        </div>
      </div>
      <div className="DiscussionsBottom w-75 d-flex justify-content-center">
        <div className="d-flex flex-wrap">
          <div className="UserPost">
            <img src="https://i.imgur.com/pSbtAu2.png" />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

          <div className="UserPost">
            <img src="..." />
            <p>"Post Title"
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

