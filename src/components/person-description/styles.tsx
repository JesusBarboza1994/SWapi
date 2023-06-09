import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

interface WrapperProps {
  showList: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  padding: 0px 100px;
  width:100%;
  @media(max-width: 768px){
    display:none;
    display: ${props=> !props.showList ? "block" : "none"};
    padding: 0px 80px;
  }
  @media(max-width: 500px){
    padding: 0px 30px;
  }
`
export const DataCell = styled.div`
  width:100%; 
  display:flex;
  justify-content:space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
  padding: 16px;
`
export const SectionHeader = styled.h2`
  padding: 32px 16px 8px 16px;
  ${typography.h2.default}
`
export const VehicleContainer = styled.p`
  border-bottom: 1px solid ${colors.text.light};
  padding: 14px 16px 15px 0px;
`
export const Text = styled.h2`
  ${typography.h2.emphasis.low}
`
export const DetailText = styled.h2`
  ${typography.h2.default}
`

