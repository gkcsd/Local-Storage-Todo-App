import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please Fill Some Values");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };
  return (
    <Form>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Your Todos"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success" onClick={handleSubmit}>
              Add Todo
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default TodoForm;
