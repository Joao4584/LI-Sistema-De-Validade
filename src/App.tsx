import { useEffect, useState } from 'react'
import { SearchingModels } from './controller/verification';
import CardModel from './model/CardModel';

export default function App(): JSX.Element {
  const [componentModel, setComponentModel] = useState(<></>);
  useEffect(() => {
    initCategorySearch();
    initSingleSearch();

    const exec = setInterval(() => {
      initCategorySearch();
    }, 5500);
    return (() => {
      clearInterval(exec);
    })
  }, []);

  const selectedComponent = (dataValidade: string) => {
    setComponentModel(<CardModel textData={dataValidade} removedComponent={removedComponent} />)
  };

  const removedComponent = () => {
    setComponentModel(<></>);
  }

  const initCategorySearch = () => {
    if (window.popListValidade && window.popListValidade.active) {
      let itemsModel = window.popListValidade.validades;

      // ? Listagem De Categoria
      const categorias = new SearchingModels(itemsModel, selectedComponent);

      categorias.categoriasDefine();

    }
  };

  const initSingleSearch = () => {
    if (window.popListValidade && window.popListValidade.active) {
      let itemsModel = window.popListValidade.validades;

      // ? Listagem De Categoria
      const categorias = new SearchingModels(itemsModel, selectedComponent);

      // ? Pagina De Produto
      categorias.singleProduct();
    }
  }

  return <>{componentModel}</>;
}

