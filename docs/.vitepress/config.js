import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "常用快捷键通关小册",
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
      { text: "Start", link: "/vim", activeMatch: "^/$|^/vim/" },
      {
        text: "About ME",
        link: "https://github.com/sudongyuer",
      },
    ],

    sidebar: {
      "/vim/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: "开始我们Vim学习吧～👀",
      link: "/vim/index",
      children: [
        { text: "什么是Vim", link: "/vim/什么是Vim" },
        { text: "安装Vim", link: "/vim/安装Vim" },
        { text: "Vim练习第一天", link: "/vim/Vim练习第一天" },
        { text: "Vim练习第二天", link: "/vim/Vim练习第二天" },
        { text: "Vim练习第三天", link: "/vim/Vim练习第三天" },
        { text: "Vim练习第四天", link: "/vim/Vim练习第四天" },
        { text: "Vim练习第五天", link: "/vim/Vim练习第五天" },
        { text: "Vim备忘录清单", link: "/vim/Vim备忘录清单" },
        { text: "Vim练习第六天", link: "/vim/Vim练习第六天" },
      ],
    },
  ];
}
