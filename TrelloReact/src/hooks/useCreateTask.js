/* eslint-disable */

import { useMutation } from "@apollo/client"
import createTaskMutation from '../graphql/mutations/CreateCard'
import getTasks from "../graphql/queries/getTasks";

const useCreateTask = () => {
    const [mutation, {data, error, loading}] = useMutation(createTaskMutation, {
        refetchQueries: [{query: getTasks}]
    });


    const createTask = async (title) => {
        await mutation({variables: {input: {title}}})
    };

    return {
        createTask,
        data,
        error,
        loading
    }
}

export default useCreateTask;