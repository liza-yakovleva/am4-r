import React from "react";
import "./slider.css"
import '../../common/style/base.css'
import '../../common/style/media.css'
import slider_inf_img1 from '../img/slider-inf-img1.png'
import slider_inf_img2 from '../img/slider-inf-img2.png'
import slider_inf_img3 from '../img/slider-inf-img3.png'
import slider_inf_img4 from '../img/slider-inf-img4.png'
import slider_inf_img5 from '../img/slider-inf-img5.png'
import slider_inf_img6 from '../img/slider-inf-img6.png'
const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row slider-row">
          <div className="col-md-12 col-xs-12">
            <div className="slider-information-wrap">
              <div className="information-img-box">
                <div className="slider-inf-img slider-inf-img1">
                  <img
                    src={slider_inf_img1}
                    className="slider-img"
                    alt="no-image"
                  />
                </div>
                <div className="slider-inf-img">
                  <img
                    
                    src={slider_inf_img2}
                    className="slider-img"
                    alt="no-image"
                  />
                </div>
                <div className="slider-inf-img">
                  <img
                    src={slider_inf_img3}
                    className="slider-img"
                    alt="no-image"
                  ></img>
                </div>
              </div>
              <div className="information-img-box">
                <div className="slider-information">
                  <div className="inf-name">
                    Ненавязчивый анализ Mirror’s Edge
                  </div>
                  <div className="inf-text">
                    Ещё совсем недавно осень считалась главным поставщиком
                    крупных игровых релизов. Полки магазинов ломились от
                    новинок, а от покупателей не было отбоя. Доходило до того,
                    что к концу сезона кошельки походили на выпотрошенные туши.
                  </div>
                </div>
                <div className="information-img-box2">
                  <div className="slider-inf-img  slider-inf-img4">
                    <img
                      src={slider_inf_img4}
                      className="slider-img"
                      alt="no-image"
                    ></img>
                  </div>
                  <div className="slider-inf-img slider-inf-img5">
                    <img
                      src={slider_inf_img5}
                      alt="no-image"
                      className="slider-img"
                    ></img>
                  </div>
                  <div className="slider-inf-img slider-inf-img6">
                    <img
                      src={slider_inf_img6}
                      className="slider-img"
                      alt="no-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slider