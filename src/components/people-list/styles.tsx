import styled from "@emotion/styled";
import { colors, typography } from "../../styles";
import {FiChevronRight} from "react-icons/fi"

interface WrapperProps {
  showList: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  width:350px;
  padding-left:15px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  max-height:650px;
  overflow-y: scroll; 
  ::-webkit-scrollbar {
    width: 4px; 
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 4px; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }
  @media(max-width: 768px){
    width:100%;
    display: ${props=> props.showList ? "block" : "none"};
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