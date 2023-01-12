import Card from 'react-bootstrap/Card';

const Footer = ({footer}) => {
    return (
        <div className='divFooter'>
            <Card.Footer className="text-muted">{footer}</Card.Footer>
        </div>
    )
}

export default Footer;