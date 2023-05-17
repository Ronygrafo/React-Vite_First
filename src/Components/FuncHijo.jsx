import Numeros from './FuncHijoHijo'

const Nombres = ({nombre}) => {

  return (
    <>
        <span>{nombre} <Numeros numero={2023}/> </span>
    </>
  )
}

export default Nombres