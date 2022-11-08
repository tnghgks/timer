// 타이머 구현하기
// 구현문제는 HTML/CSS/Vanilla JS만을 이용하여 풀어주세요!
// 정해진 시간있으니 자신있는 것부터 진행하시면 됩니다!
// JS 기능구현 후 UI 작업을 하셔도 좋고 UI 작업후 기능구현을 하셔도 됩니다.
// [타이머 기능]
// 1. 시간/분/초 입력할 수 있습니다.
// 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
// 3. Pause를 누르면 타이머가 멈춥니다.
// 4. 다시 Start를 누르면 재시작됩니다.
// 5. 0초가 되면 초기화 됩니다.
// 6. Reset을 누르면 초기화 됩니다.

function handleInput(event) {
  $btnStart.classList.add("on");
  $btnReset.classList.add("on");
}
function handleStart(event) {
  event.preventDefault();
  let time = parseInt($inputHrs.value) * 3600 + parseInt($inputMin.value) * 60 + parseInt($inputSec.value);
  $btnPause.textContent = "Pause";
  $btnPause.classList.add("btn-pause");
  $btnReset.insertAdjacentElement("beforebegin", $btnPause);

  if (isNaN(time) || time === 0) {
    return;
  }

  timer = setInterval(function () {
    if (isNaN(time) || time === 0) {
      clearTimeout(timer);
      $inputHrs.value = "00";
      $inputMin.value = "00";
      $inputSec.value = "00";
      $btnStart.classList.remove("on");
      $btnReset.classList.remove("on");
      return;
    }

    time--;

    min = Math.floor(time / 60);
    hour = Math.floor(min / 60);
    sec = time % 60;
    min = min % 60;

    var th = hour;
    var tm = min;
    var ts = sec;

    if (th < 10) {
      th = "0" + hour;
    }
    if (tm < 10) {
      tm = "0" + min;
    }
    if (ts < 10) {
      ts = "0" + sec;
    }

    $inputHrs.value = th;
    $inputMin.value = tm;
    $inputSec.value = ts;
  }, 1000);
}
function handleReset(event) {
  event.preventDefault();
  $inputHrs.value = "00";
  $inputMin.value = "00";
  $inputSec.value = "00";
  $btnStart.classList.remove("on");
  $btnReset.classList.remove("on");
  clearTimeout(timer);
}

function init() {}

const $inputHrs = document.querySelector("#input-hrs");
const $inputMin = document.querySelector("#input-min");
const $inputSec = document.querySelector("#input-sec");

const $btnStart = document.querySelector(".btn-start");
const $btnReset = document.querySelector(".btn-reset");
const $btnPause = document.createElement("button");

let timer;

$inputHrs.addEventListener("input", handleInput);
$inputMin.addEventListener("input", handleInput);
$inputSec.addEventListener("input", handleInput);
$btnStart.addEventListener("click", handleStart);
$btnReset.addEventListener("click", handleReset);
