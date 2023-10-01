import { IPosts } from 'types/IPosts';

async function getPosts():Promise<IPosts[]> {
    const response: Response = await fetch(process.env.REACT_APP_PUBLIC_API_POSTS!)
      const data: Promise<IPosts[]> = await response.json()
      return data
  }
  
  export default getPosts