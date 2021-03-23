import { Block } from "@lib/models";

export interface ListBlocksResponse extends Array<Block> { }
export interface ListBlocksOpts {
    page: number
    limit: number
  }
  