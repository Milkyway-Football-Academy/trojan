import  { ContentfulClientApi, createClient } from 'contentful';

export class ContentfulClient {
    private client: ContentfulClientApi<any>;

    constructor(spaceId?: string) {
        this.client = createClient({
            space: spaceId || process.env.CONTENTFUL_SPACE_ID || '',
            environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
            accessToken: process.env.CONTENTFUL_API_KEY || '',
        });
    }

    async getEntries<T>(entryId: string): Promise<T[]> {
        const entries = await this.client.getEntries({content_type: entryId});
        return entries.items.length ? entries.items.map((ent) => ent.fields) as T[] : [] as T[]
    }

    async getEntryBySlug<T> (entryId: string, slug: string): Promise<T> {
        const entries = await this.client.getEntries({content_type: entryId, 'fields.slug': slug, limit: 1});
        return entries.items[0].fields as T
    }

    async getEntry<T>(entryId: string, query?: Record<string, string>): Promise<T> {
        return (await this.client.getEntry(entryId, query)).fields as T
    }



    async getAssets<T>(assetId: string): Promise<T> {
        const asset = await this.client.getAsset(assetId);
        return asset.fields as T;
    }
}
