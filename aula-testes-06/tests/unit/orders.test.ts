import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    jest.spyOn(orderRepository, "create").mockImplementationOnce((): any =>{
      return {
        protocol: "124342432",
        status: "READY"
      }
    })
    const order = await createOrder({
      client: "Cliente",
      description: "Descriçãp"
    })
    expect(order.protocol).toBe("124342432")
    expect(order.status).toBe("READY")
  });

  it("should return an order based on the protocol", async () => {
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any =>{
      return {
        protocol: "123456",
        status: "READY"
      }
    })
    const {protocol, status} = await getOrderByProtocol("123456")
    expect(protocol).toBe("123456");
    expect(status).toBe("READY");
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((): any =>{
      return undefined
    })
    const {protocol, status} = await getOrderByProtocol("123456")
    expect(protocol).toBe("123456")
    expect(status).toBe("INVALID")
    expect(true).toBe(true);
  });
});