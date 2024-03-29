/**
 * console.log()를 활용하여 피라미드 모양으로 *을 출력하는 함수를 작성하시오.
 * row: 총 출력할 피라미드 층 수
 * 예시:
 *  pyramid(3);
 *   *
 *  ***
 * *****
 *
 *  pyramid(5);
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */
function pyramid(row) {
  let Star = "*";
  let RepeatedStar = "";
  let Bottom = 2 * row - 1;

  for (let i = 0; i < row; i = i + 1) {
    let padding = (Bottom - (i * 2 - 1)) / 2;
    RepeatedStar =
      " ".repeat(padding) + Star.repeat(1 + 2 * i) + " ".repeat(padding);
    console.log(RepeatedStar);
  }
}

pyramid(3);
pyramid(5);
pyramid(10);
