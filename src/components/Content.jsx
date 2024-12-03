import React from 'react'
import '../components/Content.css'
import Header from './Header'
import Product from '../components/Product'
import Footer from './Footer'


function Content() {
    return (
        <div>
            <Header />
            <div className="contents">
                <div className="imp">
                        <h1>Unveil the Elegance of Korean Fashion</h1>
                        <p>
                            Step into a world where tradition meets modernity, and every piece tells a story of culture, art, and innovation.
                            From the iconic elegance of the hanbok to the cutting-edge designs of today’s Korean street style, our collection showcases the best of Korean fashion.
                            Whether you're looking for timeless classics or the latest trends, we bring you exclusive collections that blend style, sophistication, and comfort.
                            Explore our curated selection and discover how Korean fashion is transforming the global fashion landscape. Your journey into the world of style starts right here, with SeoulStyle.
                        </p>
                        <button class="button"><a href="/login"><span>Get Started </span></a></button>
                </div>
            </div>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Content