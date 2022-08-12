function Options ({ src, alt }) {
    return (
        <a href="#option" className="option">
            <img src={src} alt={alt} style={{color: 'yellow'}} />
        </a>
    );
}

export default Options;