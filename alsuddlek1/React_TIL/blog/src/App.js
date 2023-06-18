/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  // 변수와 state의 차이
  // state : html에 자동 재렌더링(반영) 해줌

  const post = '강남 우동 맛집';
  // const [a, b] = useState('남자 코트 추천')
  // a : state에 보관했던 자료 나옴
  // b : state 변경을 도와주는 함수

  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  const [하트, 하트수] = useState(0);
  // const [제목, 제목바꾸기] = useState(글제목[0])

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red'} }>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        const copyarray = [...글제목]
        const newarray = copyarray.sort()
        글제목변경((newarray))
      }}>
      가나다순 정렬</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{하트수(하트+1)}}>❤</span> {하트} </h4>
        <p>2월17일 발행</p>
        {/* <span onClick={() => {제목바꾸기('여자 코트 추천')}}>🧡</span> */}
        <button onClick={()=>{
          const copy = [...글제목]
          copy[0] = '여자코트 추천'
          글제목변경((copy))
        }}>글수정</button>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월17일 발행</p>
      </div>
      
      <Modal></Modal>

      <h4>{ post }</h4>
    </div>
  );
}

// 이렇게도 가능!
// const Modal = ()=>{
//   return(
//     <div></div>
//   )
// }

// 반복적인 html 축약할때
// 큰 페이지
// 자주 변경될 때
function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
