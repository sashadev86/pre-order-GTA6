import { useForm, SubmitHandler } from 'react-hook-form';
import styles from "./Home.module.css";

const isSuccess = false;

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const { register, handleSubmit } = useForm<IFormState>();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    // console.log(data);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Форма отправлена</div>
        ) : (
          <>
            <h1>GTA 6 - Оставь заявку</h1>
            <input
              type="name"
              placeholder="Введите имя:"
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Введите Email:"
              {...register("email")}
            />
            <button>Хочу ГТА!</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;
