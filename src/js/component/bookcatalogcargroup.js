import React, { useState } from 'react';

const CardGroup = ({ book }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked card
    }
  };

  return (
    <div className="card-group-container2">
      <div className="card-container2">
        <div className="card-group2">
          {book.map((item, index) => {
            const thumbnail =
              item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            const isExpanded = index === expandedIndex;

            if (thumbnail !== undefined && amount !== undefined) {
              return (
                <div className="card2" key={index} onClick={() => handleExpandToggle(index)}>
                  <img
                    src={thumbnail}
                    className="img-fluid rounded-start thumbnailpic"
                    alt="Book cover"
                  />
                  <div className="card-body2">
                    <h5 className="card-title2">{item.volumeInfo.title}</h5>
                    <p className={`card-text2 ${isExpanded ? 'expanded' : ''}`}>
                      {isExpanded
                        ? item.volumeInfo.description
                        : `${item.volumeInfo.description.slice(0, 100)}...`}
                    </p>
                    <button className="expand-btn" onClick={() => handleExpandToggle(index)}>
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
