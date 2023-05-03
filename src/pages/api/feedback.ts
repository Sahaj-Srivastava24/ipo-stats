import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {method, query} = req
  if (method === 'POST') {
    // Process a POST request

    console.log(query)
  } else {
    res.status(400).json({
      error: 'GET not supported'
    })
  }
}