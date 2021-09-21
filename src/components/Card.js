import React,  {Fragment} from 'react';
//bacground color is light greeb, border 3px, padding 3px, margin 2 and grow is an effect
//props = name, email, id such as props.name
const Card = ({name, email, username, id}) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
        
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <Fragment>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </Fragment>
        </div>

    );
}

export default Card;