// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {


  let [글제목, b] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학'])
  let [따봉, c] = useState(0)


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '16px'}}>ReactBlog</h4>
      </div>


      <button onClick={() => {
        let copy = [...글제목]
        copy[0] = '여자 코트 추천'
        b(copy)
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {c(따봉 += 1)}}>좋아요</span> {따봉} </h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
      

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )

}


export default App;
