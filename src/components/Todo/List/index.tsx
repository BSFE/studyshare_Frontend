import { TodoListStyle } from "./style";

const TodoList = () => {
  return (
    <>
      <div css={TodoListStyle}>
        <div className="todolistInfo">
          <div className="todolistInfo-text">
            <h4>20211010</h4>
            <p>오늘은 공부를 꼭 할 것이다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;