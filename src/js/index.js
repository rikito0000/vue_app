import { polyfill } from './modules/_polyfill';
// import { viewport } from './modules/_viewport';
// import { btnClickFunc } from './modules/_btnClickFunc';
// import { getSearchParams } from './modules/_getSearchParams';
// import { accordion } from './modules/_accordion';
// import { backToTop } from './modules/_backToTop';
// import { checkView } from './modules/_checkView';
// import { customSelect } from './modules/_customSelect';
// import { modal } from './modules/_modal';
import { smoothScroll } from './modules/_smoothScroll';
// import { stickyHeader } from './modules/_stickyHeader';
// import { swiperSlider } from './modules/_swiperSlider';
// import { wowEffects } from './modules/_wowEffects';
// import { smoothScrollVs } from './modules/_smoothScrollVs';
// import { sampleArray } from './modules/_sampleArray';

$(function(){
  polyfill();
  smoothScroll();
  // smoothScrollVs()
  // sampleArray();
  // viewport();
  // btnClickFunc();
  // wowEffects();
  // accordion();
  // swiperSlider();
  // customSelect();
  // backToTop();
  // modal();
});

// $(window).on('load resize scroll', function () {
//   checkView();
//   stickyHeader();
// });


const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: '',
    message: '',
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true,
    },
    largeClass2: {
      'large': true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    }
  }),

  watch: {
    keyword: function (newKeyword, oldKeyword) {
      // console.log(newKeyword, oldKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  mounted: function() {
    // this.keyword = 'Javascript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function () {
      if (this.keyword === '') {
        console.log('karmaoji')
        this.items = null
        return
      }

      this.message = 'Loading...'
      const vm = this
      const params = {page: 1, per_page: 20, query: this.key }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function (response) {
            vm.items = response.data
        })
        .catch(function(error) {
          vm.message = 'Error!' + error
        })
        .finally(function () {
          vm.message = ''
        })
    }
  }
})
app.mount('#app')


const arry1 = ['apple', 'orange', 'strawberry', 'orange', 'banana']
const arry2 = ['melon', 'peach']
console.log(arry1);
console.log(arry2);
console.log(arry1.concat(arry2));
console.log(arry1.length);
console.log(arry2.length);
console.log(arry1.slice(1));
console.log(Array.isArray(arry1));
console.log(arry1.toString());
console.log(arry1.indexOf('orange'));
console.log(arry1.lastIndexOf('orange'));
console.log(arry1.slice(0, 3));
console.log(arry1);
console.log(arry2.push('grape'));
console.log(arry2);
console.log(arry2.shift());


// 配列のforEachメソッド
const data = [2,3,4,5];
data.forEach(function(value, index, array) {
  console.log(value * value);
  console.log(array);
  console.log(index);
})

// 配列のmapメソッドは結果を戻り値で返す
const data2 = [2, 3, 5, 7];
const result = data2.map(function(value, index, array) {
  return value * value;
  // console.log(value);
});
console.log(result);


// 配列のsomeメソッドは真偽値を返す
const data3 = [4, 9, 16, 25];
data3.some(function(value, index, array) {
  return value % 3 === 0;
})
if(result) {
  console.log('さんの倍数が見つかりました。')
} else {
  console.log('見つかりませんでした。')
}


//配列のfliterメソッドは結果を配列に書き戻す
const data4 = [4, 9, 16, 25];
const dataResult = data4.filter(function(value, index, array) {
  return value % 2 === 1;
});
console.log(dataResult);


//連想配列を操作するmapメソッド
let m = new Map();
m.set('dog', 'わんわん');
m.set('cat', 'にゃー');
m.set('mouse', 'チュー');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

for(let key of m.keys()) {
  console.log(key);
}

for(let value of m.values()) {
  console.log(value);
}

for(let [key, value] of m) {
  console.log(value);
}

m.delete('dog');
console.log(m.size);

m.clear();
console.log(m.size);

const obj = new Object();
const dat = new Date();
const ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
const num = 10;

console.log(obj.toString());
console.log(obj.valueOf());
console.log(dat.toString());
console.log(dat.valueOf());
console.log(ary.toString());
console.log(ary.valueOf());
console.log(num.toString());
console.log(num.valueOf());