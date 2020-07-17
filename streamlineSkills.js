
//原链接可参考
https://segmentfault.com/a/1190000020783448?utm_source=sf-related
1、删除数组重复项
  
 1、第一种方式
var arr=     ['aa','bb','cc','dd','cc','aa','ee','bb','aa’];
var uniArr2=[...new Set(arr)] ;
console.log( uniArr2)//['aa','bb','cc','dd','ee'];
2、第二种方式
var arr=['aa','bb','cc','dd','cc','aa','ee','bb','aa’];
var uniArr=Array.from(new Set(arr)) ;
console.log( uniArr)//['aa','bb','cc','dd','ee'];

2、替换数组中的特定值
var arr=['小智0','小智1','小智2','小智3','小智4'];
arr.splice(0,2,'小智替换位置0', '小智替换位置1');
console.log(arr)//['小智替换位置0’,'小智替换位置1','小智2’,’小智3’,'小智4'];
            从哪里开始修改、修改多少个值和替换新值。
Array.splice(start、value to remove、valueToAdd)
3、Array.from 达到.map的效果
var arr=[{name:'小智0',age:22},{name:'小智1',age:23},{name:'小智2',age:24},{name:'小智3',age:24},{name:'小智4',age:25}];
var friend= arr.from(arr,({name})=>name)
console.log(friend)// ['小智0','小智1','小智2','小智3','小智4'];
 
4、置空数组  
var arr=[{name:'小智0',age:22},{name:'小智1',age:23},{name:'小智2',age:24},{name:'小智3',age:24},{name:'小智4',age:25}];
arr.length=0;
console.log(arr)//[];
5、数组转换为对象 
var arr=['小智0','小智1','小智2','小智3','小智4'];
var arrObj={...arr };
console.log(arrObj);//{0: "小智0", 1: "小智1", 2: "小智2", 3: "小智3", 4: "小智4"}

6、数据填充数组 
var newArray=new Array(10).fill('2’);
console.log( newArray);//["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
7、数组合并
var fruits=['apple','banner','orange’];
var meat=['poultry','beef','fish’];
var vegettables=['potato','tomato’];
var foot=[...fruits,...meat,...vegettables];
console.log( foot)
//["apple", "banner", "orange", "poultry", "beef", "fish", "potato", "tomato"]
8、求两个数组的交集
var numOne=[0,2,4,6,8,8];
var numTwo=[1,2,3,4,5,6];
var duplicat=[...new Set(numOne)].filter(item=>numTwo.includes(item));
console.log( duplicat )
//[2, 4, 6]
9、从数组中删除虚值
var mixedArr=[0,'blue','',NaN,9,true,undefined,'white',false];
var trueArr=mixedArr.filter(Boolean);
console.log( trueArr);
//["blue", 9, true, "white”]
在 JS 中，虚值有 false, 0，''， null, NaN, undefined。咱们可以 .filter() 方法来过滤这些虚值。
10、从数组中获取随机值
var arr=['小智随机0','小智随机1','小智随机2','小智随机3','小智随机4'];
var randomArr=arr[( Math.floor(Math.random() *(arr.length) ) )  ];
console.log( randomArr)
//小智随机2
11、反转数组
var arr=['小智随机0','小智随机1','小智随机2','小智随机3','小智随机4']; 
var reverseArr=arr.reverse();
console.log( reverseArr )
//["小智随机4", "小智随机3", "小智随机2", "小智随机1", "小智随机0"]
12、lastIndexOf() 方法
var numOne=[1,5,2,6,3,5,2,3,6,5,2,7];
var lastIndex= numOne.lastIndexOf(5)
console.log( lastIndex )
//9
str.lastIndexOf(searchValue[, fromIndex]) 
 lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。
该方法将从尾到头地检索字符串 str，看它是否含有子串 searchValue。开始检索的位置在字符串的 fromIndex 处或字符串的结尾（没有指定 fromIndex 时）。如果找到一个 searchValue，则返回 searchValue 的第一个字符在 str 中的位置。str中的字符位置是从 0 开始的。
13、对数组中的所有值求和
var nums=[1,5,6,7]; 
var sum = nums.reduce((x,y)=> x+y);
console.log(sum);//19
14、js数组reduce()方法详解
 原文链接：
https://segmentfault.com/a/1190000010731933
var result = [{
       subject: 'math',
       score: 88
    }, {
       subject: 'chinese',
       score: 95
    }, {
       subject: 'english',
       score: 80
}];
var dis = { math: 0.5, chinese: 0.3, english: 0.2 }
var sum = result.reduce(function(prev, cur) {
        return cur.score + prev;
}, -10); 
var qsum = result.reduce(function(prev, cur) { 
        return cur.score * dis[cur.subject] + prev;
}, 0) 
console.log(sum, '占比：' + sum);
15、获得两个日期之间的差异（以天为单位）
//https://juejin.im/post/5e5ef2f9f265da57685dc9c1 （可参考）
getDaysDiffBetweenDates function (dateInitial, dateFinal) => 
(dateFinal - dateInitial) / (1000 * 3600 * 24); 
// 事例 
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
 
16、将字符串复制到剪贴板？
 const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
// 事例
copyToClipboard('Lorem ipsum'); 
// 'Lorem ipsum' copied to clipboard
17、将一组表单元素转化为对象？
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
// 事例
formToObject(document.querySelector('#form')); 
// { email: 'test@email.com', name: 'Test Name' }
 

18、如何创建一个包含当前URL参数的对象？
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

// 事例
getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {}

 19、// 最近两周时间
function newStart(dataDay){
    var dataList=[];
    for(var dataId=0;dataId<dataDay;dataId++){
        var date = new Date(new Date().getTime() - dataId * 24 * 3600 * 1000);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        dataList.unshift(year + '/' + month + '/' + day)    
    }
    return dataList;
}
20、// 数字千分位 格式化
 formatNumber  function(num) {
    if (isNaN(num)) {
        throw new TypeError("num is not a number");
    }
    return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
}




