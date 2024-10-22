import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css'
import Bottle from './../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [totalBottle , setTotalBottle] = useState([])
    useEffect(() => {
        fetch('bottole.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    
    const handerPurchasesBottle =(botles)=>{
        const newBottles = [...totalBottle , botles]
        setTotalBottle(newBottles)
    }

    return (
        <div>
            <h3>Total Bottles {bottles.length}</h3>
            <h4>Total Bottles Parchase {totalBottle.length} </h4>
            <div className="flex">
                {
                    totalBottle.map( bottle => <img src={bottle.img}
                    key={bottle.id}></img>)
                }
            </div>
            
            <div className="bottles">
            {
                bottles.map((bottle, i) => <Bottle
                 key={i} 
                 item={bottle}
                 handerPurchasesBottle={handerPurchasesBottle}
                 ></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;