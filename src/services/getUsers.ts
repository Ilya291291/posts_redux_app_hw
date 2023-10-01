import { IUsers } from 'types/IUsers'

async function getUsers(): Promise<IUsers[]> {
    const response: Response = await fetch(process.env.REACT_APP_PUBLIC_API_USERS!)
      const data: Promise<IUsers[]> = await response.json()
      return data
  }
  
export default getUsers
  