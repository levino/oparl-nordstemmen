import { describe, it, expect, test } from "vitest"
import { createClient } from "./client"

describe("Client", () => {
	test("There are 25 or more organizations in Nordstemmen", async () => {
		const client = createClient({
			systemUrl:
				"https://nordstemmen.ratsinfomanagement.net/webservice/oparl/v1.1/system",
		})
		await expect((await client.getOrganizations()).data).toHaveLength(25)
	})
	test("There are 20 organizations in Bonn", async () => {
		const client = createClient({
			systemUrl: "https://www.bonn.sitzung-online.de/oparl/system",
		})
		await expect((await client.getOrganizations()).data).toHaveLength(20)
	})
}, 20_000)
