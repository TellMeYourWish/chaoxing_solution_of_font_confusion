# 超星学习通 题目字体反爬解码

:bangbang: 仅支持题目的字体反爬虫加密解码，其他功能需结合其他脚本实现

模拟[超星学习通小助手[章节、作业、考试] 优化课程切换|支持新版](https://greasyfork.org/zh-CN/scripts/435357-%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E5%B0%8F%E5%8A%A9%E6%89%8B-%E7%AB%A0%E8%8A%82-%E4%BD%9C%E4%B8%9A-%E8%80%83%E8%AF%95-%E4%BC%98%E5%8C%96%E8%AF%BE%E7%A8%8B%E5%88%87%E6%8D%A2-%E6%94%AF%E6%8C%81%E6%96%B0%E7%89%88)提供的字体反爬解码后端

灵感源于[字体映射反爬](https://www.bilibili.com/read/cv14855149/)


## :books: 使用方法

### 启动后端
1. 提前准备： Python版本3.x
2. `git clone https://github.com/TellMeYourWish/chaoxing_solution_of_font_confusion` 项目至本地
3. `cd chaoxing_solution_of_font_confusion`
4. `pip install -r requirements.txt`
5. `python3 server.py` 运行程序

### 添加前端
直接copy```./超星解码.js```代码添加到油猴