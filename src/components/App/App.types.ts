import { Node } from '../../graphql/queries/getRepositoriesByQuery';

/**
 *  The repository data.
 */
export type RepositoryData = Omit<Node['node'], 'owner'> & { owner: string };

/**
 *  The results to be rendered on the table.
 */
export type Results = RepositoryData[];
