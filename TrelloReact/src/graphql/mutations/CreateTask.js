import gql from "@apollo/client";
import task from "../fragments/tasks";

export default gql `
    mutation createTask($input: CreateTaskInput){
        createTask(input: $input) {
            ...TaskFragment
        }
    }
${task}
`;