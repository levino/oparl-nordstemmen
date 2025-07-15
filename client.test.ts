import { describe, it, expect, test } from "vitest"
import { createClient } from "./client"

describe("Client", () => {
	test("There are 7 organizations", async () => {
		const client = createClient()
		await expect((await client.getOrganizations()).data).toHaveLength(25)
	})
})
