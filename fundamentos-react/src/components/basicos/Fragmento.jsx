import React from "react";

export default function Fragmento () {
    return (
        // Desta forma retornamos apenas o FRAGMENTO h2 + P.
        // Pois por padrão temos de envolver elementos em algum tipo de "tag de seção", como por exemplo uma div
        // Podemos passar o "React.Fragment" para envolver os elementos, que serão apenas eles proprios retornados, OU utilizar apenas "<>". Porém utilizar <> tem suas desvantagens, como não podermos passar propriedades para esta "seção"
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </React.Fragment>
    )
}