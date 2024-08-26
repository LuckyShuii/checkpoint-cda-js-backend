import { Field, ObjectType } from "type-graphql";
import { Continents } from "../entities/continents";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";

@ObjectType()
@Entity()
export class Countries extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique: true})
    code: string;

    @Field()
    @Column({unique: true})
    name: string;

    @Field()
    @Column({charset: 'utf8mb4',collation: 'utf8mb4_unicode_ci'})
    emoji: string;

    @Field(() => Continents)
    @ManyToOne(() => Continents, continent => continent.countries)
    continent: Continents;
}
