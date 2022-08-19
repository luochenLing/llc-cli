#!/usr/bin/env node

// 我们对于创建等命令的设定以及一些交互流程等都会在这个入口文件中设置
const { program } = require('commander')
// 远程下载
const download = require('download-git-repo')
// 增加加载效果，不要升级到最新版，不然不支持commentjs
const ora = require('ora')
// 增加文本样式，不要升级到最新版，不然不支持commentjs
const chalk = require('chalk')
// 增加图标，不要升级到最新版，不然不支持commentjs
const logSymbol = require('log-symbols')

program
    .version('1.0.0')

program
    .command('create <project>')
    .description("初始化react脚手架模板，此项目采用的是react18+webpack5+ts")
    .action(function(env) {
        const spinner = ora("正在下载模板中").start()
        const downLoadUrl = 'direct:https://github.com/luochenLing/llc-stage.git#main'
        download(downLoadUrl, env, { clone: true }, err => {
            console.log('哈哈大魔王',env)
            if (err) {
                spinner.fail()
                return console.log(logSymbol.error, chalk.red("下载失败，失败原因：" + err))
            } else {
                spinner.succeed()
                return console.log(logSymbol.success, chalk.green("下载成功"))
            }
        })
    })

program
    .command("help")
    .description("查看所有可用模板")
    .action(function(env) {
        console.log("书写相关帮助信息")
    })

program.parse(process.argv)