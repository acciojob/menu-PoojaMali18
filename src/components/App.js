import React,{useState} from "react";
const App = () => {

    const data = [
        {
            id: 1,
            title: 'buttermilk pancakes',
            category: 'breakfast',
            price: 15.99,
            img: 'https://www.imperialsugar.com/sites/default/files/recipe/Old-Fashioned-Buttermilk-Pancakes-imperial_0.jpg',
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: 'diner double',
            category: 'lunch',
            price: 13.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3HkR3ML5o7LPkK9o3yJxTAiJBVBcXAemnYmcS9qbtxDEjskbMcDuxA6hSaHvRgA6gR0&usqp=CAU',
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: 'godzilla milkshake',
            category: 'shakes',
            price: 6.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PYbxdb9qKVXXqBTBSCUamL2qfkuEb9EdPWeKLvjrP8QfrK8lVFOHzh7yKD0qCOohzdM&usqp=CAU',
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: 'country delight',
            category: 'breakfast',
            price: 20.99,
            img: 'https://imgmedia.lbb.in/media/2021/06/60d2f2456e30431f326897d0_1624437317533.jpg',
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: 'egg attack',
            category: 'lunch',
            price: 22.99,
            img: 'https://www.healthifyme.com/blog/wp-content/uploads/2022/12/Egg-Diet-Here-is-How-to-Plan-the-Best-Egg-Diet-for-Weight-Loss.jpg',
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: 'oreo dream',
            category: 'shakes',
            price: 18.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg59WEL33iUC6BuH8lOZPh7vsMrayPi6gkWQv_Bqo7kPfIJ3wOD-jr4XUBesQ48rB2MH8&usqp=CAU',
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: 'bacon overflow',
            category: 'breakfast',
            price: 8.99,
            img: 'https://hips.hearstapps.com/hmg-prod/images/delish-191907-bacon-wrapped-avocado-fries-0368-portrait-pf-1565884766.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*',
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: 'american classic',
            category: 'lunch',
            price: 12.99,
            img: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-02/15/16/enhanced/buzzfeed-prod-fastlane-02/enhanced-buzz-4686-1518729944-8.jpg?output-format=jpg&output-quality=auto',
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: 'quarantine buddy',
            category: 'shakes',
            price: 16.99,
            img: 'https://pbs.twimg.com/media/EVhDJHHWoAAEbkB.jpg:large',
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ]


    const [category, setCategory] = useState("all");

  


    

    const filterItems = (category) => {
        setCategory(category);
      };
    
      const filteredData = category === "all" ? data : data.filter(item => item.category === category);
    









    return (
        <div>
            <div className="div1">
                <h1>Our Menu</h1>
                <hr className="hr" />
                <button onClick={() => filterItems("all")}>All</button>
                <button onClick={() => filterItems("breakfast")} id="filter-btn-1">Breakfast</button>
                <button onClick={() => filterItems("lunch")} id="filter-btn-2">Lunch</button>
                <button onClick={() => filterItems("shakes")} id="filter-btn-3">Shakes</button>
            </div>
            <div className="tiles-container">
                {filteredData.map((item) => (
                    <div key={item.id} className="tile">
                        <div>
                            <img src={item.img} style={{ minWidth: "260px", height: "180px", border: "5px solid #c59d5f", display: "block", borderRadius: "8px" }} />
                        </div>
                        <div>
                            <div className="tp">
                                <p style={{ color: " #102a42", fontSize: "20px" }}>{item.title}</p>
                                <p style={{ color: "#c59d5f" }}>$ {item.price}</p>
                            </div>
                            <hr style={{ marginTop: "-10px" }} />
                            <p style={{ color: "#798ead", fontSize: "18px" }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default App;







/**<div style={{ display: "flex", flexWrap: "wrap", width: "600px" }} >
                <div style={{ width:"600px",height:"50px" }}>

                    {data.map((data) => (
                        <div key={data.id} style={{ display: "flex", margin: "10px", border: "1px solid #ccc", padding: "10px", minWidth: "3px" }}>
                            <div>
                                <img src={data.img} style={{ minWidth:"250px",height:"150px" }} />
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                                <p>{data.title}</p>
                                <p>{data.price}</p>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
    </div> */