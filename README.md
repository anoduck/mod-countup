# Hinode Module - Countup

<!-- Tagline -->
<p align="center">
    <b>A Hugo module for [Hinode](https://github.com/gethinode/hinode) providing a shortcode for an upwards counting timer</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/anoduck/mod-countup/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-countup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-countup/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-countup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-countup/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-countup.svg">
    </a>
    <a href="https://github.com/anoduck/mod-countup/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-countup">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. <!-- This repository maintains a Hugo module to add [module][module] to a Hinode site. --> Visit the Hinode documentation site for [installation instructions][hinode_docs].

## What is a count up timer?

Normally when we refer to a timer, we are referring to a countdown timer, that is a timer that counts downwards the amount of time left before an event is to occur. A countup timer does the exact opposite of that, it counts upwards the amount of time that has passed since an event has occurred. Countup timers are used to recognize the passage of time from a significant event.

## Usage

Since it is a shortcode, all that needs to be done is add the shortcode to the desired page and provide the arguement `date`.
The time/date formatting needs to be one that can be formatted by Hugo's `time.astime` method, basically `YYY-MM-DDTHH:MM:SS-offset` where offset is the offset hours of the local timezone. An example of how to use the shortcode is provided below.

```html
{{< countup date="2023-01-01T08:00:00-0600" >}}
```

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

<!-- ## Configuration

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------| -->

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
<!-- [module]: https://example.com -->
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
