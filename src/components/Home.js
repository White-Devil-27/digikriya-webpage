import React from 'react';
import Card from './Card';
import Footer from './Footer';
import ImageContent from './ImageContent';
import Navbar from './Navbar';

export default function Home() {
    return (
        <main>
            <Navbar />
            <ImageContent />
            <Card />
            <Footer />
        </main>
    )
};