import React, {Fragment} from 'react';
import Planet from './planet';
const Planets = () => {
    return(
        <Fragment>
            <h3>Planet list</h3>
            <hr/>
            <Planet name="Terra"
                    description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos."
                    link="https://pt.wikipedia.org/wiki/Terra"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/450px-The_Blue_Marble_%28remastered%29.jpg"
                    />
            <Planet name="Marte"
                    description="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada."
                    link="https://pt.wikipedia.org/wiki/Marte"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/420px-OSIRIS_Mars_true_color.jpg"
                    />
            <Planet name="Saturno"
                    description="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
                    link="https://pt.wikipedia.org/wiki/Saturno_(planeta)"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/450px-Saturn_during_Equinox.jpg"
                    />
        </Fragment>
    )
}

export default Planets;