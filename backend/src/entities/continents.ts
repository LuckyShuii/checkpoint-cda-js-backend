import { Field, ObjectType } from "type-graphql";
import { Countries } from "../entities/countries";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";

@ObjectType()
@Entity()
export class Continents extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique: true})
    name: string;

    @Field(() => [Countries])
    @OneToMany(() => Countries, country => country.continent)
    countries: Countries[];
}
