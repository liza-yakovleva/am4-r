
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CustomSelect from "../Main/CustomSelect"
import '../../common/style/base.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './game.css';
import game_base from './game_base';
import GameItem from './GameItem';

const styles = {
  select: {
    width: '100%',
        maxWidth: 450,
            fontSize: 25,
   
         
  },
}
const options = [
     { value: 'all', label: 'Все' },
  { value: 'game_action', label: 'Экшен' },
  { value: 'game_horror', label: 'Ужастик' },
 { value: 'game_fantasy', label: 'Фантастика' },
  { value: 'popular', label: 'Популярные' },
   { value: 'new', label: 'Новые' },
]



 
const Game = () => {
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
			<div className="row gam-main-row">
				<div className="col-md-12 col-xs-12 gam-main-box">
					<div className="row gam-sort-row">
						<div className="col-md-6 col-xs-5 main-choice-cont">

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
							<div className="col-md-6 col-xs-6 gam-btn-new">
                                <button onClick={() => setSelectedCategory("new")} className="gam-new"> Новые </button>
							</div>
						</div>
					</div>
					<div className="gam-wrap-block">
						<div className="gam-bl">
							<div className="gam-block" />
						</div>
						<div className="gam-game-container">
							<div className="row gam-wrap-main-line">
								<div className="col-md-2 col-xs-2 gam-news gam-news-game">
									<div className="gam-main-name"> Игры </div>
								</div>
								<div className="col-md-1 col-xs-1 gam-news">
									<div className="gam-name-noties-box">
                                        <div className="gam-name-noties"> {selectedCategory} </div>
									</div>
								</div>
								<div className="col-md-7 col-xs-7">
								</div>
							</div>
							<div className="row gam-game-cards-row">
								<div className="gam-game-cards">
									<Slider {...settings}>
										
                                        {(selectedCategory !== "all" && selectedCategory !=="new" && selectedCategory !=="popular") ?
                                            game_base.filter(item => item.category === selectedCategory 
                                        ).map(
											({
												id,
												image,
												name,
												description,
												s_description,
												text,
												share,
												comment,
												reiting
											}) => (
												<Link
													to="../ArticleSinglePage/ArticleSinglePage"
													className="gam-card-game"
													key={id}
												>
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
											)
                                            )
                                    
                                            : (selectedCategory !== "all") ?
                                                 game_base.filter(item => item.genre === selectedCategory 
                                        ).map(
											({
												id,
												image,
												name,
												description,
												s_description,
												text,
												share,
												comment,
												reiting
											}) => (
												<Link
													to="../new-pages/new-pages.html"
													className="gam-card-game"
													key={id}
												>
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
											)
										)
                                    :
                                               game_base.map(
											({
												id,
												image,
												name,
												description,
												s_description,
												text,
												share,
												comment,
												reiting
											}) => (
												<Link
													to="../new-pages/new-pages.html"
													className="gam-card-game"
													key={id}
												>
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

export default Game;
