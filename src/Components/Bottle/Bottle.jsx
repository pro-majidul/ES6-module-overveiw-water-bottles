import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({ item ,handerPurchasesBottle }) => {
    const { name , img , price } = item
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p> Price : $ {price}</p>
            <button onClick={()=> handerPurchasesBottle(item)}>Purshase</button>
        </div>

    );
};

Bottle.propTypes ={
    item:PropTypes.object.isRequired,
    handerPurchasesBottle:PropTypes.func.isRequired
}
export default Bottle;