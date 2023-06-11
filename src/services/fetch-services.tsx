import { HomeWorld, Person, Vehicle } from "../react-app-env"

export async function getVehicles(vehiclesUrlList: string[]) {
  const vehiclePromises = vehiclesUrlList.map((vehicle) =>
  fetch(vehicle).then((response) => response.json()))

  const vehicleData = await Promise.all(vehiclePromises)
  const vehicleObjects = vehicleData.map((data: any) => (
    {name: data.name} as Vehicle) 
  )
      
  return [ ...vehicleObjects]
}

export async function getHomes(people: Person[]) {
  const homePromises = people.map((person) =>
  fetch(person.homeworld).then((response) => response.json()))

  const homeData = await Promise.all(homePromises)
  const homeObjects = homeData.map((data: any) => (
    {name: data.name} as HomeWorld) 
  )
      
  return [ ...homeObjects]
}

export async function getPeople(people:Person[], numberPage:number,
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>, 
  setError: React.Dispatch<React.SetStateAction<string>>) {
  const url = `https://swapi.dev/api/people/?page=${numberPage}`
  try{
    const response = await fetch(url)
    const data = await response.json()
    setPeople([...people, ...data.results])
  }catch{
    setError('Failed to fetch');
  }
}