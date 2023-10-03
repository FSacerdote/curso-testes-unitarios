import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => {
    return {
      v4: () => { return "12344567-89" }
    }
  });

describe("Protocols tests", ()=>{

    it("Should return a valid protocol", ()=>{
        
        const firstName = "Carlos"
        const lastName = "Rocha"
        const { pacient, priority, protocol } = generateProtocolForPacient(firstName, lastName, true)
        expect(protocol).toBe("12344567-89")
        expect(priority).toBe(true)
        expect(pacient).toBe(`${firstName} ${lastName}`)
    })
})