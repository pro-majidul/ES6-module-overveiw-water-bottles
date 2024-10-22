
import './bottle.css'
const Bottle = ({ item }) => {
    const { name , img , price } = item
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{price}</p>
        </div>

    );
};

export default Bottle;