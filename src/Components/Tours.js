import Card from "./Card";
function Tours({ tours, removeTour }) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with Suraj</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {

                        // {/* {...tour} means all data cloning, Quick copy, pass the copy of object named tour */ }    
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;