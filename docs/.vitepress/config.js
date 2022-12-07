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
      // {
      //   text: "前端基础",
      //   link: "/blog/fe/",
      //   activeMatch: "^/$|^/fe/",
      // },
      {
        text: "js基础",
        link: "/blog/javascript/",
        activeMatch: "^/$|^/javascript/",
      },
      { text: "前端部署", link: "/blog/docker/", activeMatch: "^/$|^/docker/" },
      {
        text: "键盘侠",
        link: "/blog/shortcut/",
        activeMatch: "^/$|^/shortcut/",
      },
      {
        text: "About ME",
        link: "https://github.com/yinzhixiaxue",
      },
    ],

    sidebar: {
      // "/vim/": getVimSidebar(),
      // "/vscode/": getVscodeSidebar(),
      // "/": getGuideSidebar(),
      // "blog/shortcut": getGuideSidebar(),
      "/blog/shortcut": getGuideSidebar(),
      "/blog/docker": getDockerSidebar(),
      "/blog/javascript/": getJSSidebar(),
      // "/blog/fe": getJFeSidebar(),
    },
  },
});

function getDockerSidebar() {
  return [
    {
      text: "docker",
      link: "/blog/docker/index",
      children: [
        { text: "docker基础", link: "/blog/docker/docker基础" },
        { text: "静态资源服务器", link: "/blog/docker/静态资源服务器" },
        { text: "docker2", link: "/blog/docker/docker2" },
        // { text: "docker基础", link: "/blog/docker/docker基础" },
      ],
    },
  ];
}

function getJSSidebar() {
  return [
    {
      text: "前端基础",
      link: "/blog/javascript/index",
      // children: [
      //   {
      //     text: "json",
      //     link: "/blog/javascript/json",
      //   },
      // ],
    },
    {
      text: "json",
      link: "/blog/javascript/json",
    },
    {
      text: "数组",
      link: "/blog/javascript/数组",
    },
  ];
}
function getGuideSidebar() {
  return [
    {
      text: "欢迎大家一起学习快捷键",
      link: "/blog/shortcut/index",
    },
    {
      text: "我们开始Vim的学习吧～👀",
      link: "/blog/shortcut/vim/index",
      children: [
        { text: "什么是Vim", link: "/blog/shortcut/vim/什么是Vim" },
        { text: "安装Vim", link: "/blog/shortcut/vim/安装Vim" },
        { text: "Vim练习第一天", link: "/blog/shortcut/vim/Vim练习第一天" },
        { text: "Vim练习第二天", link: "/blog/shortcut/vim/Vim练习第二天" },
        { text: "Vim练习第三天", link: "/blog/shortcut/vim/Vim练习第三天" },
        { text: "Vim练习第四天", link: "/blog/shortcut/vim/Vim练习第四天" },
        { text: "Vim练习第五天", link: "/blog/shortcut/vim/Vim练习第五天" },
        { text: "Vim备忘录清单", link: "/blog/shortcut/vim/Vim备忘录清单" },
        { text: "Vim练习第六天", link: "/blog/shortcut/vim/Vim练习第六天" },
        { text: "Vim练习第十三天", link: "/blog/shortcut/vim/Vim练习第十三天" },
        { text: "Vim练习第十四天", link: "/blog/shortcut/vim/Vim练习第十四天" },
      ],
    },
    {
      text: "我们开始vscode的学习吧～👀",
      link: "/blog/shortcut/vscode/index",
      children: [
        {
          text: "vscode相关配置",
          link: "/blog/shortcut/vscode/index",
        },
        {
          text: "vscode文件与窗口基本操作",
          link: "/blog/shortcut/vscode/文件与窗口基本操作",
        },
        {
          text: "vscode多窗口操作",
          link: "/blog/shortcut/vscode/多窗口操作",
        },
        {
          text: "vscode掌握搜索",
          link: "/blog/shortcut/vscode/掌握搜索",
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
