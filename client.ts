import got from "got"

const SYSTEM_URL =
	"https://nordstemmen.ratsinfomanagement.net/webservice/oparl/v1.1/system"

interface Config {
	systemUrl?: string
}

export const createClient = ({ systemUrl }: Config) => {
	return {
		getOrganizations: async () =>
			got(systemUrl)
				.json()
				.then(({ body }) => got(body).json())
				.then(({ data: [{ organization }] }) => got(organization).json()),
	}
}
