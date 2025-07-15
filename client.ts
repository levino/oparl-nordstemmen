import got from "got"

const SYSTEM_URL =
	"https://nordstemmen.ratsinfomanagement.net/webservice/oparl/v1.1/system"

export const createClient = () => {
	return {
		getOrganizations: async () =>
			got(SYSTEM_URL)
				.json()
				.then(({ body }) => got(body).json())
				.then(({ data: [{ organization }] }) => got(organization).json()),
	}
}
