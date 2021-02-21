import React from "react"
import { Link } from "react-router-dom"

import '../../common/style/base.css'
import './media.css'
import "./article.css"
import  i709 from './img/709.png'
import beetly from './img/beetly.png'
// import  beetly from './img/beetly.png'

const Article =()=> {
    return (
<main className="main">
 <div className="container">
    <div className="row main-row">
     <div className="col-md-12 col-xs-12 main-box">
     <div className="row sort-row">
     <div className="col-md-6 col-xs-5">
     </div>
      <div className="col-md-6 col-xs-7 main-sort">
      <div className="col-md-4 col-xs-4">
       <p className="sort-name">Сортировать:</p>
       </div>
        <div className="col-md-4 col-xs-4 btn-popular">
       <button className="popular">Популярные</button>
       </div>
       <div className="col-md-4 col-xs-4">
       <button className="new">Новые</button>
       </div>
        </div>
     </div>
     <div className="wrap-block">
       <div className="bl">
     <div className="block"></div>
     </div>
     <div className="art-container">
   <div className="row wrap-main-line">
     
      <div className="col-md-3 col-xs-3 news news-game">
     <div className="main-name">Статьи</div>
      </div>
      <div className="col-md-2 col-xs-2 news">
     <div className="name-noties-box"><div className="name-noties">Все статьи</div></div>
    </div>
    
      <div className="col-md-7 col-xs-7 main-choice-cont">
        <div className="main-dots pagination dots-pagin">
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
            <Link className="is-active" to="/">
              <li></li>
            </Link>
            <Link to="/">
              <li></li>
            </Link>
          </ul>
        </div>
        <div className="pagination slide-arrow">
          <ul>
            <Link className="is-active" to="/"><li> prev </li> </Link>
          <Link to="/"><li>next</li> </Link>
          </ul>
        </div>
      </div>
   </div>
<div className="row game-cards-row">
  
     <div className="game-cards">

          <div className="card">
         <div className="article-img-name">
           <div className="article-img-name__img">
             <div className="article-img-name__img-date color-1">
               <span className="date-number">02</span>
               <span className="date-month">март</span>
             </div>
             <div className="article-img-name__img-image">
               <img src={i709} alt="img"/>
            </div>
           </div>
           <div className="article-img-name__state">
             <div className="article-name">709KG</div>
             <div className="game-ico-box">
               <div className="game-num">24</div>
               <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
               <div className="game-num">21</div>
               <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
             </div>
           </div>
         </div>
         <div className="article-main-name">Что не так с игровой индустрией?</div>
         <div className="article-main-content"><p className="italic">  Я давно порывался написать статью по поводу тенденций в сфере игр и по поводу качества нашей самой большой индустрии.</p>
<p className="norm">К 2015 году накопилось некое количество проблем в играх, о которых стоит поговорить. Интересен тот факт,
  что про эти проблемы знает практически каждый, но при этом никто ничего не делает...</p>
           </div>
          </div>

  <div className="card">
    <div className="article-img-name">
      <div className="article-img-name__img">
        <div className="article-img-name__img-date color-2">
          <span className="date-number">21</span>
          <span className="date-month">март</span>
        </div>
        <div className="article-img-name__img-image">
          <img src={beetly} alt="img"/>
        </div>
      </div>
      <div className="article-img-name__state">
        <div className="article-name">TheBeetly</div>
        <div className="game-ico-box">
          <div className="game-num">24</div>
          <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
          <div className="game-num">21</div>
          <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
      </div>
    </div>
    <div className="article-main-name">Днище морское: рецензия на Raven's Cry</div>
    <div className="article-main-content">
      <p className="italic"> Если подумать, то по-настоящему отвратительных игр существует не так уж и много.</p>
      <p className="norm">Но Raven’s Cry принадлежит к числу исключений. В ней нет практически ничего, чем разработчики могли бы гордиться.</p>
    </div>
    </div>
    
   
 <div className="card">
  <div className="article-img-name">
    <div className="article-img-name__img">
      <div className="article-img-name__img-date color-3">
        <span className="date-number">02</span>
        <span className="date-month">июнь</span>
      </div>
      <div className="article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="article-img-name__state">
      <div className="article-name">RouleRull</div>
      <div className="game-ico-box">
        <div className="game-num">24</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">21</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="article-main-name">Как продать одну игру дважды: рецензия на Cities XXL</div>
  <div className="article-main-content">
    <p className="italic">О Project CARS, наверное, не слышал только ленивый. Впрочем, это и неудивительно.</p>
    <p className="norm">
      Взамен студия дала своим почитателям полный доступ к игре с самого раннего этапа и возможность непосредственно влиять на ход разработки.</p>
  </div>
 </div>

 <div className="card">
  <div className="article-img-name">
    <div className="article-img-name__img">
      <div className="article-img-name__img-date color-4">
        <span className="date-number">14</span>
        <span className="date-month">март</span>
      </div>
      <div className="article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="article-img-name__state">
      <div className="article-name">Андрейка</div>
      <div className="game-ico-box">
        <div className="game-num">24</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">21</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="article-main-name">Совсем не аддон: рецензия на Total War: Attila</div>
  <div className="article-main-content">
    <p className="italic">В некоторых моментах Total War: Attila далеко ушла от своей предшественницы, Rome 2.</p>
    <p className="norm">Эта игра ни в коем случае не дополнение, как может сперва показаться, а самостоятельный проект, действие которого разворачивается в совершенно другой эпохе.</p>
  </div>
 </div>

 <div className="card">
  <div className="article-img-name">
    <div className="article-img-name__img">
      <div className="article-img-name__img-date color-5">
        <span className="date-number">31</span>
        <span className="date-month">июль</span>
      </div>
      <div className="article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="article-img-name__state">
      <div className="article-name">Goldavad</div>
      <div className="game-ico-box">
        <div className="game-num">24</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">21</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="article-main-name">Как продать одну игру дважды: рецензия на Cities XXL</div>
  <div className="article-main-content">
    <p className="italic">В жанре градостроительного симулятора уже давным-давно заправляет одна «главная» серия — SimCity.</p>
    <p className="norm">Если вы знакомы с предыдущими частями Cities, то вам наверняка известно, что основную работу по развитию игры
      проделывает сообщество... внося/....необходимые изменения и расширяя существующий функционал.</p>
  </div>
  </div>

 <div className="card">
  <div className="article-img-name">
    <div className="article-img-name__img">
      <div className="article-img-name__img-date color-6">
        <span className="date-number">14</span>
        <span className="date-month">августа</span>
      </div>
      <div className="article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="article-img-name__state">
      <div className="article-name">709KG</div>
      <div className="game-ico-box">
        <div className="game-num">24</div>
        <div className="dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="game-num">21</div>
        <div className="comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="article-main-name">Что не так с игровой индустрией?</div>
  <div className="article-main-content">
    <p className="italic"> Я давно порывался написать статью по поводу тенденций в сфере игр и по поводу
      качества нашей самой большой индустрии.</p>
    <p className="norm">К 2015 году накопилось некое количество проблем в играх, о которых стоит поговорить. Интересен тот
      факт,
      что
      про эти проблемы знает практически каждый, но при этом никто ничего не делает...</p>
  </div>
</div>

             </div>
       
  </div>
</div>
    </div>
   </div>
   </div>
   </div>
   
</main>


   );
  }
export default Article