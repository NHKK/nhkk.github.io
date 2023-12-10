---
title: "New Dev Environment Setup Runbook"
publishedAt: 2023-12-10
description: "Typical things I do when setting up a new dev environment"
slug: "new-dev-setup"
isPublish: true
---

## Disable animations

Disable animations via the following code.
```
defaults write -g NSAutomaticWindowAnimationsEnabled -bool false
defaults write -g NSScrollAnimationEnabled -bool false
defaults write -g NSWindowResizeTime -float 0.001
defaults write -g QLPanelAnimationDuration -float 0
defaults write -g NSScrollViewRubberbanding -bool false
defaults write -g NSDocumentRevisionsWindowTransformAnimation -bool false
defaults write -g NSToolbarFullScreenAnimationDuration -float 0
defaults write -g NSBrowserColumnAnimationSpeedMultiplier -float 0
defaults write com.apple.dock autohide-time-modifier -float 0
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock expose-animation-duration -float 0
defaults write com.apple.dock springboard-show-duration -float 0
defaults write com.apple.dock springboard-hide-duration -float 0
defaults write com.apple.dock springboard-page-duration -float 0
defaults write com.apple.finder DisableAllAnimations -bool true
defaults write com.apple.Mail DisableSendAnimations -bool true
defaults write com.apple.Mail DisableReplyAnimations -bool true
```

## Update Mac System Setting Preference
<ul>
    <li> Disable "Natural Scrolling". </li>
    <li> Keyboard Shortcut - Remove the spotlight shortcut in favor of raycast. </li>
    <li> Dock - Minimize windows using "scaling" NOT "geinie effect". </li>
    <li> Dock - Disable recent apps show in dock. </li>
</ul>

## Software To Install
<ul>
    <li>
        <a href="https://bitwarden.com">Bitwarden</a>
    </li>
    <li>
        <a href="https://brew.sh">Homebrew</a>
    </li>
    <li>
        <a href="https://neovim.io">NeoVim</a>
    </li>
    <li>
        <a href="https://www.raycast.com">Raycast</a>
    </li>
    <li>
        <a href="https://apps.apple.com/us/app/hidden-bar/id1452453066?mt=12">Hidden Bar</a>
    </li>
    <li>
        <a href="https://zellij.dev">Zellij</a>
    </li>
</ul>

## Extensions for Safari
<ul>
    <li>
        Vimari
    </li>
    <li>
        Wipr - adblocker
    </li>
    <li>
        1Blocker - adblocker
    </li>
</ul>

## Zsh Tools and Config

- Zsh Plugin Manager - <a href="https://github.com/zap-zsh/zap">Zap</a>
- Zsh Config 
```
# Created by Zap installer
[ -f "${XDG_DATA_HOME:-$HOME/.local/share}/zap/zap.zsh" ] && source "${XDG_DATA_HOME:-$HOME/.local/share}/zap/zap.zsh"
plug "zsh-users/zsh-autosuggestions"
plug "zap-zsh/supercharge"
plug "zap-zsh/zap-prompt"
plug "zsh-users/zsh-syntax-highlighting"
plug "zap-zsh/vim"

# Load and initialise completion system
autoload -Uz compinit
compinit
```

## Terminal Tools (TUI)

Here are some additional software used in the terminal.

- Bat and Bat Extras 
	> Better alternative to 'cat'. Update alias of 'cat' in favor for "bat".

`alias cat="bat --paging=never"`

- Exa 
	> This is to show icons when showing all folders / files in the terminal. Should update alias to use exa.
```
alias ls="exa --icons"
alias lst="exa --tree --icons --level=2"
```

- <a href="https://hurl.dev"> Hurl </a>
