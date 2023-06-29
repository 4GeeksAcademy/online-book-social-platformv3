import React, {useState} from 'react';

const Card = ({ book }) => {

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <div className="card mb-3" onClick={() => { setShow(true); setItem(item) }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={thumbnail} className="img-fluid rounded-start" alt="Book cover" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.volumeInfo.title}</h5>
                      <p className="card-text">{item.volumeInfo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null; // Add this line if you want to explicitly return null for cases where thumbnail or amount is undefined
        })
      }
    </>
  );
};

export default Card;
