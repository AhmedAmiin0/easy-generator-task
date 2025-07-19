import type { HttpMethod } from "@easy-generator/types"

export interface EndpointConfig {
    url: string;
    method: HttpMethod;
}