
interface ItemsArray {
    codigo: string;
    data: string;
};

export class SearchingModels {

    public itemsModel: ItemsArray[];
    public selectedComponent: (dataValidade: string) => void;

    constructor(arrModel: ItemsArray[], selectedComponent: (dataValidade: string) => void) {
        this.itemsModel = arrModel;
        this.selectedComponent = selectedComponent;
    }

    // ? Listagem De Categoria
    categoriasDefine() {

        // ? Remover Cards Antigos
        const elementOld = document.querySelectorAll('.iwda2m20-2');
        for (let i = 0; i < elementOld.length; i++) {
            elementOld[i].remove();
        }


        const ListagemElements = document.getElementsByClassName('listagem-linha');

        if (ListagemElements && ListagemElements.length > 0) {
            for (let i = 0; i < ListagemElements.length; i++) {
                const ulElement = ListagemElements[i].querySelector('ul');

                if (ulElement) {
                    if (ulElement.classList.contains("owl-carousel")) {

                        let liElements = ulElement.querySelector('owl-stage');
                        let liElementsChildren = liElements?.children;

                        if (liElementsChildren) {
                            for (let j = 0; j < liElementsChildren.length; j++) {
                                const liElement = liElementsChildren[j];
                                const linkModel = liElement.querySelector('.listagem-item');

                                if (linkModel) {
                                    const dataIdCodigo = linkModel.getAttribute('data-id');

                                    for (let it = 0; it < this.itemsModel.length; it++) {
                                        const objeto = this.itemsModel[it];

                                        if (objeto.codigo == dataIdCodigo) {

                                            // ? Configuracao do Card de Validade
                                            const nomeProduto = linkModel.querySelector('.nome-produto');
                                            let newElement = document.createElement("div");
                                            newElement.classList.add('iwda2m20-2');

                                            newElement.innerHTML = `Validade: ${objeto.data}`;
                                            newElement.setAttribute("style", "background-color: #c24949; color: white; font-weight: bold; padding: .3rem; border-radius: 5px; border: solid 1px #42424226; width: 70%; margin-top: .4rem; margin-bottom: .4rem;");
                                            nomeProduto?.insertAdjacentElement("afterend", newElement);



                                            // ? Configuracao do function button
                                            const btComprar = linkModel.querySelector('.botao-comprar');


                                            if (btComprar) {
                                                btComprar.addEventListener('click', () => {
                                                    this.selectedComponent(objeto.data);
                                                })
                                            }

                                        }

                                    }

                                }

                            }
                        }



                    } else {
                        const liElements = ulElement.children;

                        for (let j = 0; j < liElements.length; j++) {
                            const liElement = liElements[j];
                            const linkModel = liElement.querySelector('.listagem-item');

                            if (linkModel) {
                                const dataIdCodigo = linkModel.getAttribute('data-id');

                                for (let it = 0; it < this.itemsModel.length; it++) {
                                    const objeto = this.itemsModel[it];

                                    if (objeto.codigo == dataIdCodigo) {

                                        // ? Configuracao do Card de Validade
                                        const nomeProduto = linkModel.querySelector('.nome-produto');
                                        let newElement = document.createElement("div");
                                        newElement.classList.add('iwda2m20-2');

                                        newElement.innerHTML = `Validade: ${objeto.data}`;
                                        newElement.setAttribute("style", "background-color: #c24949; color: white; font-weight: bold; padding: .3rem; border-radius: 5px; border: solid 1px #42424226; width: 70%; margin-top: .4rem; margin-bottom: .4rem;");
                                        nomeProduto?.insertAdjacentElement("afterend", newElement);



                                        // ? Configuracao do function button
                                        const btComprar = linkModel.querySelector('.botao-comprar');


                                        if (btComprar) {
                                            btComprar.addEventListener('click', () => {
                                                this.selectedComponent(objeto.data);
                                            })
                                        }

                                    }

                                }

                            }

                        }
                    }
                }
            }
        }
    }

    singleProduct() {
        const SingleElements = document.getElementsByClassName('info-principal-produto');

        if (SingleElements && SingleElements.length > 0) {
            const item = document.querySelectorAll('.disponivel');
            for (let j = 0; j < item.length; j++) {
                const liElement = item[j];
                const dataIdCodigo = liElement?.getAttribute('data-produto-id');

                for (let it = 0; it < this.itemsModel.length; it++) {
                    const objeto = this.itemsModel[it];

                    if (objeto.codigo == dataIdCodigo) {
                        const childrenComprar = liElement?.querySelector('.botao-comprar');
                        // childrenComprar?.removeAttribute('href');
                        childrenComprar?.addEventListener('click', () => {
                            this.selectedComponent(objeto.data);
                        })

                    }
                }

            }

        }
    }
}