// @ts-check
// Arquivo de configuração do Docusaurus com setup básico e comentários explicativos

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Linha de Montagem 4.0', // Título do site que será exibido no navegador
  favicon: 'img/icon.png', // Caminho do ícone do site, que aparecerá na aba do navegador

  // URL do site em produção — Atualize para o seu domínio real
  url: 'https://seu-dominio-aqui.com', // URL do seu site
  baseUrl: '/', // Caminho base para o site (deixe '/' para o diretório raiz)

  // Configuração para deploy no GitHub Pages (modifique se não usar GitHub)
  organizationName: 'seu-usuario-github', // Seu nome de usuário ou organização no GitHub
  projectName: 'mec-int', // Nome do repositório no GitHub (sem o '.git')

  // Como o Docusaurus lida com links quebrados
  onBrokenLinks: 'throw', // 'throw' lança erro se houver link quebrado
  onBrokenMarkdownLinks: 'warn', // 'warn' avisa sobre links quebrados nos arquivos Markdown

  // Internacionalização: defina o idioma padrão e os idiomas disponíveis
  i18n: {
    defaultLocale: 'en', // Idioma padrão do site
    locales: ['en'], // Idiomas disponíveis
  },

  // Presets para configurar rapidamente o Docusaurus
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Caminho para o arquivo de sidebars dos docs
          editUrl:
            'https://github.com/seu-usuario-github/mec-int/edit/main/', // URL para editar os docs no GitHub
        },
        blog: {
          showReadingTime: true, // Exibe o tempo de leitura dos posts do blog
          feedOptions: {
            type: ['rss', 'atom'], // Gera feeds RSS e Atom
            xslt: true, // Ativa a transformação XSLT no feed
          },
          editUrl:
            'https://github.com/seu-usuario-github/mec-int/edit/main/', // URL para editar posts de blog no GitHub
          onInlineTags: 'warn', // Aviso se houver tags inline inválidas
          onInlineAuthors: 'warn', // Aviso se houver autores inline inválidos
          onUntruncatedBlogPosts: 'warn', // Aviso para posts do blog não truncados
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Caminho para o arquivo de CSS customizado
        },
      }),
    ],
  ],

  // Configurações do tema (personalização visual do site)
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo_3.png', // Imagem para compartilhamento nas redes sociais
      navbar: {
        title: 'Linha de Montagem 4.0', // Título que aparece na barra de navegação
        logo: {
          alt: 'Logo Mec INT', // Descrição do logo
          src: 'img/logo_3.png', // Caminho para o logo
        },
        items: [
          {
            type: 'docSidebar', // Link para a sidebar de documentos
            sidebarId: 'tutorialSidebar', // Verifique se a sidebarId corresponde à do arquivo sidebars.js
            position: 'left', // Posiciona o item à esquerda da navbar
            label: 'Conheça a Linha de Montagem 4.0', // Rótulo do link
          },
          // Adicione outros itens de navegação aqui, como links externos
        ],
      },
      footer: {
        style: 'dark', // Estilo do rodapé (dark ou light)
        links: [
          {
            title: 'Sobre o Projeto', // Título da seção do rodapé
            items: [
              {
                label: 'Clique aqui', // Texto do link
                to: '/docs/intro', // Link para a página inicial dos docs
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mec INT. Built with Docusaurus.`, // Copyright com o ano atual
      },
      prism: {
        theme: prismThemes.github, // Tema de highlight de sintaxe para tema claro
        darkTheme: prismThemes.dracula, // Tema de highlight de sintaxe para tema escuro
      },
    }),
};

export default config;
