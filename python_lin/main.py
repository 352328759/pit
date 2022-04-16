#!/usr/bin/python
# -*- coding: UTF-8 -*-

# input("按下 enter 键退出，其他任意键显示...\n")
# https://www.runoob.com/python/python-basic-syntax.html

import openpyxl

openpyxl.load_workbook("1.xlsx", data_only=True)
