import React, { useContext } from 'react';
import { AppContext } from '../App';
import GameRating from './GameRating';
import './gameCard.css';

const GameCard = ({ game }) => {
    const {library, setLibrary, bag, setBag} = useContext(AppContext);

    const handleAddToLibrary = game => {
        setLibrary([...library, game])
    };

    const handleRemoveFrontLibrary = game =>{
        setLibrary(library.filter(item=>item._id!==game._id));
    };

    const handleAddToBag = game => {
        if (bag.includes(game)) return;
        setBag([...bag, game]);
    };

    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gameCard">
                <img src={game.img} alt={game.title} className='img-fluid' />
                <a href="#"className={`like ${library.includes(game) ? 'active' : undefined}`} onClick={
                    library.includes(game)
                    ? ()=> handleRemoveFrontLibrary(game)
                    : ()=>handleAddToLibrary(game)
                }>
                    <i className='bi bi-heart-fill' />
                </a>
                <div className="gameFeature">
                    <span className='gameType'>{game.level}</span>
                    <GameRating rating={game.rating} />
                </div>
                <div className="gameTitle mt-3 mb-3">{game.title}</div>
                <div className="gamePrice">
                    {
                        game.discount !==0 && (
                            <>
                                <span className='discount'>
                                    <i>{game.discount * 100}%</i>
                                </span>
                                <span className='prevPrice'>${game.price.toFixed(2)}</span>
                            </>
                        )
                    }
                    <span className='currentPrice'>
                        ${((1 - game.discount) * game.price).toFixed(2)}
                    </span>
                </div>
                <a href="#" className="addBag" onClick={()=>handleAddToBag(game)}>
                    <i className='bi bi-bag-plus-fill'></i>
                </a>
            </div>
        </div>
    )
}

export default GameCard;