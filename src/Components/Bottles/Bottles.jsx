import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottole.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    
    return (
        <div>
            <h3 style={{
                textAlign:'center'
            }}>Total Bottles {bottles.length}</h3>
            <div style={{
                display:"grid",
                gridTemplateColumns:'repeat(3,1fr)',
               
            }}>
            {
                bottles.map((bottle, i) => <Bottle key={i} item={bottle}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;