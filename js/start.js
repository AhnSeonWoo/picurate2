const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/*var mylink = "";*/

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  if (result === 0){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%B3%B4%EB%93%9C%EC%B9%B4';
  }
  if (result === 1){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EC%9C%84%EC%8A%A4%ED%82%A4';
  }
  if (result === 2){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EC%99%80%EC%9D%B8';
  }
  if (result === 3){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%B8%8C%EB%9E%9C%EB%94%94';
  }
  if (result === 4){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%8D%B0%ED%82%AC%EB%9D%BC';
  }
  if (result === 5){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%9F%BC';
  }
  if (result === 6){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EC%A7%84';
  }
  if (result === 7){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%8B%AC%EB%8B%AC%ED%95%9C%20%EB%A6%AC%ED%81%90%EB%A5%B4';
  }
  if (result === 8){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EC%86%8C%EC%A3%BC';
  }
  if (result === 9){
    mylink = 'https://www.pikurate.com/pik/%EC%96%91%EC%A3%BC%EA%B0%80-%EC%B2%98%EC%9D%8C%EC%9D%B8-%EA%B7%B8%EB%8C%80-%EB%82%98%EC%97%90%EA%B2%8C-%EB%A7%9E%EB%8A%94-%EC%96%91%EC%A3%BC-%EC%B0%BE%EA%B8%B0?category=%EB%A7%A5%EC%A3%BC';
  }
  console.log(result);
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
  }

  function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
      var children = document.querySelectorAll('.answerList');
      for(let i = 0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i < target.length; i++){
          select[target[i]] += 1;
        }

        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      },450)
    }, false);
  }

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
