import React from "react"
import { Link } from "react-router-dom"

import '../../common/style/base.css'
import "./article.css"

import article_base from "./article_base";
import ArticleItem from "./ArticleItem";

const Article =()=> {
    return (
 <div className="container">
    <div className="row artc-main-row">
     <div className="col-md-12 col-xs-12 artc-main-box">
     <div className="row artc-sort-row">
     <div className="col-md-6 col-xs-5">
     </div>
      <div className="col-md-6 col-xs-7 artc-main-sort">
      <div className="col-md-4 col-xs-4">
       <p className="artc-sort-name">Сортировать:</p>
       </div>
        <div className="col-md-4 col-xs-4 artc-btn-popular">
       <button className="artc-popular">Популярные</button>
       </div>
       <div className="col-md-4 col-xs-4">
       <button className="artc-new">Новые</button>
       </div>
        </div>
     </div>
     <div className="artc-wrap-block">
       <div className="artc-bl">
     <div className="artc-block"></div>
     </div>
     <div className="artc-art-container">
   <div className="row artc-wrap-main-line">
     
      <div className="col-md-3 col-xs-3 artc-news artc-news-art">
     <div className="artc-main-name">Статьи</div>
      </div>
      <div className="col-md-2 col-xs-2 artc-news">
     <div className="artc-name-noties-box"><div className="artc-name-noties">Все статьи</div></div>
    </div>
    
      <div className="col-md-7 col-xs-7 artc-main-choice-cont">
        <div className="artc-main-dots artc-pagination artc-dots-pagin">
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
            <Link className="artc-is-active" to="/">
              <li></li>
            </Link>
            <Link to="/">
              <li></li>
            </Link>
          </ul>
        </div>
        <div className="artc-pagination artc-slide-arrow">
          <ul>
                        <Link className="artc-is-active" to="/"><li>&lt;</li> </Link>
          <Link to="/"><li>&gt;</li> </Link>
          </ul>
        </div>
      </div>
   </div>
<div className="row artc-art-cards-row">
  
                  <div className="artc-art-cards">
                    



                    {
                    article_base.map(({
                     id,
            date,
    month,
    image,
    s_name,
    share,
    comment,
    name,
    description,
    text,
                    }) =>  (
                      
                      <Link to="../new-pages/new-pages.html" className="artc-art-card" key={id}>
                            <ArticleItem
                          id={id}
                          
            date={date}
    month={month}
    
    
                               image={image}
                        s_name={ s_name}
    share={share}
    comment={comment}
  
   
                                name={name}
                                description={description}
                         text={text}
                            />
                        </Link>
                    ))
                }

          {/* <div className="artc-art-card">
         <div className="artc-article-img-name">
           <div className="artc-article-img-name__img">
             <div className="artc-article-img-name__img-date artc-color-1">
               <span className="artc-date-number">02</span>
               <span className="artc-date-month">март</span>
             </div>
             <div className="artc-article-img-name__img-image">
               <img src={i709} alt="img"/>
            </div>
           </div>
           <div className="artc-article-img-name__state">
             <div className="artc-article-name">709KG</div>
             <div className="artc-art-ico-box">
               <div className="artc-art-num">24</div>
               <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
               <div className="artc-art-num">21</div>
               <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
             </div>
           </div>
         </div>
         <div className="artc-article-main-name">Что не так с игровой индустрией?</div>
         <div className="artc-article-main-content"><p className="artc-italic">  Я давно порывался написать статью по поводу тенденций в сфере игр и по поводу качества нашей самой большой индустрии.</p>
<p className="artc-norm">К 2015 году накопилось некое количество проблем в играх, о которых стоит поговорить. Интересен тот факт,
  что про эти проблемы знает практически каждый, но при этом никто ничего не делает...</p>
           </div>
          </div>

  <div className="artc-art-card">
    <div className="artc-article-img-name">
      <div className="artc-article-img-name__img">
        <div className="artc-article-img-name__img-date artc-color-2">
          <span className="artc-date-number">21</span>
          <span className="artc-date-month">март</span>
        </div>
        <div className="artc-article-img-name__img-image">
          <img src={beetly} alt="img"/>
        </div>
      </div>
      <div className="artc-article-img-name__state">
        <div className="artc-article-name">TheBeetly</div>
        <div className="artc-art-ico-box">
          <div className="artc-art-num">24</div>
          <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
          <div className="artc-art-num">21</div>
          <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
      </div>
    </div>
    <div className="artc-article-main-name">Днище морское: рецензия на Raven's Cry</div>
    <div className="artc-article-main-content">
      <p className="artc-italic"> Если подумать, то по-настоящему отвратительных игр существует не так уж и много.</p>
      <p className="artc-norm">Но Raven’s Cry принадлежит к числу исключений. В ней нет практически ничего, чем разработчики могли бы гордиться.</p>
    </div>
    </div>
    
   
 <div className="artc-art-card">
  <div className="artc-article-img-name">
    <div className="artc-article-img-name__img">
      <div className="artc-article-img-name__img-date artc-color-3">
        <span className="artc-date-number">02</span>
        <span className="artc-date-month">июнь</span>
      </div>
      <div className="artc-article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="artc-article-img-name__state">
      <div className="artc-article-name">RouleRull</div>
      <div className="artc-art-ico-box">
        <div className="artc-art-num">24</div>
        <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="artc-art-num">21</div>
        <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="artc-article-main-name">Как продать одну игру дважды: рецензия на Cities XXL</div>
  <div className="artc-article-main-content">
    <p className="artc-italic">О Project CARS, наверное, не слышал только ленивый. Впрочем, это и неудивительно.</p>
    <p className="artc-norm">
      Взамен студия дала своим почитателям полный доступ к игре с самого раннего этапа и возможность непосредственно влиять на ход разработки.</p>
  </div>
 </div>

 <div className="artc-art-card">
  <div className="artc-article-img-name">
    <div className="artc-article-img-name__img">
      <div className="artc-article-img-name__img-date artc-color-4">
        <span className="artc-date-number">14</span>
        <span className="artc-date-month">март</span>
      </div>
      <div className="artc-article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="artc-article-img-name__state">
      <div className="artc-article-name">Андрейка</div>
      <div className="artc-art-ico-box">
        <div className="artc-art-num">24</div>
        <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="artc-art-num">21</div>
        <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="artc-article-main-name">Совсем не аддон: рецензия на Total War: Attila</div>
  <div className="artc-article-main-content">
    <p className="artc-italic">В некоторых моментах Total War: Attila далеко ушла от своей предшественницы, Rome 2.</p>
    <p className="artc-norm">Эта игра ни в коем случае не дополнение, как может сперва показаться, а самостоятельный проект, действие которого разворачивается в совершенно другой эпохе.</p>
  </div>
 </div>

 <div className="artc-art-card">
  <div className="artc-article-img-name">
    <div className="artc-article-img-name__img">
      <div className="artc-article-img-name__img-date artc-color-5">
        <span className="artc-date-number">31</span>
        <span className="artc-date-month">июль</span>
      </div>
      <div className="artc-article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="artc-article-img-name__state">
      <div className="artc-article-name">Goldavad</div>
      <div className="artc-art-ico-box">
        <div className="artc-art-num">24</div>
        <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="artc-art-num">21</div>
        <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="artc-article-main-name">Как продать одну игру дважды: рецензия на Cities XXL</div>
  <div className="artc-article-main-content">
    <p className="artc-italic">В жанре градостроительного симулятора уже давным-давно заправляет одна «главная» серия — SimCity.</p>
    <p className="artc-norm">Если вы знакомы с предыдущими частями Cities, то вам наверняка известно, что основную работу по развитию игры
      проделывает сообщество... внося/....необходимые изменения и расширяя существующий функционал.</p>
  </div>
  </div>

 <div className="artc-art-card">
  <div className="artc-article-img-name">
    <div className="artc-article-img-name__img">
      <div className="artc-article-img-name__img-date artc-color-6">
        <span className="artc-date-number">14</span>
        <span className="artc-date-month">августа</span>
      </div>
      <div className="artc-article-img-name__img-image">
        <img src={beetly} alt="img"/>
      </div>
    </div>
    <div className="artc-article-img-name__state">
      <div className="artc-article-name">709KG</div>
      <div className="artc-art-ico-box">
        <div className="artc-art-num">24</div>
        <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="artc-art-num">21</div>
        <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
      </div>
    </div>
  </div>
  <div className="artc-article-main-name">Что не так с игровой индустрией?</div>
  <div className="artc-article-main-content">
    <p className="artc-italic"> Я давно порывался написать статью по поводу тенденций в сфере игр и по поводу
      качества нашей самой большой индустрии.</p>
    <p className="artc-norm">К 2015 году накопилось некое количество проблем в играх, о которых стоит поговорить. Интересен тот
      факт,
      что
      про эти проблемы знает практически каждый, но при этом никто ничего не делает...</p>
  </div>
</div> */}

             </div>
       
  </div>
</div>
    </div>
   </div>
   </div>
   </div>
   



   );
  }
export default Article