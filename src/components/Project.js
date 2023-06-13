const Project = props => {
    return (
        <>
            <div className={ `project ${ props.slug }`}>
                <div className="description">
                    { props.description }
                </div>
                <div className="title">
                    { props.title }
                </div>
                {props.link && 
                    <a href={ props.link } className="link">link</a>
                }
                <a href={ props.pdf }>
                    <img className="image" src={ Object.values(props.img)[0] } />
                </a>
            </div>
        </>
    )
}

export default Project; 