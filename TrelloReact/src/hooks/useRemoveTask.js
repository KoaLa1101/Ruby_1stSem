/* eslint-disable */

import { useMutation } from "@apollo/client"
import removeTaskMutation from '../graphql/mutations/RemoveCard'
import getTasks from "../graphql/queries/getTasks";

const useRemoveTask = () => {
    const [mutation, {data, error, loading}] = useMutation(removeTaskMutation, {
        refetchQueries: [{query: getTasks}]
    });

    const removeTask = async (id) => {
        console.log(error);
        await mutation({variables: {input: {id}}})
    };

    return {
        removeTask,
        data,
        error,
        loading
    }
}

export default useRemoveTask;