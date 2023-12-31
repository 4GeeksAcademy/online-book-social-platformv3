import React from "react";
import "../../styles/homepage.css";
import { Card, CardGroup, Button, Table } from "react-bootstrap";

export const Home = () => (
  <>
    <div id="carouselExampleCaptions" className="carousel slide carousel-with-border">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=170667a&w=0&k=20&c=qU_DMsr0Lu-nk3Cv5Cm-K4wadNslfyTLyQQFtW34Sdw=" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Books Books Books</h5>
            <p>Make sure to read at least 1 book a month.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://static4.depositphotos.com/1005951/369/i/450/depositphotos_3699706-Books-collection.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Libraries are filling up this summer</h5>
            <p>Recent surge in students filling up libraries as summer break begins.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.squarespace-cdn.com/content/v1/599acb10f7e0abf8e32aa565/1580071691543-8OZ2VXFM55CRWSTCSNJX/DSC_0173-2.jpg?format=2500w" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Read more books.</h5>
            <p>Reading books make you smarter.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="featured-books">
      <h2>Featured Books - </h2>
      <div className="card-scroll-container">
        <CardGroup className="card-group-scroll">
          <Card>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/P/B09Y54MX5W.01._SCLZZZZZZZ_SX500_.jpg" />
            <Card.Body>
              <Card.Text>
                A sensational new novel from the best-selling author of Less Than Zero and Imperial Bedrooms that tracks a group of privileged Los Angeles high school friends as a serial killer strikes across the city.
              </Card.Text>
              <a href="https://www.goodreads.com/en/book/show/60880820" target="" rel="">
                <Button variant="primary">Read More</Button>
              </a>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://www.theyoungfolks.com/wp-content/uploads/2017/08/six-of-crows-770x1156.jpg" />
            <Card.Body>
              <Card.Text>
                A bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . .
              </Card.Text>
              <a href="https://www.goodreads.com/book/show/23437156-six-of-crows" target="" rel="">
                <Button variant="primary">Read More</Button>
              </a>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51ECRZXoGyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
            <Card.Body>
              <Card.Text>
                Legendary storyteller Stephen King goes deep into the well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for their world or ours.
              </Card.Text>
              <a href="https://www.goodreads.com/book/show/60177373-fairy-tale" target="" rel="">
                <Button variant="primary">Read More</Button>
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1683033503i/62687857.jpg" />
            <Card.Body>
              <Card.Text>
                From the New York Times–bestselling author of Cutting for Stone comes a stunning and magisterial new epic of love, faith, and medicine, set in Kerala and following three generations of a family seeking the answers to a strange secret.
              </Card.Text>
              <a href="https://www.goodreads.com/book/show/62687857-the-covenant-of-water" target="" rel="">
                <Button variant="primary">Read More</Button>
              </a>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>

    <div className="table-container">
      <h2>Upcoming Book Releases -</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Book Cover</th>
            <th>Book Description</th>
            <th>Author</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://www.booklistqueen.com/wp-content/uploads/everyone-here-is-lying-shari-lapena-200x300.jpg" alt="Book Cover" className="book-image" /></td>
            <td>A girl goes missing hours after a fight with her father and all the neighbors want to spill the beans, but not all are telling the truth.</td>
            <td>Shari Lapena</td>
            <td>July 25, 2023</td>
          </tr>
          <tr>
            <td><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781368099370_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="Book Cover" className="book-image" /></td>
            <td>The original heroes from The Lightning Thief are reunited for their biggest challenge yet: 
              getting Percy to college when the gods are standing in his way. 
              After saving the world multiple times, Percy Jackson is hoping to have a normal senior year. 
              Unfortunately, the gods aren't quite done with him. Percy will have to fulfill three quests in order to get the necessary three letters of 
              recommendation from Mount Olympus for college.</td>
            <td>Rick Riordan</td>
            <td> September 26, 2023</td>
          </tr>
          <tr>
            <td><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781957568485_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="Book Cover" className="book-image" /></td>
            <td>A great primal power has risen. The Queen of Flesh and Fire has become the Primal of Blood and Bone-the true Primal of Life and Death. 
              And the battle Casteel, Poppy, and their allies have been fighting has only just begun. 
              Gods are awakening across Iliseeum and the mortal realm, readying for the war to come.</td>
            <td>Jennifer L. Armentrout</td>
            <td>July 18, 2023</td>
          </tr>
          <tr>
            <td><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781668034071_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" alt="Book Cover" className="book-image" /></td>
            <td>Simultaneously, a team of Russian mercenaries has been dispatched by the Kremlin to loot truckloads of art and priceless cultural treasures hidden away in a host of churches, museums, and private homes.
                When multiple American aid workers are killed, America’s top spy is sent in to settle the score. 
                But in a country almost the size of Texas, will Harvath be able to find the men in question and, more importantly, 
                will he be able to stop them before they can kill again?</td>
            <td>Brad Thor</td>
            <td>July 25, 2023</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </>
);

export default Home;