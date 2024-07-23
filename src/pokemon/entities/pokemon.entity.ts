import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
  // id: string // Mongo me lo da
  @Prop({
    unique: true,
    index: true,
  })
  @ApiProperty()
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  @ApiProperty()
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );