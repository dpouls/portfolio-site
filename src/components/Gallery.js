import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

import s01 from '../assets/images/sunny/home.png'
import s02 from '../assets/images/sunny/discover.png'
import s03 from '../assets/images/sunny/notifications.png'
import s04 from '../assets/images/sunny/profile.png'

import m01 from '../assets/images/moneta/1.png'
import m02 from '../assets/images/moneta/2.png'
import m03 from '../assets/images/moneta/3.png'
import m04 from '../assets/images/moneta/4.png'
import m05 from '../assets/images/moneta/5.png'
import m06 from '../assets/images/moneta/6.png'
import m07 from '../assets/images/moneta/7.png'
import m08 from '../assets/images/moneta/8.png'

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

                    <h3>{obj.caption}</h3>
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