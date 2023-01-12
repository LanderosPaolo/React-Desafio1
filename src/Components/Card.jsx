import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Cards = ({url, name, description}) => {
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="secondary">Saber más</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;