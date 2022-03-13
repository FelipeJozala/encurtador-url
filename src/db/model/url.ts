import { prop, getModelForClass } from '@typegoose/typegoose'

export class URL {
 @prop({ required: true, type: () => String })
 hash: string

 @prop({ required: true, type: () => String })
 public originURL: string

 @prop({ required: true, type: () => String })
 public shortURL: string
}

export const URLModel = getModelForClass(URL)
