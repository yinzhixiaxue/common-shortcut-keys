# 本文意在带领大家学习如何维护自己的vscode配置

Vim支持很多IDE编辑器，下面👇就举例大家最常用的`vscode`编辑器如何安装Vim

1. 输入command+p(mac写法)，输入`>key`,选择打开键盘快捷方式（不带json）
  ![](https://pic.imgdb.cn/item/62c2a1d95be16ec74a298f9c.png)
2. 然后我们搜索我们想要查看的命令，如果不满足我们的需求(如果你觉得太长了不好记想拥有自己的一套)，我们可以复制并修改
  ![](https://pic.imgdb.cn/item/62c2a1ed5be16ec74a29a853.png)
3. 下面我们来举例修改切换目录的命令
4. 然后我们根据复制的信息区修改我们的keybindings.json文件，首先也是输入command+p(mac写法)，输入`>key`,选择打开键盘快捷方式（带json）
   ![](https://pic.imgdb.cn/item/62c2a00e5be16ec74a27313f.png)
   当前是`shift+command+E`,我们想要修改成`control+;`,我们应该如何操作呢
5. 粘贴然后修改成我们需要的配置形式就可以了，我们未来可以通过这个配置文件维护属于自己的一套属于自己的vscode快捷键了
   ![](https://pic.imgdb.cn/item/62c2a3515be16ec74a2b8621.png)



<!-- [![key.png](https://i.postimg.cc/c1vvJknF/key.png)](https://postimg.cc/5jM473pz) -->

