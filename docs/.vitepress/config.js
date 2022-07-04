import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "银之夏雪的博客",
  description: "Vite & Vue powered static site generator.",
  lastUpdated: true,
  base: "/",

  themeConfig: {
    repo: "yinzhixiaxue/common-shortcut-keys",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: false,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    nav: [
      { text: "Start", link: "/shortcut/home", activeMatch: "^/$|^/shortcut/" },
      {
        text: "About ME",
        link: "https://github.com/yinzhixiaxue",
      },
    ],

    sidebar: {
      // "/vim/": getVimSidebar(),
      // "/vscode/": getVscodeSidebar(),
      // "/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: "欢迎大家一起学习快捷键",
      // link: "/shortcut/home",
    },
    {
      text: "我们开始Vim的学习吧～👀",
      link: "/shortcut/vim/index",
      children: [
        { text: "什么是Vim", link: "/shortcut/vim/什么是Vim" },
        { text: "安装Vim", link: "/shortcut/vim/安装Vim" },
        { text: "Vim练习第一天", link: "/shortcut/vim/Vim练习第一天" },
        { text: "Vim练习第二天", link: "/shortcut/vim/Vim练习第二天" },
        { text: "Vim练习第三天", link: "/shortcut/vim/Vim练习第三天" },
        { text: "Vim练习第四天", link: "/shortcut/vim/Vim练习第四天" },
        { text: "Vim练习第五天", link: "/shortcut/vim/Vim练习第五天" },
        { text: "Vim备忘录清单", link: "/shortcut/vim/Vim备忘录清单" },
        { text: "Vim练习第六天", link: "/shortcut/vim/Vim练习第六天" },
        { text: "Vim练习第十三天", link: "/shortcut/vim/Vim练习第十三天" },
        { text: "Vim练习第十四天", link: "/shortcut/vim/Vim练习第十四天" },
      ],
    },
    {
      text: "我们开始vscode的学习吧～👀",
      link: "/shortcut/vscode/index",
      children: [
        {
          text: "vscode相关配置",
          link: "/shortcut/vscode/index",
        },
        {
          text: "vscode文件与窗口基本操作",
          link: "/shortcut/vscode/文件与窗口基本操作",
        },
      ],
    },
  ];
}

// function getVscodeSidebar() {
//   return [
//     {
//       text: "我们开始vscode的学习吧～👀",
//       link: "/vscode/index",
//       children: [
//         { text: "文件与窗口基本操作;", link: "/vscode/文件与窗口基本操作" },
//         { text: "安装Vim", link: "/vim/安装Vim" },
//         { text: "Vim练习第一天", link: "/vim/Vim练习第一天" },
//         { text: "Vim练习第二天", link: "/vim/Vim练习第二天" },
//         { text: "Vim练习第三天", link: "/vim/Vim练习第三天" },
//         { text: "Vim练习第四天", link: "/vim/Vim练习第四天" },
//         { text: "Vim练习第五天", link: "/vim/Vim练习第五天" },
//         { text: "Vim备忘录清单", link: "/vim/Vim备忘录清单" },
//         { text: "Vim练习第六天", link: "/vim/Vim练习第六天" },
//         { text: "Vim练习第十三天", link: "/vim/Vim练习第十三天" },
//         { text: "Vim练习第十四天", link: "/vim/Vim练习第十四天" },
//       ],
//     },
//   ];
// }
