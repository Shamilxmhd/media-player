import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container'>
      <div className="row align-items-center m-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities</p>
          <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>

        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" />
        </div>
      </div>
      <div className="features">
        <h3 className='text-center'></h3>
        <div className='cards mt-5 d-flex justify-content-between'>
          {/*card1 */}
          <Card style={{ width: '20rem', }}>
            <Card.Img style={{backgroundColor:'black'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
            <Card.Body>

              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                User can upload view and remove the videos.
              </Card.Text>
            </Card.Body>
          </Card>

          {/*card2*/}
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.filmmakersacademy.com/wp-content/uploads/2018/09/music.gif" />
            <Card.Body>

              <Card.Title>Catogorize Videos</Card.Title>
              <Card.Text>
                User can catogorize the videos according to  their preferences using drag and drop features.
              </Card.Text>
            </Card.Body>
          </Card>

          {/*card3 */}
          <Card style={{ width: '20rem' }}>
            <Card.Img style={{ height: '420px' }} variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User are able to see the history of watched videos.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className="mt-5 border rounded d-flex align-items-center p-5">
        <div className="col-lg-5">
          <h3 className='text-warning mt-5'>Simple, Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis fugiat commodi mollitia provident neque dicta deleniti exercitationem quod dignissimos. Minima consequuntur perferendis repellat necessitatibus voluptatibus repellendus, voluptate illum eveniet!</p>
          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis fugiat commodi mollitia provident neque dicta deleniti exercitationem quod dignissimos. Minima consequuntur perferendis repellat necessitatibus voluptatibus repellendus, voluptate illum eveniet!</p>
          <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quis fugiat commodi mollitia provident neque dicta deleniti exercitationem quod dignissimos. Minima consequuntur perferendis repellat necessitatibus voluptatibus repellendus, voluptate illum eveniet!</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  )
}

export default LandingPage