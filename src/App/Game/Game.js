
import React from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../../common/style/base.css'
import "./game.css"
import game_base from "./game_base";
import GameItem from "./GameItem";

const Game =()=> {
    return (

 <div className="container">
    <div className="row gam-main-row">
     <div className="col-md-12 col-xs-12 gam-main-box">
        <div className="row gam-sort-row">
             <div className="col-md-6 col-xs-5">

     </div>
            <div className="col-md-6 col-xs-7 gam-main-sort">
             <div className="col-md-4 col-xs-4">
       <p className="gam-sort-name">Сортировать:</p>
       </div>
              <div className="col-md-4 col-xs-4 gam-btn-popular">
       <button className="gam-popular">Популярные</button>
       </div>
              <div className="col-md-4 col-xs-4">
       <button className="gam-new">Новые</button>
       </div>
              </div>
         </div>
         <div className="gam-wrap-block">
       <div className="gam-bl">
     <div className="gam-block"></div>
     </div>
     <div className="gam-game-container">
   <div className="row gam-wrap-main-line">
      <div className="col-md-2 col-xs-2 gam-news gam-news-game">
     <div className="gam-main-name">Игры</div>
      </div>
      <div className="col-md-1 col-xs-1 gam-news">
     <div className="gam-name-noties-box"><div className="gam-name-noties">Все новости</div></div>
    </div>
       <div className="col-md-7 col-xs-7 gam-main-choice-cont">
         <div className="gam-main-dots gam-pagination gam-dots-pagin">
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
             <Link className="gam-is-active" to="/">
               <li></li>
             </Link>
             <Link to="/">
               <li></li>
             </Link>
           </ul>
         </div>
         <div className="gam-pagination gam-slide-arrow">
           <ul>
             <Link className="gam-is-active" to="/">
               <li>
                 &lt;</li> </Link> <Link to="/">
               <li>&gt;</li>
             </Link>
           </ul>
         </div>
       </div>
   </div>

<div className="row gam-game-cards-row">
                  <div className="gam-game-cards">
                    
 {
                    game_base.map(({
                      id,
    image,
                      name,
                      description,
    s_description,

                      text,
    share,
                      comment,
    reiting,
                    }) =>  (
                      
                      <Link to="../new-pages/new-pages.html" className="gam-card-game" key={id}>
                            <GameItem
                          id={id}
                          image={image}
                          name={name}
                          description={description}
                           s_description={s_description}
                         text={text}
                        
    share={share}
                          comment={comment}
                          reiting={reiting}
  
   
                                
                            />
                        </Link>
                    ))
                }







        {/* <Link to="/newpages" className="gam-card-game">
                      <img src={main_img1} alt="img"/>
      <div className="gam-game-cont-box">
       
        <div className="gam-game-rating">8.2</div>
      <div className="gam-game-name">Evolve</div>
      <div className="gam-descrip-name">PC, PS4, <span className="gam-descrip-name-green">Xbox One</span></div>
      <div className="gam-game-text">Добыча полезных ископаемых на некой планете, похожей на землю, прекращается из-за вмешательства представителей местной фауны. Причем терроризировать буровую установку и рабочих стало что-то очень большое, невиданное ранее.</div>
      <div className="gam-game-ico-box">
        <div className="gam-game-num">24</div>
        <div className="gam-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="gam-game-num">21</div>
        <div className="gam-comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
          
 </div>
</Link>
            <Link to="/newpages" className="gam-card-game">
                          <img src={main_img2}  alt="img" />
      <div className="gam-game-cont-box">
        <div className="gam-game-rating">9.5</div>
      <div className="gam-game-name">Dragon Age: Inquisition</div>
      <div className="gam-descrip-name">PC, PS4, <span className="gam-descrip-name-green">Xbox One,</span> PS3,<span className="descrip-name-green"> Xbox 360</span></div>
      <div className="gam-game-text">Когда небеса буквально развернутся над смертными, на землю ступит хаос. Тедас и так является землей раздора, где постоянно бушует война, поглощающая все больше жизней. Теперь на ее счету будут и души, поскольку демоны и их приспешники уже...</div>
      <div className="gam-game-ico-box">
        <div className="gam-game-num">94</div>
        <div className="gam-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="gam-game-num">57</div>
        <div className="gam-comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
           </div>
</Link>

           <Link to="/newpages" className="gam-card-game">
                <img src={main_img3}  alt="img"/>
      <div className="gam-game-cont-box">
        <div className="gam-game-rating">9.9</div>
      <div className="gam-game-name">Grand Theft Auto 5</div>
      <div className="gam-descrip-name">PC, PS4, <span className="gam-descrip-name-green"> Xbox One,</span> PS3, <span className="descrip-name-green">Xbox 360</span></div>
      <div className="gam-game-text">По сравнению с предыдущими играми серии в Grand Theft Auto 5 куда больше всякого рода «настроек» и вариантов кастомизации. Заметно преобразилась боевая система, а горожане теперь могут вызывать полицию. В пятой части мы сможем ходить на йогу, кататься на мотоциклах и играть в гольф.</div>
      <div className="gam-game-ico-box">
        <div className="gam-game-num">74</div>
        <div className="gam-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="gam-game-num">41</div>
        <div className="gam-comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
            </div>
</Link>
 
             <Link to="/newpages" className="gam-card-game">
              <img src={main_img4}  alt="img"/>
      <div className="gam-game-cont-box">
        <div className="gam-game-rating">7.9</div>
      <div className="gam-game-name">Dying Light</div>
      <div className="gam-descrip-name">PC, PS4, <span className="gam-descrip-name-green">Xbox One</span></div>
      <div className="gam-game-text">Dying Light – триллер от первого лица, события которого происходят на просторах огромного и опасного мира. В течение светового дня вам предстоит путешествовать по руинам городов, разыскивать припасы, создавать оружие. Ночью же охотники превращаются в добычу, ведь это времякогда на улицах господствуют жертвы эпидемии.</div>
      <div className="gam-game-ico-box">
        <div className="gam-game-num">74</div>
        <div className="gam-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="gam-game-num">41</div>
        <div className="gam-comment-ico"><i className="far fa-comment-alt"></i></div>
          </div>
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
export default Game
 