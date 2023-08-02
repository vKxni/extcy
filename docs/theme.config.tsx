import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
	logo: (
		<>
			<img src="https://github.com/vKxni/extcy/raw/main/exts.png" alt="Extcy Logo" width="24" height="24" />
			&nbsp;
			<span>Extcy</span>
		</>
	),
	project: {
		link: 'https://github.com/vKxni/extcy',
	},
	head: () => {
		const { frontMatter } = useConfig();

		return (
			<>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content={frontMatter.title ? frontMatter.title + ' | Extcy' : 'Extcy'} />
				<meta property="og:description" content={frontMatter.description || 'Powerful functional Elixir composition for TypeScript.'} />
				<meta property="og:image" content="https://github.com/vKxni/extcy/raw/main/exts.png" />
				<meta property="og:url" content="https://extcy.vercel.app/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@vKxni" />
				<meta name="twitter:title" content={frontMatter.title ? frontMatter.title + ' | Extcy' : 'Extcy'} />
				<meta name="twitter:description" content={frontMatter.description || 'Powerful functional Elixir composition for TypeScript.'} />
				<meta name="twitter:image" content="https://github.com/vKxni/extcy/raw/main/exts.png" />
				<link rel="icon" href="https://github.com/vKxni/extcy/raw/main/exts.png" />
				<link rel="apple-touch-icon" href="https://github.com/vKxni/extcy/raw/main/exts.png" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" />
			</>
		);
	},
	docsRepositoryBase: 'https://github.com/vKxni/extcy',
	footer: {
		text: 'Extcy - by Nextra Docs',
	},
	primaryHue: 180,
};

export default config;
