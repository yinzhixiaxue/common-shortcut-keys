# Vim练习第一天

## 学习Vim的两种基础模式

vi/vim 分为**normal模式**，**输入模式（Insert 模式）**。 我们进行一个逐步的学习

### normal模式

用户刚刚启动 vi/vim，便进入了normal模式。

此状态下敲击键盘动作会被`Vim`识别为`命令`，而非输入字符。命令模式大体上可以理解为只能控制光标的移动已经模式的切换的模式

下面学习一下normal模式下基本的移动命令

- `h`左移动
- `l`右移动
- `j`下移动
- `k`上移动

### insert模式

在normal模式下按下`i`就进入了insert模式。此时你就可以在键盘上输入一些文字了

一些基本输入模式下的快捷键

- `i` 进入输入模式，在字符前插入文字
- `a` 进入输入模式，在字符后插入文字
- `esc`或者`control+[` 为退出insert模式，进入normal模式

## 在终端中一些常见快捷键

- `:wq`退出并保存
- `:q!`强制退出 不保存

## 如何快速移动

1. 进入 https://github.com/VSCodeVim/Vim#mac  这个网站
2. 以此复制如下的命令，在自己电脑的终端中敲下即可（mac）

```shel
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false              # For VS Code
$ defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false      # For VS Code Insider
$ defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false         # For VS Codium
$ defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool false   # For VS Codium Exploration users
$ defaults delete -g ApplePressAndHoldEnabled                                           # If necessary, reset global default
```

3. 重启vim，这样你就能连续按hjkl在命令模式中快速移动了

## tips
习惯insert 完 就⽴⻢回到 normal 模式
