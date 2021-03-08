import React,{useState} from 'react'
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import CustomSelect from "../Main/CustomSelect"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../common/style/base.css'
import "./trailer.css"
import trailer_base from "./trailer_base";
import TrailerItem from "./TrailerItem";

const styles = {
  select: {
    width: '100%',
        maxWidth: 450,
            fontSize: 25,        
  },
}
const options = [
     { value: 'all', label: 'Все' },
  { value: 'trailer_action', label: 'Экшен' },
  { value: 'trailer_horror', label: 'Ужасы' },
 { value: 'trailer_fantasy', label: 'Фантастика' },
  { value: 'popular', label: 'Популярные' },
   { value: 'new', label: 'Новые' },
]

const Trailer = () => {
  var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 2,

		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'linear',
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					rows: 2,
					slidesToShow: 1,
					dots: true,
					variableWidth: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

					dots: false,
					rows: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

					dots: false,
					rows: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					dots: false,
					slidesToScroll: 1,
					rows: 1
				}
			}
		]
    }
    
const [selectedCategory, setSelectedCategory] = useState("all")

    const onChangeInput = (value) => {
        setSelectedCategory(value.value)
    }
 
  return (
      <div className="container">
    <div className="row main-row-tr">
     <div className="col-md-12 col-xs-12 main-box-tr">
 
     
   
     <div className="row sort-row-tr">
     <div className="col-md-6 col-xs-5">
     
     <CustomSelect
                    style={styles.select}
                    options={options}
                    defaultValue={options[0]}
                  onChange={onChangeInput}/>
</div>

						<div className="col-md-6 col-xs-7 gam-main-sort">
							<div className="col-md-6 col-xs-6 gam-btn-popular">
								<button  onClick={() => setSelectedCategory("popular")  } className="gam-popular"> Популярные </button>
							</div>
							<div className="col-md-6 col-xs-6">
                                <button onClick={() => setSelectedCategory("new")} className="gam-new"> Новые </button>
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
     <div className="name-noties-box-tr"><div className="name-noties-tr">{selectedCategory}</div></div>
    </div>
      <div className="col-md-6 col-xs-6 main-choice-cont-tr ">
        
       
   </div>
   </div>

<div className="row trail-cards-row-tr">
  
                <div className="trail-cards-tr">
                  <Slider {...settings}>  
                    {(selectedCategory !== "all" && selectedCategory !== "new" && selectedCategory !== "popular")
                      ?
                      trailer_base.filter(item => item.category === selectedCategory 
                    ).map(({
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
               :
               (selectedCategory !== "all") ?
                                                 trailer_base.filter(item => item.genre === selectedCategory 
                                        ).map(({
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
                    )
										)
                  :
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
                    )
										)
               
               
               
               }

         </Slider> 
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