import React, { useContext } from "react";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { CONTENT_TYPES } from "../../consts";
import { mlNextUtils } from "../../lib/next-utils";
import { LoadFolderModes } from "../../interfaces/parser";
import { contentUtils } from "../../lib/content-utils";
import {
	IMLParsedNode,
	IPageProps,
	MLNODE_TYPES,
} from "../../interfaces/models";
import Layout from "../../components/site/Layout";
import ContentIterator from "../../components/content/dynamic-content-browser/content-iterator";
import usePageData from "../../lib/usePageData";
import { LocaleProvider } from "../../locale/context/locale-context";
import { Button, List } from "@components/ui";

export default function GlossaryTerm(props: IPageProps) {
	const { translate } = useContext(LocaleProvider);
	const { pageData } = usePageData(props);
	const page = pageData && pageData[0];
	const metaData = page?.metaData;
	const node: IMLParsedNode = page && {
		children: page.parsed,
		key: page.id,
		line: -1,
		type: MLNODE_TYPES.UNKNOWN,
	};
	return (
		<Layout title={metaData?.title}>
			<article className="page">
				<Button className="title" link={"/glossary"}>
					{translate("GLOSSARY_NAV_LABEL")}
				</Button>
				<h1 className="title">{translate(metaData?.glossary_key)}</h1>
				<p className="term">{translate(metaData?.glossary_key, "en")}</p>
				{node ? (
					<ContentIterator componentData={{ node }} />
				) : (
					<div className="no-content">(No page content)</div>
				)}
				<List
					className="bibliography"
					label={""}
					items={[
						{
							author: metaData.source_name,
							url: metaData.source_url,
							name: metaData.source_name,
						},
					]}
				/>
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async (context) => {
	return mlNextUtils.getFolderStaticPaths(
		CONTENT_TYPES.GLOSSARY,
		context.locales
	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	return mlNextUtils.getFolderStaticProps(
		`${CONTENT_TYPES.GLOSSARY}/${context.params.id as string}`,
		context.locale,
		LoadFolderModes.FOLDER,
		{
			nodeProcessors: [contentUtils.createPopoverLinksMappingFilter()],
		}
	);
};
