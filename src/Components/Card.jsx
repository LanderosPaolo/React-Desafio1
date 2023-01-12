import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Cards = ({url, name, description}) => {
    return (
        <Card style={{ width: '14rem', border:'solid 5px #000', borderRadius: '4%' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body className='fixedBody'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="secondary">Saber más</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards;