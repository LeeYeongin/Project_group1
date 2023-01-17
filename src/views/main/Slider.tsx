import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../asset/images/Business.png'
import Banner2 from '../../asset/images/Isometric Illustration 2.png'
import Banner3 from '../../asset/images/Officejob.jpg' 
import Banner4 from '../../asset/images/PremiumVector.jpg' 
import Banner5 from '../../asset/images/Software Program.jpg'

function Slider(){
    return(
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="swipe_container">
                    <div id="box1" className="box">
                        <div>
                            글자
                        </div>
                    <div>
                        <img src={Banner1} alt="" className="b-img"/>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
{/*         
            
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
            </div> */}
        
        </Carousel>
    );
}

export default Slider;