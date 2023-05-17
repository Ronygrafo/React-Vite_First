import Nombres from './FuncHijo'

const FuncComponent = () => {

    let names = 'Rony'

    return (
        <>
           <h1>
                Hey <Nombres nombre={names}/> !
           </h1>
        </>
    )
}

export default FuncComponent