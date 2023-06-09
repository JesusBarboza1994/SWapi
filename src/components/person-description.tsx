import { useEffect, useState } from "react";
import { Person, Vehicle } from "../react-app-env";
import styled from "@emotion/styled";
import { colors } from "../styles";

const Wrapper = styled.div`
  padding: 0px 100px;
  width:100%;
`
const DescriptionContainer = styled.div`
  width:100%; 
  display:flex;
  justify-content:space-between;
  border-bottom: 1px solid ${colors.gray.light};
  padding: 14px 16px 15px 0px;
  p{
    font-weight:700;
  }
`
const TitleText = styled.h2`
  padding-top:32px;
`
const VehicleContainer = styled.p`
  border-bottom: 1px solid ${colors.gray.light};
  padding: 14px 16px 15px 0px;
`

interface DetallePersonaProps{
  description: Person
}
interface DescriptionProps{
  text: string,
  description: string
}
interface TitleProps{
  text: string,
}
interface TextProps{
  text: string,
}
interface DescriptionTextProps{
  text: string,
}


const Title = ({text}: TitleProps)=>(<TitleText>{text}</TitleText>)
const Text = ({text}: TextProps)=>(<p style={{color: colors.gray.medium}}>{text}</p>)
const DescriptionText = ({text}: DescriptionTextProps)=>(<p>{text}</p>)
const Description = ({text, description}: DescriptionProps)=>(
  <DescriptionContainer>
    <Text text={text}/>
    <DescriptionText text={description}/>
  </DescriptionContainer>
)
const VehicleText = ({vehicle}: {vehicle: Vehicle})=>(<VehicleContainer>{vehicle.name}</VehicleContainer>)
export default function PersonDescription({description}: DetallePersonaProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehiclePromises = description.vehicles.map((vehicle) =>
        fetch(vehicle).then((response) => response.json())
      )

      const vehicleData = await Promise.all(vehiclePromises)
      const vehicleObjects = vehicleData.map((data: any) => (
        {name: data.name} as Vehicle) 
      )
      
      setVehicles([ ...vehicleObjects])
    }
    fetchVehicles();
    
  }, [description])
  
  return(
    <Wrapper>
      <Title text="General Information"/>
      <Description text="Eye Color " description={description.eye_color}/>
      <Description text="Skin Color " description={description.skin_color}/>
      <Description text="Birth Year " description={description.birth_year}/>
      {vehicles.length === 0 ? null :
        <>
          <Title text="Vehicles"/>  
          {vehicles.map(vehicle => <VehicleText vehicle={vehicle}/>)}
        </>
      }
    </Wrapper>
  )
}