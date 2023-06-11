import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
import {FiChevronRight} from "react-icons/fi"

export const Wrapper = styled.div`
  width:350px;
  padding-left:15px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  max-height:650px;
  overflow-y: scroll; /* Habilitar la barra de desplazamiento vertical */

  /* Estilos personalizados para la barra de desplazamiento */
  ::-webkit-scrollbar {
    width: 4px; /* Ancho de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color de fondo de la barra de desplazamiento */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color del pulgar de la barra de desplazamiento */
    border-radius: 4px; /* Borde redondeado del pulgar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del pulgar de la barra de desplazamiento al pasar el cursor */
  }
`
export const PersonCell = styled.div`
  cursor:pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items:center;
  div{
    padding:16px;
  }
`
export const Name = styled.p`
  ${typography.h2.default};
  color:${colors.black};
`
export const Details = styled.p`
  ${typography.p1.low};
  color:${colors.text.light};
`
export const Chevron = styled(FiChevronRight)`
  color:${colors.black};
  font-size:24px;
  margin-right:27px;
`
export const NoticeCell = styled.h2`
  color:${colors.text.emphasis};
  width:100%;
  text-align:center;
  padding-top:20px;
`