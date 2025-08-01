import react from 'react'
import './Card.css'

function Card({ info }) {
  return (
    <div className="card">
      <img src={info.foto} alt={info.nome} />
      <div className='mostrar'>{info.numero}</div>
      <div className='mostrar'>{info.nome}</div>
      <div className='mostrar'>{info.tipo}</div>
    </div>
  )
}

export default Card