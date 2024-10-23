import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css'
import Bottle from './../Bottle/Bottle';
import { getStrogeCard, removeLocalStroge, setCardLocalStroge } from "../../Utilities/LocalStroge";
import Card from "../card/card";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [totalBottle, setTotalBottle] = useState([])
    useEffect(() => {
        fetch('bottole.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // get local storage data and show them to ui 
    useEffect(() => {
        if (bottles.length) {
            let items = []
            const getitems = getStrogeCard();
            for (const id of getitems) {
                const bottle = bottles.find(bollte => bollte.id === id);
                if (bottle) {
                    items.push(bottle)
                }
            }
            setTotalBottle(items)
        }
    }, [bottles])
// remove from local stroge and ui 
    const removeItemUI = (id) => {
        const remainingCards = totalBottle.filter(bottle => bottle.id !==id);
        setTotalBottle(remainingCards)
        removeLocalStroge(id)
    }


    const handerPurchasesBottle = (botles) => {
        const newBottles = [...totalBottle, botles]
        setTotalBottle(newBottles);
        setCardLocalStroge(botles.id)

    }
    return (
        <div>
            <h3>Total Bottles {bottles.length}</h3>
           <Card removeItemUI={removeItemUI} totalBottle ={totalBottle}></Card>
            
           
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