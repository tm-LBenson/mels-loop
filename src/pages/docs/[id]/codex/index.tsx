import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { GenericPage } from 'lib/dynamic-content';
import { mlNextUtils } from 'lib/next-utils/nextUtils';
import { contentUtils } from 'lib/content-utils/contentUtils';
import { ContentTypes } from 'consts';
import { LoadContentModes, LoadFolderModes } from 'types/parser';
import { IPageProps } from 'types/models';

export default function Doc(props: IPageProps) {
	return <GenericPage pageProps={props} />;
}

export const getStaticPaths: GetStaticPaths = async (context) =>
	mlNextUtils.getFolderStaticPaths(ContentTypes.Docs, context.locales);

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) =>
	mlNextUtils.getFolderStaticProps(
		`${ContentTypes.Docs}/${context.params.id as string}/codex`,
		context.locale,
		LoadFolderModes.Folder,
		{
			contentMode: LoadContentModes.Full,
			nodeProcessors: [contentUtils.createPopoverLinksMappingFilter()],
		}
	);
