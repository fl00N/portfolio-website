import './Card.css'
import { forwardRef } from 'react'

const Card = forwardRef(({ id, frontSrc, frontAlt, backText, backTitle }, ref) => {
  return (
    <div className="card" id={id} ref={ref}>
        <div className="card-wrapper">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img 
                        src={frontSrc}
                        alt={frontAlt}
                    />
                </div>
                <div className='flip-card-back'>
                    <h1>{backTitle}</h1>
                    <p>{backText}</p>           
                </div>
            </div>
        </div>  
    </div>
  )
})

export default Card