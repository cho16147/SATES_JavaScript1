/**
 * 1부터 100까지 순회하며 각 숫자마다
 * 3의 배수는 "Fizz",
 * 5의 배수는 "Buzz",
 * 3과 5의 공배수는 "FizzBuzz",
 * 그 외의 숫자는 해당 숫자로 console.log()를 사용하여 출력하는 함수를 작성하시오.
 *
 * 예시:
 *  1
 *  2
 *  Fizz
 *  4
 *  Buzz
 *  ...
 *  14
 *  FizzBuzz
 *  16
 *  ...
 *  98
 *  Fizz
 *  Buzz
 */
function fizzBuzz() {
  let i = 0;
  while (i < 100) {
    i = i + 1;
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
