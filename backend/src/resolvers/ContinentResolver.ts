import { Continents } from "../entities/continents";
import { Query, Resolver } from "type-graphql";

@Resolver(Continents)
class ContinentResolver {
    @Query(() => [Continents])
    async getAllContinents() {
        return await Continents.find({ relations: ["countries"] });
    }
}

export default ContinentResolver;