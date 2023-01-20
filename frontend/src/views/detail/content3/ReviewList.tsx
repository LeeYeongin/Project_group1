import React from "react";
import './ReviewList.css';

const ReviewList = () => {

  const WriteReview = () => {
    window.location.href = "/writeReview";
  }

  return(
      <div className='review5_list'>
          <div className='review5_main'>
            <div className="reviewTitle5"><h3>리뷰제목1</h3></div>
            <div className="ratingStar">
              <div className="star-rating">
                {/* 별점 : 선택 불가능하게 설정해야한다.*/}
                <label className="star"><input type="radio" id="1-stars" name="rating" value="1" /></label>
                <label className="star"><input type="radio" id="2-stars" name="rating" value="2" /></label>
                <label className="star"><input type="radio" id="3-stars" name="rating" value="3" /></label>
                <label className="star"><input type="radio" id="4-stars" name="rating" value="4" /></label>
                <label className="star"><input type="radio" id="5-stars" name="rating" value="5" /></label>
              </div>
            </div>
            <div className="reviewBody">
              <p>리뷰적는란리뷰적는란리뷰적는란<br/>리뷰적는란리뷰적는란리뷰적는란</p>
            </div>
            <div className='reviewSubmit'>
                <button type="button">수정하기</button>
                <button type="button">삭제하기</button>
            </div>
          </div>
          <div className='review5_main'>
            <div className="reviewTitle5"><h3>리뷰제목2</h3></div>
            <div className="ratingStar">
              <div className="star-rating">
                {/* 별점 : 선택 불가능하게 설정해야한다.*/}
                <label className="star"><input type="radio" id="1-stars" name="rating" value="1" /></label>
                <label className="star"><input type="radio" id="2-stars" name="rating" value="2" /></label>
                <label className="star"><input type="radio" id="3-stars" name="rating" value="3" /></label>
                <label className="star"><input type="radio" id="4-stars" name="rating" value="4" /></label>
                <label className="star"><input type="radio" id="5-stars" name="rating" value="5" /></label>
              </div>
            </div>
            <div className="reviewBody">
              <p>리뷰적는란리뷰적는란리뷰적는란<br/>리뷰적는란리뷰적는란리뷰적는란</p>
            </div>
            <div className='reviewSubmit'>
                <button type="button">수정하기</button>
                <button type="button">삭제하기</button>
            </div>
          </div>
          <div className='review5_main'>
            <div className="reviewTitle5"><h3>리뷰제목3</h3></div>
            <div className="ratingStar">
              <div className="star-rating">
                {/* 별점 : 선택 불가능하게 설정해야한다.*/}
                <label className="star"><input type="radio" id="1-stars" name="rating" value="1" /></label>
                <label className="star"><input type="radio" id="2-stars" name="rating" value="2" /></label>
                <label className="star"><input type="radio" id="3-stars" name="rating" value="3" /></label>
                <label className="star"><input type="radio" id="4-stars" name="rating" value="4" /></label>
                <label className="star"><input type="radio" id="5-stars" name="rating" value="5" /></label>
              </div>
            </div>
            <div className="reviewBody">
              <p>리뷰적는란리뷰적는란리뷰적는란<br/>리뷰적는란리뷰적는란리뷰적는란</p>
            </div>
            <div className='reviewSubmit'>
                <button type="button">수정하기</button>
                <button type="button">삭제하기</button>
            </div>
          </div>
          <div className='review5_main'>
            <div className="reviewTitle5"><h3>리뷰제목4</h3></div>
            <div className="ratingStar">
              <div className="star-rating">
                {/* 별점 : 선택 불가능하게 설정해야한다.*/}
                <label className="star"><input type="radio" id="1-stars" name="rating" value="1" /></label>
                <label className="star"><input type="radio" id="2-stars" name="rating" value="2" /></label>
                <label className="star"><input type="radio" id="3-stars" name="rating" value="3" /></label>
                <label className="star"><input type="radio" id="4-stars" name="rating" value="4" /></label>
                <label className="star"><input type="radio" id="5-stars" name="rating" value="5" /></label>
              </div>
            </div>
            <div className="reviewBody">
              <p>리뷰적는란리뷰적는란리뷰적는란<br/>리뷰적는란리뷰적는란리뷰적는란</p>
            </div>
            <div className='reviewSubmit'>
                <button type="button">수정하기</button>
                <button type="button">삭제하기</button>
            </div>
          </div>
          <div className='review5_change'>
              {/* 리뷰 갯수가4개를 넘어가면 버튼이 늘어나며 새롭게 만들어진 리뷰가 생김과 동시에가장 오래된 리뷰가 밀려난다. */}
              <div className="reviewCollect5">
                <button id="cItem" className="selectItem">1</button>
                <button id="cItem" className="">2</button>
                <button id="cItem" className="">3</button>
                <button id="cItem" className="">4</button>
              </div>
              <button type="button" className="writeReview5" onClick={WriteReview}>작성하기</button>
          </div>
      </div>
  );
}

export default ReviewList;