import tstimg from '../img/lociai.png'; 

const Project = props => {
    console.log('IMG', props.img); 
    
    return (
        <>
            <div>
                { props.title }
                <img src={ Object.values(props.img)[0] } />
            </div>
        </>
    )
}

export default Project; 