import React from 'react';
import Modal from '../component/modal';
import { useContext } from 'react'; 
import { Context } from "../store/appContext";

export const BookDiscussions = () => {
  const{store, actions} = useContext(Context)
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
          {store.dummydata.map((discussion, index) => {
            let user=store.users.filter((user) => user.id == discussion.UserID)
            console.log(user)
            return(
              <div className="UserPost" key={index}>
               <img src={user[0].profileImage}/>
               <p>{discussion.Title}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
};

