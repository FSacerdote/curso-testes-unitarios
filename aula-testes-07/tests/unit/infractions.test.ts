import { getInfractionsFrom } from '../../src/infractions-service';
import * as infractionsRepository from '../../src/infractions-repository';
import * as usersRepository from "../../src/users-repository";
import { Level } from "@prisma/client";


describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    jest.spyOn(infractionsRepository, "getInfractionsFrom").mockImplementationOnce((): any=>{
      return {
        id: 1,
        date: new Date(),
        description: "descricao",
        cost: 10,
        level: Level.LIGHT,
        userId: 1
      }
    })

    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce((): any=>{
      return {
        id: 1,
        firstName: "Carlos",
        lastName: "Eduardo",
        licenseId: "1"
      }
    })
    const infractions = await getInfractionsFrom("1")
    expect(infractions.licenseId).toBe("1");
  });

  it("should throw an error when driver license does not exists", async () => {
    jest.spyOn(infractionsRepository, "getInfractionsFrom").mockImplementationOnce((): any=>{
      return {}
    })
    jest.spyOn(usersRepository, "getUserByDocument").mockImplementationOnce((): any=>{
      return undefined
    })
    const promise = getInfractionsFrom("1")
    expect(promise).rejects.toEqual({ type: "NOT_FOUND", message: "Driver not found." });
  })
});