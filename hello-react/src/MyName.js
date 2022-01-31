import React from 'react'; //노드 모듈안에 있는 것을 가져옴
import PropTypes from 'prop-types';

class MyName extends React.Component {
  constructor(props) {
    super(props); //무조건 호출
    this.state = {
      liked: 0,
    };
  }
  static defaultProps = {
    name: '임재형',
  };
  render() {
    const { name, favoritenum } = this.props;
    return (
      <>
        <h1>
          안녕하세요! 제 이름은 <b>{name}</b>입니다.
        </h1>
        <h2>제가 제일 좋아하는 숫자는 {favoritenum}입니다.</h2>
        좋아요 : {this.state.liked}
        <br></br>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                liked: prevState.liked + 1,
              }),
              () => {
                console.log(this.state);
                alert('SetState 호출됨');
              },
            );
          }}
        >
          좋아요
        </button>
      </>
    );
  }
}

//name의 타입을 지정
MyName.propTypes = {
  name: PropTypes.string,
  //favoritenum: PropTypes.number.isRequired,
};

export default MyName;
