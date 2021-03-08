import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CustomSelect from "../Main/CustomSelect"
import '../../common/style/base.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './article.css';
import article_base from './article_base';
import ArticleItem from './ArticleItem';

const styles = {
  select: {
    width: '100%',
        maxWidth: 450,
            fontSize: 25,
   
         
  },
}
const options = [
     { value: 'all', label: 'Все' },
  { value: 'article_serials', label: 'О сериалах' },
  { value: 'article_film', label: 'О фильмах' },
 { value: 'article_game', label: 'О играх' },
  { value: 'popular', label: 'Популярные' },
   { value: 'new', label: 'Новые' },
]



const Article = () => {
  var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 2,

		// autoplay: true,
		// autoplaySpeed: 8000,
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
			<div className="row artc-main-row">
				<div className="col-md-12 col-xs-12 artc-main-box">
					<div className="row artc-sort-row">
						<div className="col-md-6 col-xs-5 main-choice-cont">
					<CustomSelect
                    style={styles.select}
                    options={options}
                    defaultValue={options[0]}
                  onChange={onChangeInput}/>
</div>

						<div className="col-md-6 col-xs-7 artc-main-sort">
							<div className="col-md-6 col-xs-6 artc-btn-popular">
								<button  onClick={() => setSelectedCategory("popular")  } className="artc-popular"> Популярные </button>
							</div>
							<div className="col-md-6 col-xs-6 artc-btn-new">
                                <button onClick={() => setSelectedCategory("new")} className="artc-new"> Новые </button>
							</div>
						</div>
					</div>
					<div className="artc-wrap-block">
						<div className="artc-bl">
							<div className="artc-block" />
						</div>
						<div className="artc-art-container">
							<div className="row artc-wrap-main-line">
								<div className="col-md-2 col-xs-2 artc-news artc-news-art">
									<div className="artc-main-name">Статьи</div>
								</div>
								<div className="col-md-1 col-xs-1` artc-news">
									<div className="artc-name-noties-box">
										<div className="artc-name-noties">{selectedCategory}</div>
									</div>
								</div>

								<div className="col-md-7 col-xs-7 ">
								
										
									</div>
              </div>
              
						
							<div className="row artc-art-cards-row">
                <div className="artc-art-cards">
                  
	<Slider {...settings}>
										
                                        {(selectedCategory !== "all" && selectedCategory !=="new" && selectedCategory !=="popular") ?
                                            article_base.filter(item => item.category === selectedCategory 
                                        ).map(
											({
											id,
											date,
											month,
											image,
											s_name,
											share,
											comment,
											name,
											description,
											text
										}) => (
											<Link to={`/article/${id}`} className="artc-art-card" key={id}>
													<ArticleItem
													id={id}
													date={date}
													month={month}
													image={image}
													s_name={s_name}
													share={share}
													comment={comment}
													name={name}
													description={description}
													text={text}
												/>
												</Link>
											)
                                            )
                                    
                                            : (selectedCategory !== "all") ?
                                                 article_base.filter(item => item.genre === selectedCategory 
                                        ).map(
											({
											id,
											date,
											month,
											image,
											s_name,
											share,
											comment,
											name,
											description,
											text
										}) => (
												<Link to={`/article/${id}`} className="artc-art-card" key={id}>
													<ArticleItem
													id={id}
													date={date}
													month={month}
													image={image}
													s_name={s_name}
													share={share}
													comment={comment}
													name={name}
													description={description}
													text={text}
												/>
												</Link>
											)
										)
                                    :
                                               article_base.map(
											({
											id,
											date,
											month,
											image,
											s_name,
											share,
											comment,
											name,
											description,
											text
										}) => (
												<Link to={`/article/${id}`} className="artc-art-card" key={id}>
													<ArticleItem
													id={id}
													date={date}
													month={month}
													image={image}
													s_name={s_name}
													share={share}
													comment={comment}
													name={name}
													description={description}
													text={text}
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
	);
};
export default Article;
