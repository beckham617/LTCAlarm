#-*-coding:utf-8-*-

import httplib,time,json,os

conn=httplib.HTTPSConnection('www.okcoin.com')

while(True):
    conn.request('GET','https://www.okcoin.com/api/ticker.do?symbol=ltc_cny')
    os.system("cls")
    res=conn.getresponse()
    if res.status == 200:
        result=res.read()
        data=json.loads(result)['ticker']
        print u'最高:\t\t'+data['high']
        print u'最低:\t\t'+data['low']
        print u'买一:\t\t'+data['buy']
        print u'卖一:\t\t'+data['sell']
        print u'最后成交价:\t'+data['last']
        print u'24小时成交量:\t'+data['vol']
    else:
        print '╮(╯▽╰)╭'
    time.sleep(5)
