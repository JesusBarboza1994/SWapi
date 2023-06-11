import { useEffect, useState } from "react";
import { Person, Vehicle } from "../../react-app-env";
import { colors } from "../../styles";
import * as Styled from "./styles";
import {getVehicles} from "../../services/fetch-services"

interface DetallePersonaProps{
  description: Person
}
interface DescriptionProps{
  text: string,
  description?: string
}
interface TitleProps{
  text: string,
}

const SectionHeader = ({text}: TitleProps)=>(<Styled.SectionHeader>{text}</Styled.SectionHeader>)
const DataCell = ({text, description=""}: DescriptionProps)=>(
  <Styled.DataCell>
    <Styled.Text>{text}</Styled.Text>
    <Styled.DetailText>{description}</Styled.DetailText>
  </Styled.DataCell>
)
export default function PersonDescription({description}: DetallePersonaProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    getVehicles(description.vehicles).then(setVehicles)
  }, [description])
  
  return(
    <Styled.Wrapper>
      <SectionHeader text="General Information"/>
      <DataCell text="Eye Color " description={description.eye_color}/>
      <DataCell text="Skin Color " description={description.skin_color}/>
      <DataCell text="Birth Year " description={description.birth_year}/>
      {vehicles.length === 0 ? null :
        <>
          <SectionHeader text="Vehicles"/>  
          {vehicles.map(vehicle => <DataCell text={vehicle.name} key={vehicle.name}/>)}
        </>
      }
    </Styled.Wrapper>
  )
}