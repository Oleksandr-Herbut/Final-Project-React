import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendFormData, sendOrderData } from "../store/actionCreators";
import { useState } from "react";
import { DialogComponent } from "./cart/DialogComponent";

export const OrderForm = ({ type, handleClickOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // Состояние для открытия/закрытия модального окна
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit = (data) => {
    if (type === "main") {
      dispatch(sendFormData(data));
    } else {
      dispatch(sendOrderData(data));
    }

    // Открываем модальное окно после отправки данных
    setIsDialogOpen(true);

    if (handleClickOpen) {
      handleClickOpen();
    }
  };

  return (
    <>
      <form className={"cartForm"} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, minLength: 2 })}
        />
        {errors.name && <span>Name should be at least two letters long</span>}
        <input
          type="number"
          placeholder="Phone number"
          {...register("phoneNumber", { required: true, minLength: 7 })}
        />
        {errors.phoneNumber && (
          <span>Phone should be at least seven digits long</span>
        )}
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}
        <button type="submit">Order</button>
      </form>

      {/* Модальное окно */}
      <DialogComponent open={isDialogOpen} setOpen={setIsDialogOpen} />
    </>
  );
};
