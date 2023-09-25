import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cardData, setCardData]=useState([]);
    useEffect(()=>{
        fetch("donation.json")
        .then(res=>res.json())
        .then(data=>setCardData(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {
                cardData.map(data=><Card key={data.id} data={data}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;