import { Countries } from "../entities/countries";
import { Continents } from "../entities/continents";
import { Query, Resolver, Mutation, Arg, InputType, Field } from "type-graphql";

@InputType()
class CountryInput {
  @Field()
  name: string;

  @Field()
  code: number;

  @Field()
  emoji: string

  @Field()
  continent: string;
}

@Resolver(Countries)
class CountryResolver {
  @Query(() => [Countries])
  async getAllCountries() {
    return await Countries.find({ relations: ["continent"] });
  }

  @Query(() => Countries)
  async getCountry(@Arg("code") code: number) {
    return await Countries.findOne({ where: { code } });
  }

  @Mutation(() => String)
  async addCountry(
    @Arg("data") newCountry: CountryInput
  ) {
    const continent = await Continents.findOne({ where: { name: newCountry.continent } });
  
    if (!continent) {
      throw new Error("Continent not found");
    }
  
    const country = Countries.create({
      ...newCountry,
      continent
    });
  
    await country.save();
    return "Country added successfully";
  }
}
export default CountryResolver;