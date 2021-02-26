import React from "react"
import { Link } from "react-router-dom"

import '../../common/style/base.css'
import "./trailer.css"

import trailer_base from "./trailer_base";
import TrailerItem from "./TrailerItem";

const Trailer =()=> {
  return (
      <div className="container">
    <div className="row main-row-tr">
     <div className="col-md-12 col-xs-12 main-box-tr">
 
     
   
     <div className="row sort-row-tr">
     <div className="col-md-6 col-xs-5">
     
     </div>
      <div className="col-md-6 col-xs-7 main-sort-tr">
      <div className="col-md-4 col-xs-4">
       <p className="sort-name-tr">Сортировать:</p>
       </div>
        <div className="col-md-4 col-xs-4 btn-popular-tr">
       <button className="popular-tr">Популярные</button>
       </div>
       <div className="col-md-4 col-xs-4">
       <button className="new-tr">Новые</button>
       </div>
        </div>
     </div>
   

     <div className="wrap-block-tr">
       <div className="bl-tr">
     <div className="block-tr"></div>
     </div>
     <div className="trayler-container-tr">
   <div className="row wrap-main-line-tr">
      <div className="col-md-3 col-xs-3 news-tr news-trail-tr">
     <div className="main-name-tr">Трейлеры</div>
      </div>
      <div className="col-md-1 col-xs-1 news-tr">
     <div className="name-noties-box-tr"><div className="name-noties-tr">Все новости</div></div>
    </div>
      <div className="col-md-6 col-xs-6 main-choice-cont-tr ">
        <div className="main-dots-tr pagination-tr dots-pagin-tr">
            <ul>
              <Link to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
              <Link className="is-active-tr" to="/">
                <li></li>
              </Link>
              <Link to="/">
                <li></li>
              </Link>
            </ul>
        </div>
        <div className="pagination-tr  slide-arrow-tr">
              <ul>
                <Link className="is-active-tr" to="/">
                  <li>
                    &lt;</li> </Link> <Link to="/">
                  <li>&gt;</li>
                </Link>
              </ul>
            </div>
   </div>
   </div>

<div className="row trail-cards-row-tr">
  
                <div className="trail-cards-tr">
                  


                {
                    trailer_base.map(({
                      id,
                      image,
                        name,
                      description,
                         long_text,
            genre,
    category,
                    }) =>  (
                      
                      <Link to="../new-pages/new-pages.html" className="card-trailer-tr" key={id}>
                            <TrailerItem
                                id={id}
                               image={image}
                                name={name}
                          description={description}
                           long_text={long_text}
            genre={genre}
    category={category}
                            />
                        </Link>
                    ))
                }

                  
       
                  

 {/* <Link to="../new-pages/new-pages2.html" className="card-trailer-tr">
         
               <img src={image} alt="no-img"/>
      <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">The Order: 1886 - Новый трейлер</div>
      <div className="descrip-name-tr">Жанр: Action</div>
     
           </div>
</Link>
<Link to="../new-pages/new-pages.html" className="card-trailer-tr">
            
                <img src={trailer_img3} alt="no-img"/>
      <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">FRed Dead Redemption: 
Золото Сэта </div>
      <div className="descrip-name-tr">Жанр: Action</div>
      
            </div>
</Link>
 
            <Link to="../new-pages/new-pages2.html" className="card-trailer-tr">
              <img src={trailer_img4} alt="img"/>
      <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">FineSweeper. Демонстрация игрового процесса</div>
      <div className="descrip-name-tr">Жанр: Action, Pixel</div>
    
            </div>
            </Link>
               <Link to="../new-pages/new-pages.html" className="card-trailer-tr">
              <img src={trailer_img5} alt="img"/>
      <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">Видеодайджест от AM4 
Выпуск /211</div>
      <div className="descrip-name-tr">Жанр: Action, Pixel</div>
      
            </div>
             </Link>
                <Link to="../new-pages/new-pages2.html" className="card-trailer-tr">
              <img src={trailer_img6} alt="img"/>
      <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">Топ 10 лучший сюжет в играх</div>
      <div className="descrip-name-tr">Жанр: Action</div>
      
            </div>
              </Link> */}
         
       </div>
  
</div>


  
    </div>
   </div>
   </div>
        </div>
         </div>
   

    )
  }
export default Trailer