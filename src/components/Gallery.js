import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navbar from './Navbar';

import img1 from '../images/library.jpg';
import img2 from '../images/office.jpg';
import img3 from '../images/mountain.jpg';
import img4 from '../images/eve-view-mountain2.jpg';
import img5 from '../images/mountain1.jpg';
import img6 from '../images/office1.jpg';
import img7 from '../images/scenerio.jpg';
import img8 from '../images/palmtree-view.jpg';
import img9 from '../images/eve-view.jpg';
import img10 from '../images/water-stone.jpg';
import img11 from '../images/fire-camp.jpg';
import img12 from '../images/scenerio1.jpg';
import Footer from './Footer';
import IntroDesign from './IntroDesign';

export default function WovenImageList() {
    return (
        <>
            <Navbar />
            <div className='text--gallery'>
                <h2>Gallery</h2>
            </div>
            <div>
                <IntroDesign />
            </div>
            <div className='mt-3 two'>
                <ImageList sx={{ width: "100%" }} variant="woven" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}

const itemData = [
    {
        img: img1,
        title: 'library',
    },
    {
        img: img2,
        title: 'office',
    },
    {
        img: img3,
        title: 'mountain',
    },
    {
        img: img4,
        title: 'eve-view-mountain',
    },
    {
        img: img5,
        title: 'mountain1',
    },
    {
        img: img6,
        title: 'office1',
    },
    {
        img: img7,
        title: 'scenerio',
    },
    {
        img: img8,
        title: 'palmtree-view',
    },
    {
        img: img9,
        title: 'eve-view',
    },
    {
        img: img10,
        title: 'water-stone',
    },
    {
        img: img11,
        title: 'fire-camp',
    },
    {
        img: img12,
        title: 'scenerio1',
    },
];
