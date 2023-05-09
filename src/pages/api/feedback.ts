/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/
/* eslint-disable @typescript-eslint/no-unsafe-return*/

import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {method, body} = req
  if (method === 'POST') {
    console.log(req.query, req.body)
    try {
      const newEntry = await prisma.feedback.create({
        data: {
          name: body.name,
          mail: body.mail,
          questionOne: body.radioOne,
          questionTwo: body.radioTwo,
          questionThree: body.radioThree,
          feedback: body.feed,
        }
      })
      return res.status(200).json({success: true, ...newEntry})
    } catch (error) {
      console.error('Request error', error)
      res.status(500).json({error: 'Error creating feedback', success: false})
    }
  } else {
    return res.status(405).json({message: 'Method not allowed', success: false})
  }
}