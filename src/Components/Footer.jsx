import Card from 'react-bootstrap/Card';

const Footer = ({footer}) => {
    return (
        <Card.Footer className="text-muted">{footer}</Card.Footer>
    )
}

export default Footer;