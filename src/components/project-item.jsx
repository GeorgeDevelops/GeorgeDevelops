import React from 'react';

const Item = (props) => {
    const { imageUrl, name, description, github, url } = props;
    return ( 
    <React.Fragment>
        <div id='project-item'>
            <div id='imageContainer'>
                <img src={imageUrl} alt={`${name}/IMG not found.`} />
            </div>
            <div id='info'>
                <h2>{ name }</h2>

                <p>{ description }</p>
                
                <div className='btns'>
                    <button>
                        <a rel="noopener" target={'_blank'} href={ url }>Visit</a>
                    </button>
                    <button>
                        <a rel="noopener" target={'_blank'} href={ github }>GitHub</a>
                    </button>
                </div>
            </div>
        </div>
    </React.Fragment> 
    );
}
 
export default Item;