const Project = props => {
    return (
        <>
            <div className={ `project ${ props.slug }`}>
                <img className="image" src={ Object.values(props.img)[0] } />

                <div className="lunette">
                    <div className="description">
                        { props.description }
                    </div>

                    <div className="links">
                        <a href={ props.pdf } className="pdf">documentation</a>
                        {props.link && 
                            <a href={ props.link } className="link"> | link</a>
                        }
                    </div>
                    
                    <div className="title">
                        { props.title }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project; 