import path from 'path';

const CONTENT_PATH = 'public/content/';

export const getIndexFileName = (locale: string): string =>
	`index.${locale}.md`;

let rootDir: string;

export function setContentRootDir(root: string): void {
	rootDir = path.join(root, CONTENT_PATH);
}

export function getContentRootDir(root?: string): string {
	return root ? path.join(root, CONTENT_PATH) : rootDir;
}
