// * Modules * //
import React, { ReactElement } from 'react'
import { CiCircleAlert } from 'react-icons/ci';

// * Exports * //
import { CardSt, Container } from "../styles/global";


// * Components * //
export default function CardModel(props: any) {

    return (
        <Container id="card-module-popup-1"  >
            <CardSt >

                <div className="main-case1">
                    <div className="icon-alert"><CiCircleAlert /></div>
                    <h4>
                        {window.popListValidade.descricao} {" "}
                        <span className="id-model-s1s">
                            {props.textData}
                        </span>
                    </h4>
                    <div className="btn-case">
                        <button className="btn-gray-1" onClick={props.removedComponent}>CONFIRMAR</button>
                    </div>
                </div>
            </CardSt>
        </Container>
    )
}