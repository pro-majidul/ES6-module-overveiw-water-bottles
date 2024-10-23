import PropType from 'prop-types'
import './card.css'
const Card = ({ totalBottle, removeItemUI }) => {
    return (
        <div>
            <h3> Total Purches Card {totalBottle.length}</h3>
            <div className='card-container'>
                {
                    totalBottle.map(bottle => <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        < button onClick={()=> removeItemUI(bottle.id)} > Remove</button>
                    </div>)
            }
        </div>
            
        
        </div >
        
    );
};

Card.propTypes = {
    totalBottle: PropType.array.isRequired,
    removeItemUI: PropType.func.isRequired

}
export default Card;