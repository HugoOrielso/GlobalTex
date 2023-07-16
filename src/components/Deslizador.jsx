import '../assets/css/slider.css'
import imagenUno from '../assets/bannerImagenes/imagenUno.jpg'
import imagenDos from '../assets/bannerImagenes/imagenDos.jpg'
import imagenTres from '../assets/bannerImagenes/imagenTres.jpg'
import imagenCuatro from '../assets/bannerImagenes/imagenCuatro.jpg'
import imagenCinco from '../assets/bannerImagenes/imagenSiete.jpg'
import imagenSeis from '../assets/bannerImagenes/imagenOcho.jpg'
import { useRef } from 'react'

const Deslizador = () => {
    let sliderCounter = 0
    const sliderMoveValue = useRef(null)
    const sliderLines = useRef(null)
    let movingLines = () => {
        let hijo = sliderLines.current.children
        for (let index = 0; index < hijo.length; index++) {
            hijo[index].classList.remove('esActivo')
            hijo[sliderCounter].classList.add('esActivo')
        }
    }
    let sliderNext = () =>{
        let operacion = 100/6
        sliderCounter++
        if(sliderCounter== 6){
            sliderCounter=0
        }
        if(sliderMoveValue.current.children.length>0){
            sliderMoveValue.current.style.transform = `translateX(-${operacion*sliderCounter}%)`
            sliderMoveValue.current.style.transition
        }
        movingLines()
    }
    let sliderPrev = () =>{
        let operacion = 100/6
        if(sliderCounter<=0){
            sliderCounter=6
        }
        sliderCounter--
        if(sliderMoveValue.current.children.length>0){
            sliderMoveValue.current.style.transform = `translateX(-${operacion*sliderCounter}%)`
            sliderMoveValue.current.style.transition
        }
        movingLines()
    }
    

  return (
    <main className='slider'>
        <div className="slider-content">
            <div className="slider-move" ref={sliderMoveValue}>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenUno} alt="imagen" className="slider-img" />
                    </div>
                </div>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenDos} alt="imagen" className="slider-img" />
                    </div>
                </div>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenTres} alt="imagen" className="slider-img" />
                    </div>
                </div>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenCuatro} alt="imagen" className="slider-img" />
                    </div>
                </div>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenCinco} alt="imagen" className="slider-img" />
                    </div>
                </div>
                <div className="slider-card">
                    <div  className="slider-a">
                        <img src={imagenSeis} alt="imagen" className="slider-img" />
                    </div>
                </div>
            </div>             
            <button onClick={sliderPrev} className="slider-arrow prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="slider-svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </button>
            <button onClick={sliderNext} className="slider-arrow next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="slider-svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <ul className='slider-lines' >
                <li className='slider-line'ref={sliderLines}>
                    <button className='slider-btn esActivo'></button>
                    <button className='slider-btn '></button>
                    <button className='slider-btn '></button>
                    <button className='slider-btn '></button>
                    <button className='slider-btn '></button>
                    <button className='slider-btn '></button>
                </li>
            </ul>
        </div>
    </main>
  )
}

export default Deslizador
