import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../Asset/images/Business.png'
import Banner2 from '../Asset/images/Isometric Illustration 2.png'
import Banner3 from '../Asset/images/Officejob.jpg' 
import Banner4 from '../Asset/images/PremiumVector.jpg' 
import Banner5 from '../Asset/images/Software Program.jpg'

function Slider(){
    return(
        <Carousel>
            <Carousel.Item interval={1000}>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"/>

            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <div className="swipe_container">
            <div id="box1" className="box">
                <div>
                    글자
                </div>
                <div>
                    <img src={Banner1} alt="" className="b-img"/>
                </div>
            </div>
            <div id="box2" className="box">
                <div>
                    글자
                </div>
                <div>
                    <img src={Banner2} alt="" className="b-img"/>
                </div>
            </div>
            <div id="box3" className="box">
                <div>
                    글자
                </div>
                <div>
                    <img src={Banner3}alt="" className="b-img"/>
                </div>
            </div>
            <div id="box4" className="box">
                <div>
                    글자
                </div>
                <div>
                    <img src={Banner4} alt="" className="b-img"/>
                </div>
            </div>
            <div id="box5" className="box">
                <div>
                    글자
                </div>
                <div>
                    <img src={Banner5} alt="" className="b-img"/>
                </div>
            </div>
        </div>
        </Carousel>
    );
}

export default Slider;