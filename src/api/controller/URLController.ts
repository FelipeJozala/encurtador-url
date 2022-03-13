import { Request, Response } from 'express'
import shortID from 'shortid'
import { URLModel } from '../../db/model/url'

export class URLContoller {
  public async shorten (req: Request, res: Response): Promise<void> {
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })
    if (url) {
      res.json(url)
    } else {
      const hash = shortID.generate()
      const shortURL = `${process.env.API_URL}/${hash}`
      URLModel.create({ originURL, hash, shortURL })
      const newURL = await URLModel.create({ originURL, hash, shortURL })
      res.json(newURL)
    }
  }

  public async redirect (req: Request, res: Response): Promise<void> {
    const { hash } = req.params
    const url = await URLModel.findOne({ hash })
    if (url) {
      res.redirect(url.originURL)
      return
    }

    res.status(400).json({ error: 'URL not found' })
  }
}
