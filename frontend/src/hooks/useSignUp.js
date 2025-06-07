import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";
import {toast} from "react-hot-toast"

const useSignUp = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }, toast.success("User account created successfully!")),
  });

  return { isPending, error, signupMutation: mutate };
};
export default useSignUp;
