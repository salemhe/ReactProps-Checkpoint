import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


//Creating Player Cards
function Player({ name, team, nationality, jerseyNumber, age, image }) {
    return (
        <div className='Player'>
            <Card className='m-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Team: {team}</Card.Text>
                    <Card.Text>Nationality: {nationality}</Card.Text>
                    <Card.Text>JerseyNumber: {jerseyNumber}</Card.Text>
                    <Card.Text>Age: {age}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Player;
