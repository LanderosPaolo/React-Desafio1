import Card from 'react-bootstrap/Card';

const Title = ({title}) => {
    return (
        <div className='divTitle'>
            <Card.Header>{title}</Card.Header>
        </div>
    )
}

export default Title;