import Card from 'react-bootstrap/Card';

const Title = (props) => {
    return (
        <div className='divTitle'>
            <Card.Header>{props.title}</Card.Header>
        </div>
    )
}

export default Title;