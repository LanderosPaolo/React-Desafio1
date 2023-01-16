import Card from 'react-bootstrap/Card';

const Footer = (props) => {
    return (
        <div className='divFooter'>
            <Card.Footer className="text-muted">{props.footer}</Card.Footer>
        </div>
    )
}

export default Footer;