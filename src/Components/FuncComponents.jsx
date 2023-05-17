import Nombres from './FuncHijo'

const FuncComponent = () => {

    let names = 'Rony'

    return (
        <>
           <h1>
                Hola <Nombres nombre={names}/> <Nombres numero={30}/>
           </h1>
        </>
    )
}

export default FuncComponent