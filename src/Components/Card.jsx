import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Cards = (props) => {
    return (
        <Card style={{ width: '14rem', border:'solid 5px #000', borderRadius: '4%' }}>
            <Card.Img variant="top" src={props.url} />
            <Card.Body className='fixedBody'>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="secondary">Saber más</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;