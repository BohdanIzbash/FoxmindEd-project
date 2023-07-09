import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AddPosts.module.css";
import { useAppDispatch } from "@/store";
import { postsApi } from "@/query/postsApi";
import { IPosts } from "@/types/Posts";

interface Props {
  posts: IPosts;
}

export const AddPosts: FC<Props> = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IPosts>({
    mode: "onBlur",
  });

  const randomId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const dispatch = useAppDispatch();
  const handleClick: SubmitHandler<IPosts> = (data) => {
    reset();
    dispatch(
      postsApi.util.updateQueryData("getPosts", 10, (draftPosts) => {
        draftPosts.push({
          id: randomId(),
          title: data.title,
          body: data.body,
        });
        return draftPosts;
      })
    );
  };
  return (
    <div className={styles.formField}>
      <h1>Add your post</h1>
      <form className={styles.postForm} onSubmit={handleSubmit(handleClick)}>
        <label>
          Name:
          <input
            className={styles.inputField}
            type="text"
            {...register("title", {
              required: true,
              minLength: {
                value: 4,
                message: "Мінімум 4 символи",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>{errors?.title && <p>Error!</p>}</div>
        <label>
          Your post:
          <input
            className={styles.inputField}
            type="text"
            {...register("body", {
              required: true,
              minLength: {
                value: 4,
                message: "Мінімум 4 символи",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>{errors?.title && <p>Error!</p>}</div>
        <button className={styles.formBtn} type="submit">
          Add post
        </button>
      </form>
    </div>
  );
};
