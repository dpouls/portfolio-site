import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

import s01 from '../assets/images/sunny/home.jpg'
import s02 from '../assets/images/sunny/discover.jpg'
import s03 from '../assets/images/sunny/notifications.jpg'
import s04 from '../assets/images/sunny/profile.jpg'

import m01 from '../assets/images/moneta/1.jpg'
import m02 from '../assets/images/moneta/2.jpg'
import m03 from '../assets/images/moneta/3.jpg'
import m04 from '../assets/images/moneta/4.jpg'
import m05 from '../assets/images/moneta/5.jpg'
import m06 from '../assets/images/moneta/6.jpg'
import m07 from '../assets/images/moneta/7.jpg'
import m08 from '../assets/images/moneta/8.jpg'
const moneta = 'http://moneta.guru'
const dallinpoulson = 'http://dallinpoulson.com'
const sunnyImages = [
    {
      id: '1',
      source: s01,
      caption: 'Home Page',
    },
    {
        id: '2',
        source: s02,
        caption: 'Discover Page',
      },{
        id: '3',
        source: s03,
        caption: 'Notifications Page',
      },{
        id: '4',
        source: s04,
        caption: 'Profile Page',
      },
  ]
  const monetaImages = [
    {
      id: '1',
      source: m01,
      caption: 'Checkout',
    },
    {
        id: '2',
        source: m02,
        caption: 'Payment Page',
      },{
        id: '3',
        source: m03,
        caption: 'Receipt Page',
      },{
        id: '4',
        source: m04,
        caption: 'Customer Database',
      },{
        id: '5',
        source: m05,
        caption: 'Admin Controls',
      },{
        id: '6',
        source: m06,
        caption: 'Manage Products',
      },{
        id: '7',
        source: m07,
        caption: 'Delete Employee',
      },{
        id: '8',
        source: m08,
        caption: 'Login',
      }
  ]

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0,
            selectedImages: null
        };
        
        this.toggleLightbox = this.toggleLightbox.bind(this);
    }
    toggleLightbox(selectedIndex) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        }));
    }
    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.source}
                        onClick={e => {
                            console.log(obj)
                            e.preventDefault();
                            this.toggleLightbox(i);
                            if(obj.caption === 'Sunny'){
                                this.setState({selectedImages: sunnyImages})
                            } else if(obj.caption === 'Moneta'){
                                this.setState({selectedImages: monetaImages})
                            }
                            
                        }}
                    >
                        <img src={obj.thumbnail} />
                    </a>

                   <a target="_blank"  href="http://dallinpoulson.com"><h3>{obj.caption}</h3></a> 
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen,selectedImages } = this.state;

        return (
            <div>
                {this.renderGallery(images)}
                <ModalGateway>
                    {lightboxIsOpen && (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel currentIndex={0} views={selectedImages} />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;