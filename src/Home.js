


import Card from 'react-bootstrap/Card';

import { Link} from "react-router-dom";


const Home = ({locations}) => {
 

console.log(locations)

  return (
    <div>
   
      <div style={{ fontWeight: 'bold', margin: '40px 10px 40px' }}>Choose Your Location</div>
      {locations.map((location, index) => (
        <div key={location.id ? location.id : index} >
          <Link to={`/LocationPage/${location.id}`} >
            <Card key={location.id} style={{ border: '3px double #1b1b1d', width: '25%', height: '30px', fontSize: '25', color: 'white', background: 'blue', margin: '10px 40px 40px 20px' }} >
              <Card.Body   >{location.Name}</Card.Body>
            </Card>
          </Link>
        </div>
      ))}
   
    </div>
  )
};

export default Home;