// * Modules * //
import styled from 'styled-components';


// * Styles * //
export const Container = styled.div`
    background-color: #7777779b;
    backdrop-filter: blur(1px);
    position: fixed;
    z-index: 99999999999;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const CardSt = styled.div`
    width: 100%;
    max-width: 440px;
    height: 205px;
    border-radius: .6rem;
    padding: .6rem;
    background-color: #f8f8f8;
    font-family: 'Manrope', sans-serif;

    .main-case1{
        text-align: center;

        .icon-alert{

            svg{
                width: 85px;
                height: 85px;
                fill: #c7ab0f;
                -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	            animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;

            }
            @-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
        }
        .id-model-s1s{
            background-color: #e4d508;
            padding: 0.1rem .2rem;
            border-radius: .4rem;
        }
        .classProcessing{
            font-size: 15px;
        }
        .btn-case{
            width: 80%;
            height: 60px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            button{
                font-size: 1.1rem;
                padding: .6rem 2.5rem;
                border-radius: .3rem;
                box-shadow: 0px 0px 9px 1px #ffffff9f;
                border: solid 1px #b6b6b6;
            }
            .btn-green-1{
                background-color: #8baa7d;
                color: white;
                :hover{
                    background-color: #7e9971;
                }
            }
            .btn-gray-1{
                background-color: #c9c9c9;
                color: #ffffff;
                :hover{
                    background-color: #c0c0c0;
                }

            }
        }
    }
`;