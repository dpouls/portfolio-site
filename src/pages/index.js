import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from './../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'


import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'


const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Sunny',
    description: 'Personal Project. Instagram clone to post the photos of sunsets that you have taken.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Moneta',
    description: 'Group project. Point-Of-Sale system made to adapt to any small business.',
  }
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Dallin Poulson'
    const siteDescription = 'Portfolio for Dallin Poulson, Web Developer.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>ABOUT ME</h2>
            </header>
            <p>
              I am a Full Stack Web Developer. I have a passion for problem
              solving and enjoy the process of seeing a project come together.
              My background as a developer began with a 13 week fully immersive
              coding bootcamp through DevMountain in Lehi, UT. With that time I
              was able to build my first projects, both on my own and in a group
              environment.
            </p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />


          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>I'd love to work with you! I usually respond within 24 hours.</p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    {/* 1234 Somewhere Rd.<br /> */}
                    Orem, UT 84653
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    385-200-4172
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">dallinpoulson@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
