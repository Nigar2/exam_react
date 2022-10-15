
import React, { useState } from "react";
import data from "../Mock/main"

const Career = () => {
    const [items, setItem] = useState(data)
    const [search,setSearch] = useState("")

    console.log(search);

    const Filterjs=  (category) => {
        const update = data.filter((index) => {
           return index.category === category
        });
    
        setItem(update)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <div className="selected">
                         
                                <button onClick={() => setItem(data)} value="">Hamısı</button>
                                <button onClick={() => Filterjs("Stomotoloq")} >Həkim</button>
                                <button onClick={() => Filterjs("USM Həkimi")} >Cərrah</button>
                                <button onClick={() => Filterjs("Həkim-laborant")} >Laborant</button>
                           
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <div className="search_doctor">
                            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Vakansiya axtar" />
                        </div>

                    </div>
                    <div className="row">
                        {
                        items.filter((el) => {
                            if (search === "") {
                                return el;
                            } else if (el.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return el;
                            }
                        }).map((el, id) => (
                            <div className="col-lg-12 mt-5">
                            <div className="careercard" key={id}>
                                <div className="careerdata">
                                    09:00-18:00
                                </div>
                                <div className="cardimg">
                                    <img src={el.images} alt=""/>
                                </div>
                                <div className="cardtext">
                                    <h3>{el.category}</h3>
                                    <p>{el.info}
                                    </p>
                                </div>
                            </div>

                  
                    </div>
                            ))}
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Career;